import 'ui/agg_table';
import 'ui/agg_table/agg_table_group';

import 'plugins/gantt_vis/gantt_vis.less';
import 'plugins/gantt_vis/gantt_vis_controller';
import 'plugins/gantt_vis/gantt_vis_params';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisSchemasProvider } from 'ui/vis/schemas';
import ganttVisTemplate from 'plugins/gantt_vis/gantt_vis.html';

import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

VisTypesRegistryProvider.register(GanttVisProvider);

function GanttVisProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new TemplateVisType({
    name: 'gantt',
    title: 'Gantt-Chart',
    description: 'First Gantt Chart on Kibana.',
	//category: CATEGORY.OTHER,
    icon: 'fa-align-left',
    template: ganttVisTemplate,
	//requiresSearch: false,
    //requiresTimePicker: true,
    params: {
      defaults: {
		  stacked: true,
		  autoresize: true,	
		  verticalscroll: false,
		  movable: false,
		  zoomable: false
      },
      editor: require('plugins/gantt_vis/gantt_vis_params.html')
    },
    schemas: new Schemas([
      {
        group: 'buckets',
        name: 'startbucket',
        title: 'Start',
		min: 1,
		max: 1,
        aggFilter: [
		  //'terms',
          //'significant_terms',
          //'filters',
          'date_range',
          //'histogram',
          'date_histogram'
          //'range'
        ],
		defaults: [
          { type: 'date_histogram', schema: 'startbucket' }
        ]
      },
      {
        group: 'buckets',
        name: 'endbucket',
        title: 'End',
		min: 1,
		max: 1,
        aggFilter: [
		  //'terms',
          //'significant_terms',
          //'filters',
          'date_range',
          //'histogram',
          'date_histogram'
          //'range'
        ],
		defaults: [
          { type: 'date_histogram', schema: 'endbucket' }
        ]
      },
	  {
        group: 'buckets',
        name: 'itembucket',
        title: 'Item Content',
		min: 0,
		max: 1,
        aggFilter: [
		  'terms',
          'significant_terms',
          'filters',
          //'date_range',
          'histogram',
          //'date_histogram'
          'range'
        ]/*,
		defaults: [
          { type: 'terms', schema: 'itembucket' }
        ]*/
      },
	  {
        group: 'buckets',
        name: 'groupbucket',
        title: 'Group By',
		min: 0,
		max: 1,
        aggFilter: [
		  'terms',
          'significant_terms',
          'filters',
          //'date_range',
          'histogram',
          //'date_histogram'
          'range'
        ]/*,
		defaults: [
          { type: 'terms', schema: 'groupbucket' }
        ]*/
      }
    ])
  });
}

// export the provider so that the visType can be required with Private()
export default GanttVisProvider;
