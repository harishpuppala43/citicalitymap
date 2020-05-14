var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Totalnumberoftestingcentersavailable_1 = new ol.format.GeoJSON();
var features_Totalnumberoftestingcentersavailable_1 = format_Totalnumberoftestingcentersavailable_1.readFeatures(json_Totalnumberoftestingcentersavailable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalnumberoftestingcentersavailable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totalnumberoftestingcentersavailable_1.addFeatures(features_Totalnumberoftestingcentersavailable_1);
var lyr_Totalnumberoftestingcentersavailable_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Totalnumberoftestingcentersavailable_1, 
                style: style_Totalnumberoftestingcentersavailable_1,
                interactive: true,
    title: 'Total number of testing centers available<br />\
    <img src="styles/legend/Totalnumberoftestingcentersavailable_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Totalnumberoftestingcentersavailable_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Totalnumberoftestingcentersavailable_1_2.png" /> 2 - 5<br />\
    <img src="styles/legend/Totalnumberoftestingcentersavailable_1_3.png" /> 5 - 11.8<br />\
    <img src="styles/legend/Totalnumberoftestingcentersavailable_1_4.png" /> 11.8 - 32<br />'
        });
var format_Testingsdonepermillionpopulation_2 = new ol.format.GeoJSON();
var features_Testingsdonepermillionpopulation_2 = format_Testingsdonepermillionpopulation_2.readFeatures(json_Testingsdonepermillionpopulation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Testingsdonepermillionpopulation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Testingsdonepermillionpopulation_2.addFeatures(features_Testingsdonepermillionpopulation_2);
var lyr_Testingsdonepermillionpopulation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Testingsdonepermillionpopulation_2, 
                style: style_Testingsdonepermillionpopulation_2,
                interactive: true,
    title: 'Testings done per million population <br />\
    <img src="styles/legend/Testingsdonepermillionpopulation_2_0.png" /> 30 - 376<br />\
    <img src="styles/legend/Testingsdonepermillionpopulation_2_1.png" /> 376 - 1590<br />\
    <img src="styles/legend/Testingsdonepermillionpopulation_2_2.png" /> 1590 - 2851<br />\
    <img src="styles/legend/Testingsdonepermillionpopulation_2_3.png" /> 2851 - 3704<br />\
    <img src="styles/legend/Testingsdonepermillionpopulation_2_4.png" /> 3704 - 9828<br />'
        });
var format_Availabilityofdoordelieryservices_3 = new ol.format.GeoJSON();
var features_Availabilityofdoordelieryservices_3 = format_Availabilityofdoordelieryservices_3.readFeatures(json_Availabilityofdoordelieryservices_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Availabilityofdoordelieryservices_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Availabilityofdoordelieryservices_3.addFeatures(features_Availabilityofdoordelieryservices_3);
var lyr_Availabilityofdoordelieryservices_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Availabilityofdoordelieryservices_3, 
                style: style_Availabilityofdoordelieryservices_3,
                interactive: true,
    title: 'Availability of door deliery services<br />\
    <img src="styles/legend/Availabilityofdoordelieryservices_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Availabilityofdoordelieryservices_3_1.png" /> 0 - 0<br />\
    <img src="styles/legend/Availabilityofdoordelieryservices_3_2.png" /> 0 - 0<br />\
    <img src="styles/legend/Availabilityofdoordelieryservices_3_3.png" /> 0 - 0<br />\
    <img src="styles/legend/Availabilityofdoordelieryservices_3_4.png" /> 0 - 5<br />'
        });
var format_Population_4 = new ol.format.GeoJSON();
var features_Population_4 = format_Population_4.readFeatures(json_Population_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_4.addFeatures(features_Population_4);
var lyr_Population_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Population_4, 
                style: style_Population_4,
                interactive: true,
    title: 'Population<br />\
    <img src="styles/legend/Population_4_0.png" /> 0 - 931218<br />\
    <img src="styles/legend/Population_4_1.png" /> 931218 - 2139658<br />\
    <img src="styles/legend/Population_4_2.png" /> 2139658 - 3725697<br />\
    <img src="styles/legend/Population_4_3.png" /> 3725697 - 7208200<br />\
    <img src="styles/legend/Population_4_4.png" /> 7208200 - 16787941<br />'
        });
var format_Populationdensity_5 = new ol.format.GeoJSON();
var features_Populationdensity_5 = format_Populationdensity_5.readFeatures(json_Populationdensity_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Populationdensity_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populationdensity_5.addFeatures(features_Populationdensity_5);
var lyr_Populationdensity_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Populationdensity_5, 
                style: style_Populationdensity_5,
                interactive: true,
    title: 'Population density<br />\
    <img src="styles/legend/Populationdensity_5_0.png" /> 0 - 500<br />\
    <img src="styles/legend/Populationdensity_5_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Populationdensity_5_2.png" /> 1000 - 2000<br />\
    <img src="styles/legend/Populationdensity_5_3.png" /> 2000 - 4000<br />\
    <img src="styles/legend/Populationdensity_5_4.png" /> 4000 - 36155<br />'
        });
var format_recovered_6 = new ol.format.GeoJSON();
var features_recovered_6 = format_recovered_6.readFeatures(json_recovered_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recovered_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recovered_6.addFeatures(features_recovered_6);
var lyr_recovered_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_recovered_6, 
                style: style_recovered_6,
                interactive: true,
    title: 'recovered<br />\
    <img src="styles/legend/recovered_6_0.png" /> 0 - 0<br />\
    <img src="styles/legend/recovered_6_1.png" /> 0 - 10<br />\
    <img src="styles/legend/recovered_6_2.png" /> 10 - 20<br />\
    <img src="styles/legend/recovered_6_3.png" /> 20 - 50<br />\
    <img src="styles/legend/recovered_6_4.png" /> 50 - 2739<br />'
        });
var format_deceased_7 = new ol.format.GeoJSON();
var features_deceased_7 = format_deceased_7.readFeatures(json_deceased_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deceased_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deceased_7.addFeatures(features_deceased_7);
var lyr_deceased_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deceased_7, 
                style: style_deceased_7,
                interactive: true,
    title: 'deceased<br />\
    <img src="styles/legend/deceased_7_0.png" /> 0 - 0<br />\
    <img src="styles/legend/deceased_7_1.png" /> 0 - 10<br />\
    <img src="styles/legend/deceased_7_2.png" /> 10 - 20<br />\
    <img src="styles/legend/deceased_7_3.png" /> 20 - 30<br />\
    <img src="styles/legend/deceased_7_4.png" /> 30 - 621<br />'
        });
var format_confirmed_8 = new ol.format.GeoJSON();
var features_confirmed_8 = format_confirmed_8.readFeatures(json_confirmed_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confirmed_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confirmed_8.addFeatures(features_confirmed_8);
var lyr_confirmed_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_confirmed_8, 
                style: style_confirmed_8,
                interactive: true,
    title: 'confirmed<br />\
    <img src="styles/legend/confirmed_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/confirmed_8_1.png" /> 0 - 20<br />\
    <img src="styles/legend/confirmed_8_2.png" /> 20 - 50<br />\
    <img src="styles/legend/confirmed_8_3.png" /> 50 - 150<br />\
    <img src="styles/legend/confirmed_8_4.png" /> 150 - 16738<br />'
        });
var format_CriticalityindexEvaluatedusingTOPSIStechnique_9 = new ol.format.GeoJSON();
var features_CriticalityindexEvaluatedusingTOPSIStechnique_9 = format_CriticalityindexEvaluatedusingTOPSIStechnique_9.readFeatures(json_CriticalityindexEvaluatedusingTOPSIStechnique_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CriticalityindexEvaluatedusingTOPSIStechnique_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CriticalityindexEvaluatedusingTOPSIStechnique_9.addFeatures(features_CriticalityindexEvaluatedusingTOPSIStechnique_9);
var lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CriticalityindexEvaluatedusingTOPSIStechnique_9, 
                style: style_CriticalityindexEvaluatedusingTOPSIStechnique_9,
                interactive: true,
    title: 'Criticality index (Evaluated using TOPSIS technique)<br />\
    <img src="styles/legend/CriticalityindexEvaluatedusingTOPSIStechnique_9_0.png" /> 0 - 0.567<br />\
    <img src="styles/legend/CriticalityindexEvaluatedusingTOPSIStechnique_9_1.png" /> 0.567 - 0.588<br />\
    <img src="styles/legend/CriticalityindexEvaluatedusingTOPSIStechnique_9_2.png" /> 0.588 - 0.599<br />\
    <img src="styles/legend/CriticalityindexEvaluatedusingTOPSIStechnique_9_3.png" /> 0.599 - 0.6043<br />\
    <img src="styles/legend/CriticalityindexEvaluatedusingTOPSIStechnique_9_4.png" /> 0.6043 - 1<br />'
        });
var format_Lastupdated1245AM15052020_10 = new ol.format.GeoJSON();
var features_Lastupdated1245AM15052020_10 = format_Lastupdated1245AM15052020_10.readFeatures(json_Lastupdated1245AM15052020_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lastupdated1245AM15052020_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lastupdated1245AM15052020_10.addFeatures(features_Lastupdated1245AM15052020_10);
var lyr_Lastupdated1245AM15052020_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lastupdated1245AM15052020_10, 
                style: style_Lastupdated1245AM15052020_10,
                interactive: true,
                title: '<img src="styles/legend/Lastupdated1245AM15052020_10.png" /> Last updated 12:45 AM, 15-05-2020'
            });

lyr_CartoLight_0.setVisible(true);lyr_Totalnumberoftestingcentersavailable_1.setVisible(false);lyr_Testingsdonepermillionpopulation_2.setVisible(false);lyr_Availabilityofdoordelieryservices_3.setVisible(false);lyr_Population_4.setVisible(false);lyr_Populationdensity_5.setVisible(false);lyr_recovered_6.setVisible(false);lyr_deceased_7.setVisible(false);lyr_confirmed_8.setVisible(false);lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9.setVisible(true);lyr_Lastupdated1245AM15052020_10.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Totalnumberoftestingcentersavailable_1,lyr_Testingsdonepermillionpopulation_2,lyr_Availabilityofdoordelieryservices_3,lyr_Population_4,lyr_Populationdensity_5,lyr_recovered_6,lyr_deceased_7,lyr_confirmed_8,lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9,lyr_Lastupdated1245AM15052020_10];
lyr_Totalnumberoftestingcentersavailable_1.set('fieldAliases', {'id': 'id', 'st_nm': 'st_nm', 'Hospitals': 'Hospitals', });
lyr_Testingsdonepermillionpopulation_2.set('fieldAliases', {'id': 'id', 'st_nm': 'st_nm', 'testings p': 'testings p', });
lyr_Availabilityofdoordelieryservices_3.set('fieldAliases', {'State': 'State', 'District': 'District', 'Facilities': 'Facilities', });
lyr_Population_4.set('fieldAliases', {'State': 'State', 'District': 'District', 'Population': 'Population', });
lyr_Populationdensity_5.set('fieldAliases', {'State': 'State', 'District': 'District', 'Density': 'Density', });
lyr_recovered_6.set('fieldAliases', {'State': 'State', 'District': 'District', 'Recovered': 'Recovered', });
lyr_deceased_7.set('fieldAliases', {'State': 'State', 'District': 'District', 'Deceased': 'Deceased', });
lyr_confirmed_8.set('fieldAliases', {'State': 'State', 'District': 'District', 'Confirmed': 'Confirmed', });
lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9.set('fieldAliases', {'State': 'State', 'District': 'District', 'C.I': 'C.I', });
lyr_Lastupdated1245AM15052020_10.set('fieldAliases', {'Id': 'Id', });
lyr_Totalnumberoftestingcentersavailable_1.set('fieldImages', {'id': 'TextEdit', 'st_nm': 'TextEdit', 'Hospitals': 'TextEdit', });
lyr_Testingsdonepermillionpopulation_2.set('fieldImages', {'id': 'TextEdit', 'st_nm': 'TextEdit', 'testings p': 'TextEdit', });
lyr_Availabilityofdoordelieryservices_3.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Facilities': 'TextEdit', });
lyr_Population_4.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Population': 'TextEdit', });
lyr_Populationdensity_5.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Density': 'TextEdit', });
lyr_recovered_6.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Recovered': 'TextEdit', });
lyr_deceased_7.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Deceased': 'TextEdit', });
lyr_confirmed_8.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'Confirmed': '', });
lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9.set('fieldImages', {'State': 'TextEdit', 'District': 'TextEdit', 'C.I': 'TextEdit', });
lyr_Lastupdated1245AM15052020_10.set('fieldImages', {'Id': '', });
lyr_Totalnumberoftestingcentersavailable_1.set('fieldLabels', {'id': 'no label', 'st_nm': 'no label', 'Hospitals': 'no label', });
lyr_Testingsdonepermillionpopulation_2.set('fieldLabels', {'id': 'no label', 'st_nm': 'no label', 'testings p': 'no label', });
lyr_Availabilityofdoordelieryservices_3.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Facilities': 'no label', });
lyr_Population_4.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Population': 'no label', });
lyr_Populationdensity_5.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Density': 'no label', });
lyr_recovered_6.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Recovered': 'no label', });
lyr_deceased_7.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Deceased': 'no label', });
lyr_confirmed_8.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'Confirmed': 'no label', });
lyr_CriticalityindexEvaluatedusingTOPSIStechnique_9.set('fieldLabels', {'State': 'no label', 'District': 'no label', 'C.I': 'no label', });
lyr_Lastupdated1245AM15052020_10.set('fieldLabels', {'Id': 'no label', });
lyr_Lastupdated1245AM15052020_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});