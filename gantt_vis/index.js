'use strict';

module.exports=function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/gantt_vis/gantt_vis'
      ]
    }
  });
}
