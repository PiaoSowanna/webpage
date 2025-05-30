# -*- coding: utf-8 -*-
"""
Created on Sun May 26 12:22:52 2024

@author: henri
"""

# flex -> flexibility

import json
import torch
from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer("all-MiniLM-L6-v2")
#model = SentenceTransformer("intfloat/e5-large-v2", device = "cuda")

#cat_file = open('flex_categories.json')
#cat_file = open('tincan_categories.json')
cat_file = open('sponge_categories.json')
flex_categories = json.load(cat_file)

#zero_originality = json.load(open('zero_originality.json'))
#zero_originality = json.load(open('zero_orig_tincans.json'))
zero_originality = json.load(open('zero_orig_sponges.json'))

#inputs = json.load(open('tincan_input/31B.json'))
inputs = json.load(open('input/sponge_6.json'))

#threshold = 0.85
threshold = 0.5

orig_cnt = 0
flex_score = set()

def similarity1(s1, s2):
    emb1 = model.encode(s1)
    emb2 = model.encode(s2)
    cos_sim = util.cos_sim(emb1, emb2)
    return cos_sim

def similarity2(s1, s2):
    emb1 = model.encode("query: " + s1)
    emb2 = model.encode("query: " + s2)
    cos_sim = util.cos_sim(emb1, emb2)
    return cos_sim

def get_flex_category(id):
    for flex_category in flex_categories:
        if id == flex_category['id']:
            return flex_category
    raise Exception("Flexibility category not found")

def check_input(input):
    global orig_cnt, flex_score
    print(f"Checking input: {input}")
    best_score = 0
    best_cat = -1
    

    for flex_category in flex_categories:
        split_description = (flex_category['title'] + ";" + flex_category['description']).split(';')
        for description in split_description:
            sim_score = similarity1(input, description)
            if sim_score > best_score:
#                print(f"Current: {description} {sim_score}")
                best_cat = flex_category['id']
                best_score = sim_score
    
    sim_score = torch.tensor([[0.0]])
    sim_cat = 0
    for category in zero_originality:
        if category['description'] != "":
            split_description = category['description'].split(';')
            for description in split_description:
                score = similarity1(input, description)
                if score > sim_score:
#                    print(f"Current: {description}")
                    sim_score = score
                    sim_cat = category['id']
    
    if sim_score > best_score:
        best_score = sim_score
        best_cat = sim_cat

                        
    print(f"AI chose flexibility category number {best_cat}: {get_flex_category(best_cat)['title']}")
    
    flex_score.add(get_flex_category(best_cat)['id'])
    print(best_score)
    if sim_score[0,0].item() < threshold:
        print("ORIGINAL")
        orig_cnt += 1
    else:
        print('not original')    
            
cnt = 1

for input in inputs:
    print(f"#{cnt}")
    cnt += 1
    check_input(input['input'])
    print()
    
print(f"Originality score: {orig_cnt}")
print(f"Flexibility score: {len(flex_score)}")
