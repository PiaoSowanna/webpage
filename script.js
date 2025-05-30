var app = angular.module('anomalist', []);

app.directive('topMenu', function() {
   return {
      templateUrl: '/menu.html',
      scope: {
        active: '@'
      }
   };
});

app.directive('carousel', function() {
   return {
      templateUrl: '/carousel.html'
   };
});

app.controller('FrontPageCarousel', function($scope){
  $scope.slides = [
    {
      imageL: '/img/res01a.jpg',
      imageP: '/img/res01as.jpg'
    },
    {
      imageL: '/img/res02a.jpg',
      imageP: '/img/res02as.jpg'
    },
    {
      imageL: '/img/com01a.jpg',
      imageP: '/img/com01as.jpg'
    },
    {
      imageL: '/img/com02a.jpg',
      imageP: '/img/com02as.jpg'
    },
    {
      imageL: '/img/hos01a.jpg',
      imageP: '/img/hos01as.jpg'
    },
    {
      imageL: '/img/hos02a.jpg',
      imageP: '/img/hos02as.jpg'
    },	
    {
      imageL: '/img/edu01a.jpg',
      imageP: '/img/edu01as.jpg'
    },
    {
      imageL: '/img/edu02a.jpg',
      imageP: '/img/edu02as.jpg'
    },
	{
      imageL: '/img/ind01a.jpg',
      imageP: '/img/ind01as.jpg'
    }	
  ];
});

app.controller('MuseumCarousel', function($scope){
  $scope.slides = [
    {
      imageP: '/img/homeP.jpg',
      imageL: '/img/homeL.jpg'
    },
    {
      imageP: '/img/homeP.jpg',
      imageL: '/img/homeL.jpg'
    },
    {
      imageP: '/img/homeP.jpg',
      imageL: '/img/homeL.jpg'
    },
    {
      imageP: '/img/homeP.jpg',
      imageL: '/img/homeL.jpg'
    }
  ];
});

app.controller('BoligCarousel', function($scope){
  $scope.slides = [
    {
      imageP: '/category/bolig/img/b01.jpg',
      imageL: '/category/bolig/img/b01W.jpg'
    },
    {
      imageP: '/category/bolig/img/b02.jpg',
      imageL: '/category/bolig/img/b02W.jpg'
    },
    {
      imageP: '/category/bolig/img/b03.jpg',
      imageL: '/category/bolig/img/b03W.jpg'
    },
    {
      imageP: '/category/bolig/img/b04.jpg',
      imageL: '/category/bolig/img/b04W.jpg'
    },
    {
      imageP: '/category/bolig/img/b05.jpg',
      imageL: '/category/bolig/img/b05W.jpg'
    },
    {
      imageP: '/category/bolig/img/b06.jpg',
      imageL: '/category/bolig/img/b06W.jpg'
    },
    {
      imageP: '/category/bolig/img/b07.jpg',
      imageL: '/category/bolig/img/b07W.jpg'
    }	
  ];
});