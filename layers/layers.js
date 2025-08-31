var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_Magetan_Permendagri_AR_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Magetan_Permendagri_AR_1 = format_Batas_Administrasi_Magetan_Permendagri_AR_1.readFeatures(json_Batas_Administrasi_Magetan_Permendagri_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Magetan_Permendagri_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Magetan_Permendagri_AR_1.addFeatures(features_Batas_Administrasi_Magetan_Permendagri_AR_1);
var lyr_Batas_Administrasi_Magetan_Permendagri_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_Magetan_Permendagri_AR_1, 
                style: style_Batas_Administrasi_Magetan_Permendagri_AR_1,
                popuplayertitle: "Batas_Administrasi_Magetan_Permendagri_AR",
                interactive: false,
    title: 'Batas_Administrasi_Magetan_Permendagri_AR<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_0.png" /> Kec.Barat<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_1.png" /> Kec.Bendo<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_2.png" /> Kec.Karangrejo<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_3.png" /> Kec.Karas<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_4.png" /> Kec.Kartoharjo<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_5.png" /> Kec.Kawedanan<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_6.png" /> Kec.Lembeyan<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_7.png" /> Kec.Magetan<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_8.png" /> Kec.Maospati<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_9.png" /> Kec.Ngariboyo<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_10.png" /> Kec.Nguntoronadi<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_11.png" /> Kec.Panekan<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_12.png" /> Kec.Parang<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_13.png" /> Kec.Plaosan<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_14.png" /> Kec.Poncol<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_15.png" /> Kec.Sidorejo<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_16.png" /> Kec.Sukomoro<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_17.png" /> Kec.Takeran<br />\
    <img src="styles/legend/Batas_Administrasi_Magetan_Permendagri_AR_1_18.png" /> <br />'
        });
var format_Batas_Kecamatan_Magetan_Permendagri_AR_2 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_Magetan_Permendagri_AR_2 = format_Batas_Kecamatan_Magetan_Permendagri_AR_2.readFeatures(json_Batas_Kecamatan_Magetan_Permendagri_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_Magetan_Permendagri_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_Magetan_Permendagri_AR_2.addFeatures(features_Batas_Kecamatan_Magetan_Permendagri_AR_2);
var lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_Magetan_Permendagri_AR_2, 
                style: style_Batas_Kecamatan_Magetan_Permendagri_AR_2,
                popuplayertitle: "Batas_Kecamatan_Magetan_Permendagri_AR",
                interactive: true,
                title: '<img src="styles/legend/Batas_Kecamatan_Magetan_Permendagri_AR_2.png" /> Batas_Kecamatan_Magetan_Permendagri_AR'
            });
var format_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3 = new ol.format.GeoJSON();
var features_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3 = format_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.readFeatures(json_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.addFeatures(features_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3);
var lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3, 
                style: style_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3,
                popuplayertitle: "Kab_Batas_Administrasi_Magetan_Permendagri_AR",
                interactive: false,
                title: '<img src="styles/legend/Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.png" /> Kab_Batas_Administrasi_Magetan_Permendagri_AR'
            });
var format_Buffer_4 = new ol.format.GeoJSON();
var features_Buffer_4 = format_Buffer_4.readFeatures(json_Buffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_4.addFeatures(features_Buffer_4);
var lyr_Buffer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_4, 
                style: style_Buffer_4,
                popuplayertitle: "Buffer",
                interactive: false,
                title: '<img src="styles/legend/Buffer_4.png" /> Buffer'
            });
var format_Data_Dapur_smtr_5 = new ol.format.GeoJSON();
var features_Data_Dapur_smtr_5 = format_Data_Dapur_smtr_5.readFeatures(json_Data_Dapur_smtr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Dapur_smtr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Dapur_smtr_5.addFeatures(features_Data_Dapur_smtr_5);
var lyr_Data_Dapur_smtr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Dapur_smtr_5, 
                style: style_Data_Dapur_smtr_5,
                popuplayertitle: "Data_Dapur_smtr",
                interactive: true,
    title: 'Data_Dapur_smtr<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_0.png" /> CI1UR9CJ<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_1.png" /> D7JALP2A<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_2.png" /> IXRTHPZT<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_3.png" /> NASH3WEF<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_4.png" /> NULL<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_5.png" /> Q0QEAFAV<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_6.png" /> UG18GHVY<br />\
    <img src="styles/legend/Data_Dapur_smtr_5_7.png" /> <br />'
        });
var format_Titik_SMP_smtr_6 = new ol.format.GeoJSON();
var features_Titik_SMP_smtr_6 = format_Titik_SMP_smtr_6.readFeatures(json_Titik_SMP_smtr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_SMP_smtr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_SMP_smtr_6.addFeatures(features_Titik_SMP_smtr_6);
var lyr_Titik_SMP_smtr_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_SMP_smtr_6, 
                style: style_Titik_SMP_smtr_6,
                popuplayertitle: "Titik_SMP_smtr",
                interactive: true,
                title: '<img src="styles/legend/Titik_SMP_smtr_6.png" /> Titik_SMP_smtr'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Administrasi_Magetan_Permendagri_AR_1.setVisible(true);lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2.setVisible(true);lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.setVisible(true);lyr_Buffer_4.setVisible(true);lyr_Data_Dapur_smtr_5.setVisible(true);lyr_Titik_SMP_smtr_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Administrasi_Magetan_Permendagri_AR_1,lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2,lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3,lyr_Buffer_4,lyr_Data_Dapur_smtr_5,lyr_Titik_SMP_smtr_6];
lyr_Batas_Administrasi_Magetan_Permendagri_AR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'Luas_Ha': 'Luas_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SUMBER': 'SUMBER', });
lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'SUMBER': 'SUMBER', });
lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', });
lyr_Buffer_4.set('fieldAliases', {'NO': 'NO', 'ID SPPG': 'ID SPPG', 'X': 'X', 'Y': 'Y', 'NAMA INSTA': 'NAMA INSTA', 'NAMA YAYAS': 'NAMA YAYAS', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN/': 'KELURAHAN/', 'LUAS LAHAN': 'LUAS LAHAN', 'LUAS BANGU': 'LUAS BANGU', 'STATUS': 'STATUS', });
lyr_Data_Dapur_smtr_5.set('fieldAliases', {'NO': 'NO', 'ID SPPG': 'ID SPPG', 'X': 'X', 'Y': 'Y', 'NAMA INSTA': 'NAMA INSTA', 'NAMA YAYAS': 'NAMA YAYAS', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN/': 'KELURAHAN/', 'LUAS LAHAN': 'LUAS LAHAN', 'LUAS BANGU': 'LUAS BANGU', 'STATUS': 'STATUS', });
lyr_Titik_SMP_smtr_6.set('fieldAliases', {'Nama Provi': 'Nama Provi', 'Nama Kabup': 'Nama Kabup', 'Nama Kecam': 'Nama Kecam', 'Nama Desa': 'Nama Desa', 'Nama Sekol': 'Nama Sekol', 'Jumlah Pes': 'Jumlah Pes', 'X': 'X', 'Y': 'Y', });
lyr_Batas_Administrasi_Magetan_Permendagri_AR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', });
lyr_Buffer_4.set('fieldImages', {'NO': 'TextEdit', 'ID SPPG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NAMA INSTA': 'TextEdit', 'NAMA YAYAS': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN/': 'TextEdit', 'LUAS LAHAN': 'TextEdit', 'LUAS BANGU': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Data_Dapur_smtr_5.set('fieldImages', {'NO': 'TextEdit', 'ID SPPG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NAMA INSTA': 'TextEdit', 'NAMA YAYAS': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN/': 'TextEdit', 'LUAS LAHAN': 'TextEdit', 'LUAS BANGU': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Titik_SMP_smtr_6.set('fieldImages', {'Nama Provi': 'TextEdit', 'Nama Kabup': 'TextEdit', 'Nama Kecam': 'TextEdit', 'Nama Desa': 'TextEdit', 'Nama Sekol': 'TextEdit', 'Jumlah Pes': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Batas_Administrasi_Magetan_Permendagri_AR_1.set('fieldLabels', {'OBJECTID': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'Luas_Ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SUMBER': 'no label', });
lyr_Batas_Kecamatan_Magetan_Permendagri_AR_2.set('fieldLabels', {'KECAMATAN': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', });
lyr_Kab_Batas_Administrasi_Magetan_Permendagri_AR_3.set('fieldLabels', {'OBJECTID': 'no label', 'KABUPATEN': 'no label', });
lyr_Buffer_4.set('fieldLabels', {'NO': 'no label', 'ID SPPG': 'no label', 'X': 'no label', 'Y': 'no label', 'NAMA INSTA': 'no label', 'NAMA YAYAS': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN/': 'no label', 'LUAS LAHAN': 'no label', 'LUAS BANGU': 'no label', 'STATUS': 'no label', });
lyr_Data_Dapur_smtr_5.set('fieldLabels', {'NO': 'hidden field', 'ID SPPG': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'NAMA INSTA': 'inline label - visible with data', 'NAMA YAYAS': 'inline label - visible with data', 'PROVINSI': 'hidden field', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'KELURAHAN/': 'inline label - visible with data', 'LUAS LAHAN': 'inline label - visible with data', 'LUAS BANGU': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_Titik_SMP_smtr_6.set('fieldLabels', {'Nama Provi': 'hidden field', 'Nama Kabup': 'inline label - visible with data', 'Nama Kecam': 'inline label - visible with data', 'Nama Desa': 'inline label - visible with data', 'Nama Sekol': 'inline label - visible with data', 'Jumlah Pes': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Titik_SMP_smtr_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});