var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TWIBajaVerapaz_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TWI Baja Verapaz<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_0.png" /> -6.5007<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_1.png" /> -4.9190<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_2.png" /> -3.3374<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_3.png" /> -1.7557<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_4.png" /> -0.1741<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_5.png" /> 1.4076<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_6.png" /> 2.9893<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_7.png" /> 4.4493<br />\
    <img src="styles/legend/TWIBajaVerapaz_1_8.png" /> 5.6659<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TWIBajaVerapaz_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-10109432.802205, 1674110.923758, -10002257.736054, 1729649.336459]
        })
    });
var format_MunicipiosBajaVerapaz_2 = new ol.format.GeoJSON();
var features_MunicipiosBajaVerapaz_2 = format_MunicipiosBajaVerapaz_2.readFeatures(json_MunicipiosBajaVerapaz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosBajaVerapaz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosBajaVerapaz_2.addFeatures(features_MunicipiosBajaVerapaz_2);
var lyr_MunicipiosBajaVerapaz_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosBajaVerapaz_2, 
                style: style_MunicipiosBajaVerapaz_2,
                popuplayertitle: 'Municipios Baja Verapaz',
                interactive: false,
                title: '<img src="styles/legend/MunicipiosBajaVerapaz_2.png" /> Municipios Baja Verapaz'
            });
var format_PobladosBajaVerapaz_3 = new ol.format.GeoJSON();
var features_PobladosBajaVerapaz_3 = format_PobladosBajaVerapaz_3.readFeatures(json_PobladosBajaVerapaz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PobladosBajaVerapaz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PobladosBajaVerapaz_3.addFeatures(features_PobladosBajaVerapaz_3);
var lyr_PobladosBajaVerapaz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PobladosBajaVerapaz_3, 
                style: style_PobladosBajaVerapaz_3,
                popuplayertitle: 'Poblados Baja Verapaz',
                interactive: false,
                title: '<img src="styles/legend/PobladosBajaVerapaz_3.png" /> Poblados Baja Verapaz'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TWIBajaVerapaz_1.setVisible(true);lyr_MunicipiosBajaVerapaz_2.setVisible(true);lyr_PobladosBajaVerapaz_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TWIBajaVerapaz_1,lyr_MunicipiosBajaVerapaz_2,lyr_PobladosBajaVerapaz_3];
lyr_MunicipiosBajaVerapaz_2.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'municipio': 'municipio', 'cod_dep': 'cod_dep', 'departamen': 'departamen', 'codigo_mun': 'codigo_mun', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_PobladosBajaVerapaz_3.set('fieldAliases', {'OID_': 'OID_', 'COD_CENSO': 'COD_CENSO', 'COD_CART': 'COD_CART', 'NUEVO_COD': 'NUEVO_COD', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'LUGAR_POBL': 'LUGAR_POBL', 'CATEGORIA': 'CATEGORIA', 'REUBICADO': 'REUBICADO', 'OID1': 'OID1', 'POBTOT': 'POBTOT', 'HOMBRES': 'HOMBRES', 'MUJERES': 'MUJERES', 'GRUPO1': 'GRUPO1', 'GRUPO2': 'GRUPO2', 'GRUPO3': 'GRUPO3', 'GRUPO4': 'GRUPO4', 'GRUPO5': 'GRUPO5', 'GRUPO6': 'GRUPO6', 'GRUPO7': 'GRUPO7', 'GRUPO8': 'GRUPO8', 'GRUPO9': 'GRUPO9', 'GRUPO10': 'GRUPO10', 'GRUPO11': 'GRUPO11', 'GRUPO12': 'GRUPO12', 'GRUPO13': 'GRUPO13', 'GRUPO14': 'GRUPO14', 'URBANA': 'URBANA', 'RURAL': 'RURAL', 'OID_1': 'OID_1', 'X_': 'X_', 'Y_': 'Y_', });
lyr_MunicipiosBajaVerapaz_2.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'municipio': 'TextEdit', 'cod_dep': 'TextEdit', 'departamen': 'TextEdit', 'codigo_mun': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_PobladosBajaVerapaz_3.set('fieldImages', {'OID_': 'Range', 'COD_CENSO': 'TextEdit', 'COD_CART': 'TextEdit', 'NUEVO_COD': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LUGAR_POBL': 'TextEdit', 'CATEGORIA': 'TextEdit', 'REUBICADO': 'TextEdit', 'OID1': 'Range', 'POBTOT': 'Range', 'HOMBRES': 'TextEdit', 'MUJERES': 'TextEdit', 'GRUPO1': 'Range', 'GRUPO2': 'Range', 'GRUPO3': 'Range', 'GRUPO4': 'Range', 'GRUPO5': 'Range', 'GRUPO6': 'Range', 'GRUPO7': 'Range', 'GRUPO8': 'Range', 'GRUPO9': 'Range', 'GRUPO10': 'Range', 'GRUPO11': 'Range', 'GRUPO12': 'Range', 'GRUPO13': 'Range', 'GRUPO14': 'Range', 'URBANA': 'Range', 'RURAL': 'Range', 'OID_1': 'Range', 'X_': 'TextEdit', 'Y_': 'TextEdit', });
lyr_MunicipiosBajaVerapaz_2.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'municipio': 'no label', 'cod_dep': 'no label', 'departamen': 'no label', 'codigo_mun': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_PobladosBajaVerapaz_3.set('fieldLabels', {'OID_': 'no label', 'COD_CENSO': 'no label', 'COD_CART': 'no label', 'NUEVO_COD': 'no label', 'DEPARTAMEN': 'no label', 'MUNICIPIO': 'no label', 'LUGAR_POBL': 'no label', 'CATEGORIA': 'no label', 'REUBICADO': 'no label', 'OID1': 'no label', 'POBTOT': 'no label', 'HOMBRES': 'no label', 'MUJERES': 'no label', 'GRUPO1': 'no label', 'GRUPO2': 'no label', 'GRUPO3': 'no label', 'GRUPO4': 'no label', 'GRUPO5': 'no label', 'GRUPO6': 'no label', 'GRUPO7': 'no label', 'GRUPO8': 'no label', 'GRUPO9': 'no label', 'GRUPO10': 'no label', 'GRUPO11': 'no label', 'GRUPO12': 'no label', 'GRUPO13': 'no label', 'GRUPO14': 'no label', 'URBANA': 'no label', 'RURAL': 'no label', 'OID_1': 'no label', 'X_': 'no label', 'Y_': 'no label', });
lyr_PobladosBajaVerapaz_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});