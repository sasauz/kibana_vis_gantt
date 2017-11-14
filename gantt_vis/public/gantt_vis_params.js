import _ from 'lodash';
import { uiModules } from 'ui/modules';
import ganttVisParamsTemplate from 'plugins/gantt_vis/gantt_vis_params.html';

uiModules.get('kibana/gantt_vis')
  .controller('ganttVisParams', ['$scope', function ($scope) {

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
		  'vis.params.chheigh',
		  'vis.params.movable',
		  'vis.params.zoomable'
        ], function () {
          if (!$scope.vis) return;
        });
      }
    };
  });
