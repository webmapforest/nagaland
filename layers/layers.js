var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Nagaland_3 = new ol.format.GeoJSON();
var features_Nagaland_3 = format_Nagaland_3.readFeatures(json_Nagaland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nagaland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nagaland_3.addFeatures(features_Nagaland_3);
var lyr_Nagaland_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nagaland_3, 
                style: style_Nagaland_3,
                interactive: true,
                title: '<img src="styles/legend/Nagaland_3.png" /> Nagaland'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Nagaland_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleTerrainHybrid_1,lyr_GoogleSatelliteHybrid_2,lyr_Nagaland_3];
lyr_Nagaland_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Nagaland_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_Nagaland_3.set('fieldLabels', {'name': 'inline label', 'folders': 'inline label', 'description': 'inline label', 'altitude': 'inline label', 'alt_mode': 'inline label', 'time_begin': 'inline label', 'time_end': 'inline label', 'time_when': 'inline label', });
lyr_Nagaland_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});