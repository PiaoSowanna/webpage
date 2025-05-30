  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

var projects = angular.module('projects', []);

projects.controller('pro', function($scope){
  $scope.currentType = undefined;
  $scope.types = ['Residential','Hospitality','Commercial','Educational','Industrial'];
  $scope.projects = [
    {
      image: 'img/res1.jpg',
      caption: 'Residential',
      type: 'Residential',
	  text: ''
    },
    {
      image: 'img/res2.jpg',
      caption: 'Residential',
      type: 'Residential',
	  text: ''
	  },
    {
      image: 'img/res3.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
    {
      image: 'img/res4.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
    {
      image: 'img/res5.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
    {
      image: 'img/res6.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
    {
      image: 'img/res7.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
	{
	  image: 'img/res8.jpg',
	  caption: 'Residential',
      type: 'Residential',
	  text: ''    
	},
	{
      image: 'img/comer1.jpg',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
    {
      image: 'img/comer2.jpg',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
    },
	{
      image: 'img/comer3.jpg',
      caption: 'Commercial',
      type: 'Commercial',
	  text: ''
	},
	{
      image: 'img/hos1.jpg',
      caption: 'Hospitality',
      type: 'Hospitality',
	  text: ''
    },
    {
      image: 'img/hos2.jpg',
      caption: 'Hospitality',
      type: 'Hospitality',
	  text: ''
    },
	{
      image: 'img/hos3.jpg',
      caption: 'Hospitality',
      type: 'Hospitality',
	  text: ''
	},
	{
      image: 'img/edu1.jpg',
      caption: 'Hospitality',
      type: 'Hospitality',
	  text: ''
	},
	{
      image: 'img/edu2.jpg',
      caption: 'Educational',
      type: 'Educational',
	  text: ''
    },
    {
      image: 'img/edu3.jpg',
      caption: 'Educational',
      type: 'Educational',
	  text: ''
    },
	{
      image: 'img/edu5.jpg',
      caption: 'Educational',
      type: 'Educational',
	  text: ''
	},
	{
      image: 'img/ind1.jpg',
      caption: 'Industrial',
      type: 'Industrial',
	  text: ''
	}	
  ];
});

angular.element(function() {
    angular.bootstrap(document.getElementById("app2"), ['projects']);
});