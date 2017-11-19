import _ from 'lodash';
import { uiModules } from 'ui/modules';
import ganttVisParamsTemplate from 'plugins/gantt_vis/gantt_vis_params.html';

uiModules.get('kibana/gantt_vis')
  .controller('ganttVisParams', ['$scope', function ($scope) {
/*
    $scope.data = {
      graphTypes: [{
        id: 'bar',
        name: 'Bar Graph'
      }, {
        id: 'bar-color',
        name: 'Bar Colored'
      }, {
        id: 'bar-size',
        name: 'Bar Size'
      }, {
        id: 'dot',
        name: 'Dots'
      }, {
        id: 'dot-line',
        name: 'Dos and Lines'
      }, {
        id: 'dot-color',
        name: 'Dots Colored'
      }, {
        id: 'dot-size',
        name: 'Dots Size'
      }, {
        id: 'line',
        name: 'Lines'
      }, {
        id: 'grid',
        name: 'Grid'
      }, {
        id: 'surface',
        name: 'Surface'
      }]
    };
*/
  }])
  .directive('ganttVisParams', function () {
    return {
      restrict: 'E',
      template: ganttVisParamsTemplate,
      link: function ($scope) {
		$scope.$watchMulti([
			'vis.params.stacked',
			'vis.params.autoresize',		  
			'vis.params.verticalscroll',
			//'vis.params.chheigh',
			'vis.params.movable',
			'vis.params.zoomable'
        ], function () {
          if (!$scope.vis) return;
        });
      }
    };
  });
