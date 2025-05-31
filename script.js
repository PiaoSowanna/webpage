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
      imageL: '/webpage/img/res01a.jpg',
      imageP: '/webpage/img/res01as.jpg'
    },
    {
      imageL: '/webpage/img/res02a.jpg',
      imageP: '/webpage/img/res02as.jpg'
    },
    {
      imageL: '/webpage/img/com01a.jpg',
      imageP: '/webpage/img/com01as.jpg'
    },
    {
      imageL: '/webpage/img/com02a.jpg',
      imageP: '/webpage/img/com02as.jpg'
    },
    {
      imageL: '/webpage/img/hos01a.jpg',
      imageP: '/webpage/img/hos01as.jpg'
    },
    {
      imageL: '/webpage/img/hos02a.jpg',
      imageP: '/webpage/img/hos02as.jpg'
    },	
    {
      imageL: '/webpage/img/edu01a.jpg',
      imageP: '/webpage/img/edu01as.jpg'
    },
    {
      imageL: '/webpage/img/edu02a.jpg',
      imageP: '/webpage/img/edu02as.jpg'
    },
	{
      imageL: '/webpage/img/ind01a.jpg',
      imageP: '/webpage/img/ind01as.jpg'
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