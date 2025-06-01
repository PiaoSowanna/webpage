  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

var projects = angular.module('projects', []);

projects.controller('pro', function($scope){
  $scope.currentType = undefined;
  $scope.types = ['Commercial','Hospitality','Educational','Residential'];
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
    },
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
    },
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
    },
    {
      image: 'img/educational/img58b.png',
      caption: 'Educational',
      type: 'Educational',
	    text: ''
    },
    {
      image: 'img/hospitality/img36b.jpg',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img37b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img38b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img39b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img40b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img41b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img42b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img43b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/hospitality/img44b.png',
      caption: 'Hospitality',
      type: 'Hospitality',
	    text: ''
    },
    {
      image: 'img/residential/img02a.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img05a.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img01b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img03b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img04b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img10b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img11b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img12b.jpg',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img13b.jpg',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img14b.jpg',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img15b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img16b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img17b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img18b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img19b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img20b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img21b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img22b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    },
    {
      image: 'img/residential/img23b.png',
      caption: 'Residential',
      type: 'Residential',
	    text: ''
    }                                            
  ];
});

angular.element(function() {
    angular.bootstrap(document.getElementById("app2"), ['projects']);
});