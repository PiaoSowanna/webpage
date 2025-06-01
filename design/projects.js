  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

var projects = angular.module('projects', []);

projects.controller('pro', function($scope){
  $scope.currentType = undefined;
  $scope.types = ['Commercial','Hospitality','Educational','Industrial'];
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
    },
    {
      image: 'img/educational/img2b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img45b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img46b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img46b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img47b.png',
      caption: 'Educational',
      type: 'Educational',
	  text: ''
    } ,
    {
      image: 'img/educational/img48b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img49b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img50b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img51b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img59b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/commercial/img53b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img54b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img55b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img56b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img57b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    } ,
    {
      image: 'img/educational/img58b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    }                                                
  ];
});

angular.element(function() {
    angular.bootstrap(document.getElementById("app2"), ['projects']);
});