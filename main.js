require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/ScaleBar",
  "esri/widgets/Search",
  "esri/widgets/LayerList",
  "esri/widgets/Legend",
  "esri/widgets/BasemapGallery",
  "esri/layers/FeatureLayer"
], function(
  Map,
  MapView,
  ScaleBar,
  Search,
  LayerList,
  Legend,
  BasemapGallery,
  FeatureLayer
) {


  const map = new Map({
    basemap: "streets"
  });


  const view = new MapView({
    container: "viewDiv",
    map: map
  });


  const layer = new FeatureLayer({
    url: "https://www.geosceneonline.cn/server/rest/services/Hosted/城市市政设施问题上报与管理平台_查看/FeatureServer",
    outFields: ["*"] 
  });

  map.add(layer);


 constraints: { minZoom: 3 }

view.when(() => {
  layer.when(() => {
    view.goTo(layer.fullExtent, {
      padding: 50
    });
  });
});

  

  const scaleBar = new ScaleBar({
    view: view
  });
  view.ui.add(scaleBar, "bottom-left");


  const search = new Search({
    view: view
  });
  view.ui.add(search, "top-right");


  const legend = new Legend({
    view: view
  });
  view.ui.add(legend, "bottom-right");


  const layerList = new LayerList({
    view: view,
    container: "sidebar"
  });


  const basemapGallery = new BasemapGallery({
    view: view,
    container: "sidebar"
  });


  view.popup.autoOpenEnabled = true;

});