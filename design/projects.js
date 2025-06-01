  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

var projects = angular.module('projects', []);

projects.controller('pro', function($scope){
  $scope.currentType = undefined;
  $scope.types = ['Commercial','Educational','Hospitality','Residential'];
  $scope.projects = [
    {
      image: 'img/commercial/img06b.png',
      caption: 'C.01.CAMP',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img07b.png',
      caption: 'C.01.CAMP',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img08b.png',
      caption: 'C.02',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img09b.png',
      caption: 'C.02',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img24b.png',
      caption: 'C.03',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img25b.png',
      caption: 'C.03',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img26b.png',
      caption: 'C.04',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img28b.png',
      caption: 'C.04',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img29b.png',
      caption: 'C.05',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img30b.png',
      caption: 'C.06.WONDER PLANET',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img31b.png',
      caption: 'C.06.WONDER PLANET',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img32b.png',
      caption: 'C.06.WONDER PLANET',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img33b.png',
      caption: 'C.06.WONDER PLANET',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img34b.png',
      caption: 'C.06.WONDER PLANET',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/commercial/img35b.png',
      caption: 'C.07',
      type: 'Commercial',
	    text: ''
    },
    {
      image: 'img/educational/img45b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img46b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    },
    {
      image: 'img/educational/img47b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	  text: ''
    } ,
    {
      image: 'img/educational/img48b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img49b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img50b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img51b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img52b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img54b.png',
      caption: 'E.01.ECO VILLAGE',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img55b.png',
      caption: 'E.02.FINNSKOGEN',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img56b.png',
      caption: 'E.02.FINNSKOGEN',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img57b.png',
      caption: 'E.02.FINNSKOGEN',
      type: 'Educational',
	    text: ''
    },
    {
      image: 'img/educational/img58b.png',
      caption: 'E.02.FINNSKOGEN',
      type: 'Educational',
	    text: ''
    },
    {
      image: 'img/educational/img59b.png',
      caption: 'E.02.FINNSKOGEN',
      type: 'Educational',
	    text: ''
    },
    {
      image: 'img/hospitality/img36b.jpg',
      caption: 'H.01',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img37b.png',
      caption: 'H.01',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img38b.png',
      caption: 'H.01',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img39b.png',
      caption: 'H.01',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img40b.png',
      caption: 'H.01',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img41b.png',
      caption: 'H.02',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img42b.png',
      caption: 'H.02',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img43b.png',
      caption: 'H.02',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img44b.png',
      caption: 'H.02',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/residential/img01b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img02b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img03b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img04b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img05b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img10b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img11b.png',
      caption: 'R.01',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img12b.jpg',
      caption: 'R.02',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img13b.jpg',
      caption: 'R.02',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img14b.jpg',
      caption: 'R.02',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img15b.png',
      caption: 'R.03',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img16b.png',
      caption: 'R.03',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img17b.png',
      caption: 'R.03',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img18b.png',
      caption: 'R.03',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img19b.png',
      caption: 'R.03',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img20b.png',
      caption: 'R.04',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img21b.png',
      caption: 'R.04',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img22b.png',
      caption: 'R.04',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img23b.png',
      caption: 'R.04',
      type: 'Residential',
	    text: ''
    }                                            
  ];
});

angular.element(function() {
    angular.bootstrap(document.getElementById("app2"), ['projects']);
});