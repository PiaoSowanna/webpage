  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

var projects = angular.module('projects', []);

projects.controller('pro', function($scope){
  $scope.currentType = undefined;
  $scope.types = ['Commercial','Hospitality','Commercial','Educational','Industrial'];
  $scope.projects = [
    {
      image: 'img/commercial/img06b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img07b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img08b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img24b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img25b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img26b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img27b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img28b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img29b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img30b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img31b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img32b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img33b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img34b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/commercial/img35b.png',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    }                                                   
  ];
});

angular.element(function() {
    angular.bootstrap(document.getElementById("app2"), ['projects']);
});