(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:customerController
	 * @function
	 * 
	 * @description
	 *  Controller for customer edit page 
	 */
 	angular.module('app').controller('app_chartController', chartController);

	function chartController($scope) {
		
	}
	
	angular.module("app").controller("BarCtrl", BarCtrl);
	
	function BarCtrl($scope) {
		 $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
		  $scope.series = ['Series A', 'Series B'];

		  $scope.data = [
		    [65, 59, 80, 81, 56, 55, 40],
		    [28, 48, 40, 19, 86, 27, 90]
		  ];				
	}
	
	
	angular.module("app").controller("LineCtrl", LineCtrl);
	
	function LineCtrl($scope) {

		  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
		  $scope.series = ['Series A', 'Series B'];
		  $scope.data = [
		    [65, 59, 80, 81, 56, 55, 40],
		    [28, 48, 40, 19, 86, 27, 90]
		  ];
		  $scope.onClick = function (points, evt) {
		    console.log(points, evt);
		  };
		  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
		  $scope.options = {
		    scales: {
		      yAxes: [
		        {
		          id: 'y-axis-1',
		          type: 'linear',
		          display: true,
		          position: 'left'
		        },
		        {
		          id: 'y-axis-2',
		          type: 'linear',
		          display: true,
		          position: 'right'
		        }
		      ]
		    }
		  };
		}
             
	angular.module("app").controller("DoughnutCtrl", DoughnutCtrl);
	
	function DoughnutCtrl ($scope) {
		  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
		  $scope.data = [300, 500, 100];
	}
	
	angular.module("app").controller("RadarCtrl", RadarCtrl);
	
	function RadarCtrl ($scope) {
		  $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

		  $scope.data = [
		    [65, 59, 90, 81, 56, 55, 40],
		    [28, 48, 40, 19, 96, 27, 100]
		  ];
	}
	
	
	angular.module("app").controller("PieCtrl", PieCtrl);
	
	function PieCtrl ($scope) {
		  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
		  $scope.data = [300, 500, 100];
	}
	
	angular.module("app").controller("PolarAreaCtrl", PolarAreaCtrl);
	
	function PolarAreaCtrl ($scope) {
		  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
		  $scope.data = [300, 500, 100, 40, 120];
		}
		    
	// falta 1
	
	angular.module("app").controller("BarCtrl2" , BarCtrl2);
	function BarCtrl2 ($scope) {
			    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
			    $scope.series = ['Series A', 'Series B'];

			    $scope.data = [
			      [65, 59, 80, 81, 56, 55, 40],
			      [28, 48, 40, 19, 86, 27, 90]
			    ];
	}

	
	angular.module("app").controller("BubbleCtrl", BubbleCtrl);
	
	function BubbleCtrl ($scope) {
		$scope.options = {
			      scales: {
			        xAxes: [{
			          display: false,
			          ticks: {
			            max: 125,
			            min: -125,
			            stepSize: 10
			          }
			        }],
			        yAxes: [{
			          display: false,
			          ticks: {
			            max: 125,
			            min: -125,
			            stepSize: 10
			          }
			        }]
			      }
			    };

			    createChart();
			    //$interval(createChart, 2000);

			    function createChart () {
			      $scope.series = [];
			      $scope.data = [];
			      for (var i = 0; i < 50; i++) {
			        $scope.series.push(`Series ${i}`);
			        $scope.data.push([{
			          x: randomScalingFactor(),
			          y: randomScalingFactor(),
			          r: randomRadius()
			        }]);
			      }
			    }

			    function randomScalingFactor () {
			      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
			    }

			    function randomRadius () {
			      return Math.abs(randomScalingFactor()) / 4;
			    }
	}
	   
	
	angular.module("app").controller("BaseCtrl", BaseCtrl);
	function BaseCtrl ($scope) {
			    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
			    $scope.data = [300, 500, 100, 40, 120];
			    $scope.type = 'polarArea';

			    $scope.toggle = function () {
			      $scope.type = $scope.type === 'polarArea' ?
			        'pie' : 'polarArea';
			    };
	}
	
})();


