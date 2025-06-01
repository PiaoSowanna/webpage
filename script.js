var app = angular.module('anomalist', []);

app.directive('topMenu', function() {
   return {
      templateUrl: '/webpage/menu.html',
      scope: {
        active: '@'
      }
   };
});

app.directive('carousel', function() {
   return {
      templateUrl: '/webpage/carousel.html'
   };
});

app.controller('FrontPageCarousel', function($scope){
  $scope.slides = [
    {
      imageL: '/webpage/img/img01a.png',
      imageP: '/webpage/img/img01b.png'
    },
    {
      imageL: '/webpage/img/img02a.png',
      imageP: '/webpage/img/img02b.png'
    },
    {
      imageL: '/webpage/img/img03a.png',
      imageP: '/webpage/img/img03b.png'
    },
    {
      imageL: '/webpage/img/img04a.png',
      imageP: '/webpage/img/img04b.png'
    },
    {
      imageL: '/webpage/img/img05a.png',
      imageP: '/webpage/img/img05b.png'
    },
    {
      imageL: '/webpage/img/img06a.png',
      imageP: '/webpage/img/img06b.png'
    },	
    {
      imageL: '/webpage/img/img07a.png',
      imageP: '/webpage/img/img07b.png'
    },
    {
      imageL: '/webpage/img/img08a.png',
      imageP: '/webpage/img/img08b.png'
    },
	{
      imageL: '/webpage/img/img09a.png',
      imageP: '/webpage/img/img09b.png'
    }	
  ];
});

app.controller('MuseumCarousel', function($scope){
  $scope.slides = [
    {
      imageP: '/webpage/img/homeP.jpg',
      imageL: '/webpage/img/homeL.jpg'
    },
    {
      imageP: '/webpage/img/homeP.jpg',
      imageL: '/webpage/img/homeL.jpg'
    },
    {
      imageP: '/webpage/img/homeP.jpg',
      imageL: '/webpage/img/homeL.jpg'
    },
    {
      imageP: '/webpage/img/homeP.jpg',
      imageL: '/webpage/img/homeL.jpg'
    }
  ];
});

app.controller('BoligCarousel', function($scope){
  $scope.slides = [
    {
      imageP: '/webpage/category/bolig/img/b01.jpg',
      imageL: '/webpage/category/bolig/img/b01W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b02.jpg',
      imageL: '/webpage/category/bolig/img/b02W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b03.jpg',
      imageL: '/webpage/category/bolig/img/b03W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b04.jpg',
      imageL: '/webpage/category/bolig/img/b04W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b05.jpg',
      imageL: '/webpage/category/bolig/img/b05W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b06.jpg',
      imageL: '/webpage/category/bolig/img/b06W.jpg'
    },
    {
      imageP: '/webpage/category/bolig/img/b07.jpg',
      imageL: '/webpage/category/bolig/img/b07W.jpg'
    }	
  ];
});