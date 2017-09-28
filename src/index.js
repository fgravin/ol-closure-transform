goog.module('app');

const _ol_Map_ = goog.require('ol.map');
const _ol_View_ = goog.require('ol.view');
const _ol_layer_Tile_ = goog.require('ol.layer.tile');
const _ol_source_OSM_ = goog.require('ol.source.osm');


/**
 * @type {ol.Map}
 */
let map = new _ol_Map_({
  target: 'map',
  layers: [
    new _ol_layer_Tile_({
      source: new _ol_source_OSM_()
    })
  ],
  view: new _ol_View_({
    center: [0, 0],
    zoom: 4
  })
});
