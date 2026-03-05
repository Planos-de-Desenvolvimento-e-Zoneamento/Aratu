ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-38.520549, -12.790120, -38.458239, -12.755586]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo'
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo'
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual'
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosDutoviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_15 = format_AcessosDutoviriosExternos_15.readFeatures(json_AcessosDutoviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_15.addFeatures(features_AcessosDutoviriosExternos_15);
var lyr_AcessosDutoviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_15, 
                style: style_AcessosDutoviriosExternos_15,
                popuplayertitle: 'Acessos Dutoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_15.png" /> Acessos Dutoviários Externos '
            });
var format_AcessosFerroviriosInternosLongoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_16 = format_AcessosFerroviriosInternosLongoPrazo_16.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_16.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_16);
var lyr_AcessosFerroviriosInternosLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_16, 
                style: style_AcessosFerroviriosInternosLongoPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_16.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_17 = format_AcessosFerroviriosInternosMdioPrazo_17.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_17.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_17);
var lyr_AcessosFerroviriosInternosMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_17, 
                style: style_AcessosFerroviriosInternosMdioPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_17.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_18 = format_AcessosFerroviriosInternosCurtoPrazo_18.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_18.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_18);
var lyr_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_18, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_18.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_19 = format_AcessosFerroviriosInternosSituaoAtual_19.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_19.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_19);
var lyr_AcessosFerroviriosInternosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_19, 
                style: style_AcessosFerroviriosInternosSituaoAtual_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_19.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_20 = format_AcessosFerroviriosExternos_20.readFeatures(json_AcessosFerroviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_20.addFeatures(features_AcessosFerroviriosExternos_20);
var lyr_AcessosFerroviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_20, 
                style: style_AcessosFerroviriosExternos_20,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_20.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_21 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_21 = format_AcessosRodoviriosInternosLongoPrazo_21.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_21.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_21);
var lyr_AcessosRodoviriosInternosLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_21, 
                style: style_AcessosRodoviriosInternosLongoPrazo_21,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_21.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_22 = format_AcessosRodoviriosInternosMdioPrazo_22.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_22.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_22);
var lyr_AcessosRodoviriosInternosMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_22, 
                style: style_AcessosRodoviriosInternosMdioPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_22.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_23 = format_AcessosRodoviriosInternosCurtoPrazo_23.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_23.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_23);
var lyr_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_23, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_23.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_24 = format_AcessosRodoviriosInternosSituaoAtual_24.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_24.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_24);
var lyr_AcessosRodoviriosInternosSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_24, 
                style: style_AcessosRodoviriosInternosSituaoAtual_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_24.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_25 = format_AcessosRodoviriosExternos_25.readFeatures(json_AcessosRodoviriosExternos_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_25.addFeatures(features_AcessosRodoviriosExternos_25);
var lyr_AcessosRodoviriosExternos_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_25, 
                style: style_AcessosRodoviriosExternos_25,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_25.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_33 = format_reasNoAfetassOperaesPorturiasLongoPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_34 = format_reasNoAfetassOperaesPorturiasMdioPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_36 = format_reasNoAfetassOperaesPorturiasSituaoAtual_36.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_36);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_36.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_37 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_37 = format_AcostagemLongoPrazo_37.readFeatures(json_AcostagemLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_37.addFeatures(features_AcostagemLongoPrazo_37);
var lyr_AcostagemLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_37, 
                style: style_AcostagemLongoPrazo_37,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_37.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_38 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_38 = format_AcostagemMdioPrazo_38.readFeatures(json_AcostagemMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_38.addFeatures(features_AcostagemMdioPrazo_38);
var lyr_AcostagemMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_38, 
                style: style_AcostagemMdioPrazo_38,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_38.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_39 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_39 = format_AcostagemCurtoPrazo_39.readFeatures(json_AcostagemCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_39.addFeatures(features_AcostagemCurtoPrazo_39);
var lyr_AcostagemCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_39, 
                style: style_AcostagemCurtoPrazo_39,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_39.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_40 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_40 = format_AcostagemSituaoAtual_40.readFeatures(json_AcostagemSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_40.addFeatures(features_AcostagemSituaoAtual_40);
var lyr_AcostagemSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_40, 
                style: style_AcostagemSituaoAtual_40,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_40.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_41 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_41 = format_ArmazenagemLongoPrazo_41.readFeatures(json_ArmazenagemLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_41.addFeatures(features_ArmazenagemLongoPrazo_41);
var lyr_ArmazenagemLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_41, 
                style: style_ArmazenagemLongoPrazo_41,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_41.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_42 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_42 = format_ArmazenagemMdioPrazo_42.readFeatures(json_ArmazenagemMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_42.addFeatures(features_ArmazenagemMdioPrazo_42);
var lyr_ArmazenagemMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_42, 
                style: style_ArmazenagemMdioPrazo_42,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_42.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_43 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_43 = format_ArmazenagemCurtoPrazo_43.readFeatures(json_ArmazenagemCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_43.addFeatures(features_ArmazenagemCurtoPrazo_43);
var lyr_ArmazenagemCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_43, 
                style: style_ArmazenagemCurtoPrazo_43,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_43.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_44 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_44 = format_ArmazenagemSituaoAtual_44.readFeatures(json_ArmazenagemSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_44.addFeatures(features_ArmazenagemSituaoAtual_44);
var lyr_ArmazenagemSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_44, 
                style: style_ArmazenagemSituaoAtual_44,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_44.png" /> Armazenagem - Situação Atual '
            });
var format_reaseInstalaesAlfandegadasIndividualizadas_45 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasIndividualizadas_45 = format_reaseInstalaesAlfandegadasIndividualizadas_45.readFeatures(json_reaseInstalaesAlfandegadasIndividualizadas_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasIndividualizadas_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasIndividualizadas_45.addFeatures(features_reaseInstalaesAlfandegadasIndividualizadas_45);
var lyr_reaseInstalaesAlfandegadasIndividualizadas_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasIndividualizadas_45, 
                style: style_reaseInstalaesAlfandegadasIndividualizadas_45,
                popuplayertitle: 'Áreas e Instalações Alfandegadas Individualizadas',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasIndividualizadas_45.png" /> Áreas e Instalações Alfandegadas Individualizadas'
            });
var format_reaseInstalaesAlfandegadas_46 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_46 = format_reaseInstalaesAlfandegadas_46.readFeatures(json_reaseInstalaesAlfandegadas_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_46.addFeatures(features_reaseInstalaesAlfandegadas_46);
var lyr_reaseInstalaesAlfandegadas_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_46, 
                style: style_reaseInstalaesAlfandegadas_46,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_46.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_Multipropsito_55 = new ol.format.GeoJSON();
var features_Multipropsito_55 = format_Multipropsito_55.readFeatures(json_Multipropsito_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_55.addFeatures(features_Multipropsito_55);
var lyr_Multipropsito_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_55, 
                style: style_Multipropsito_55,
                popuplayertitle: 'Multipropósito ',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_55.png" /> Multipropósito '
            });
var format_GranelSlidoCargaGeralCargaConteinerizada_56 = new ol.format.GeoJSON();
var features_GranelSlidoCargaGeralCargaConteinerizada_56 = format_GranelSlidoCargaGeralCargaConteinerizada_56.readFeatures(json_GranelSlidoCargaGeralCargaConteinerizada_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoCargaGeralCargaConteinerizada_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoCargaGeralCargaConteinerizada_56.addFeatures(features_GranelSlidoCargaGeralCargaConteinerizada_56);
var lyr_GranelSlidoCargaGeralCargaConteinerizada_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoCargaGeralCargaConteinerizada_56, 
                style: style_GranelSlidoCargaGeralCargaConteinerizada_56,
                popuplayertitle: 'Granel Sólido/Carga Geral/Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoCargaGeralCargaConteinerizada_56.png" /> Granel Sólido/Carga Geral/Carga Conteinerizada'
            });
var format_GranelLquidoGasoso_57 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_57 = format_GranelLquidoGasoso_57.readFeatures(json_GranelLquidoGasoso_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_57.addFeatures(features_GranelLquidoGasoso_57);
var lyr_GranelLquidoGasoso_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_57, 
                style: style_GranelLquidoGasoso_57,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_57.png" /> Granel Líquido/Gasoso '
            });
var format_GranelSlido_58 = new ol.format.GeoJSON();
var features_GranelSlido_58 = format_GranelSlido_58.readFeatures(json_GranelSlido_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_58.addFeatures(features_GranelSlido_58);
var lyr_GranelSlido_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_58, 
                style: style_GranelSlido_58,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_58.png" /> Granel Sólido'
            });
var format_Multipropsito_59 = new ol.format.GeoJSON();
var features_Multipropsito_59 = format_Multipropsito_59.readFeatures(json_Multipropsito_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_59.addFeatures(features_Multipropsito_59);
var lyr_Multipropsito_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_59, 
                style: style_Multipropsito_59,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_59.png" /> Multipropósito'
            });
var format_GranelSlidoCargaGeralCargaConteinerizada_60 = new ol.format.GeoJSON();
var features_GranelSlidoCargaGeralCargaConteinerizada_60 = format_GranelSlidoCargaGeralCargaConteinerizada_60.readFeatures(json_GranelSlidoCargaGeralCargaConteinerizada_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoCargaGeralCargaConteinerizada_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoCargaGeralCargaConteinerizada_60.addFeatures(features_GranelSlidoCargaGeralCargaConteinerizada_60);
var lyr_GranelSlidoCargaGeralCargaConteinerizada_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoCargaGeralCargaConteinerizada_60, 
                style: style_GranelSlidoCargaGeralCargaConteinerizada_60,
                popuplayertitle: 'Granel Sólido/Carga Geral/Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoCargaGeralCargaConteinerizada_60.png" /> Granel Sólido/Carga Geral/Carga Conteinerizada'
            });
var format_GranelLquidoGasoso_61 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_61 = format_GranelLquidoGasoso_61.readFeatures(json_GranelLquidoGasoso_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_61.addFeatures(features_GranelLquidoGasoso_61);
var lyr_GranelLquidoGasoso_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_61, 
                style: style_GranelLquidoGasoso_61,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_61.png" /> Granel Líquido/Gasoso '
            });
var format_GranelSlido_62 = new ol.format.GeoJSON();
var features_GranelSlido_62 = format_GranelSlido_62.readFeatures(json_GranelSlido_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_62.addFeatures(features_GranelSlido_62);
var lyr_GranelSlido_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_62, 
                style: style_GranelSlido_62,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_62.png" /> Granel Sólido'
            });
var format_Multipropsito_63 = new ol.format.GeoJSON();
var features_Multipropsito_63 = format_Multipropsito_63.readFeatures(json_Multipropsito_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_63.addFeatures(features_Multipropsito_63);
var lyr_Multipropsito_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_63, 
                style: style_Multipropsito_63,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_63.png" /> Multipropósito'
            });
var format_GranelSlidoCargaGeralCargaConteinerizada_64 = new ol.format.GeoJSON();
var features_GranelSlidoCargaGeralCargaConteinerizada_64 = format_GranelSlidoCargaGeralCargaConteinerizada_64.readFeatures(json_GranelSlidoCargaGeralCargaConteinerizada_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoCargaGeralCargaConteinerizada_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoCargaGeralCargaConteinerizada_64.addFeatures(features_GranelSlidoCargaGeralCargaConteinerizada_64);
var lyr_GranelSlidoCargaGeralCargaConteinerizada_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoCargaGeralCargaConteinerizada_64, 
                style: style_GranelSlidoCargaGeralCargaConteinerizada_64,
                popuplayertitle: 'Granel Sólido/Carga Geral/Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoCargaGeralCargaConteinerizada_64.png" /> Granel Sólido/Carga Geral/Carga Conteinerizada'
            });
var format_GranelLquidoGasoso_65 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_65 = format_GranelLquidoGasoso_65.readFeatures(json_GranelLquidoGasoso_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_65.addFeatures(features_GranelLquidoGasoso_65);
var lyr_GranelLquidoGasoso_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_65, 
                style: style_GranelLquidoGasoso_65,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_65.png" /> Granel Líquido/Gasoso '
            });
var format_GranelSlido_66 = new ol.format.GeoJSON();
var features_GranelSlido_66 = format_GranelSlido_66.readFeatures(json_GranelSlido_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_66.addFeatures(features_GranelSlido_66);
var lyr_GranelSlido_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_66, 
                style: style_GranelSlido_66,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_66.png" /> Granel Sólido'
            });
var format_Multipropsito_67 = new ol.format.GeoJSON();
var features_Multipropsito_67 = format_Multipropsito_67.readFeatures(json_Multipropsito_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_67.addFeatures(features_Multipropsito_67);
var lyr_Multipropsito_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_67, 
                style: style_Multipropsito_67,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_67.png" /> Multipropósito'
            });
var format_GranelSlidoCargaGeralCargaConteinerizada_68 = new ol.format.GeoJSON();
var features_GranelSlidoCargaGeralCargaConteinerizada_68 = format_GranelSlidoCargaGeralCargaConteinerizada_68.readFeatures(json_GranelSlidoCargaGeralCargaConteinerizada_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoCargaGeralCargaConteinerizada_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoCargaGeralCargaConteinerizada_68.addFeatures(features_GranelSlidoCargaGeralCargaConteinerizada_68);
var lyr_GranelSlidoCargaGeralCargaConteinerizada_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoCargaGeralCargaConteinerizada_68, 
                style: style_GranelSlidoCargaGeralCargaConteinerizada_68,
                popuplayertitle: 'Granel Sólido/Carga Geral/Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoCargaGeralCargaConteinerizada_68.png" /> Granel Sólido/Carga Geral/Carga Conteinerizada'
            });
var format_GranelLquidoGasoso_69 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_69 = format_GranelLquidoGasoso_69.readFeatures(json_GranelLquidoGasoso_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_69.addFeatures(features_GranelLquidoGasoso_69);
var lyr_GranelLquidoGasoso_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_69, 
                style: style_GranelLquidoGasoso_69,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_69.png" /> Granel Líquido/Gasoso '
            });
var format_GranelSlido_70 = new ol.format.GeoJSON();
var features_GranelSlido_70 = format_GranelSlido_70.readFeatures(json_GranelSlido_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_70.addFeatures(features_GranelSlido_70);
var lyr_GranelSlido_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_70, 
                style: style_GranelSlido_70,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_70.png" /> Granel Sólido'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_71 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_71 = format_reasAfetassOperaesPorturiasLongoPrazo_71.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_71.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_71);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_71, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_71,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_71.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_72 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_72 = format_reasAfetassOperaesPorturiasMdioPrazo_72.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_72.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_72);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_72, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_72,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_72.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_73 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_73 = format_reasAfetassOperaesPorturiasCurtoPrazo_73.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_73.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_73);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_73, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_73,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_73.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_74 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_74 = format_reasAfetassOperaesPorturiasSituaoAtual_74.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_74.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_74);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_74, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_74,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_74.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeAratu_75 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeAratu_75 = format_PoligonaldareadoPortoOrganizadodeAratu_75.readFeatures(json_PoligonaldareadoPortoOrganizadodeAratu_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeAratu_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeAratu_75.addFeatures(features_PoligonaldareadoPortoOrganizadodeAratu_75);
var lyr_PoligonaldareadoPortoOrganizadodeAratu_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeAratu_75, 
                style: style_PoligonaldareadoPortoOrganizadodeAratu_75,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Aratu',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeAratu_75.png" /> Poligonal da Área do Porto Organizado de Aratu'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeAratu_75,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_71,lyr_reasAfetassOperaesPorturiasMdioPrazo_72,lyr_reasAfetassOperaesPorturiasCurtoPrazo_73,lyr_reasAfetassOperaesPorturiasSituaoAtual_74,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Multipropsito_67,lyr_GranelSlidoCargaGeralCargaConteinerizada_68,lyr_GranelLquidoGasoso_69,lyr_GranelSlido_70,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_Multipropsito_63,lyr_GranelSlidoCargaGeralCargaConteinerizada_64,lyr_GranelLquidoGasoso_65,lyr_GranelSlido_66,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_Multipropsito_59,lyr_GranelSlidoCargaGeralCargaConteinerizada_60,lyr_GranelLquidoGasoso_61,lyr_GranelSlido_62,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_Multipropsito_55,lyr_GranelSlidoCargaGeralCargaConteinerizada_56,lyr_GranelLquidoGasoso_57,lyr_GranelSlido_58,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasIndividualizadas_45,lyr_reaseInstalaesAlfandegadas_46,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_41,lyr_ArmazenagemMdioPrazo_42,lyr_ArmazenagemCurtoPrazo_43,lyr_ArmazenagemSituaoAtual_44,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_37,lyr_AcostagemMdioPrazo_38,lyr_AcostagemCurtoPrazo_39,lyr_AcostagemSituaoAtual_40,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias'});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta'});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_21,lyr_AcessosRodoviriosInternosMdioPrazo_22,lyr_AcessosRodoviriosInternosCurtoPrazo_23,lyr_AcessosRodoviriosInternosSituaoAtual_24,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_16,lyr_AcessosFerroviriosInternosMdioPrazo_17,lyr_AcessosFerroviriosInternosCurtoPrazo_18,lyr_AcessosFerroviriosInternosSituaoAtual_19,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos'});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosDutoviriosExternos_15.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_19.setVisible(false);lyr_AcessosFerroviriosExternos_20.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_21.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_24.setVisible(false);lyr_AcessosRodoviriosExternos_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.setVisible(false);lyr_AcostagemLongoPrazo_37.setVisible(false);lyr_AcostagemMdioPrazo_38.setVisible(false);lyr_AcostagemCurtoPrazo_39.setVisible(false);lyr_AcostagemSituaoAtual_40.setVisible(false);lyr_ArmazenagemLongoPrazo_41.setVisible(false);lyr_ArmazenagemMdioPrazo_42.setVisible(false);lyr_ArmazenagemCurtoPrazo_43.setVisible(false);lyr_ArmazenagemSituaoAtual_44.setVisible(false);lyr_reaseInstalaesAlfandegadasIndividualizadas_45.setVisible(false);lyr_reaseInstalaesAlfandegadas_46.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.setVisible(false);lyr_Multipropsito_55.setVisible(false);lyr_GranelSlidoCargaGeralCargaConteinerizada_56.setVisible(false);lyr_GranelLquidoGasoso_57.setVisible(false);lyr_GranelSlido_58.setVisible(false);lyr_Multipropsito_59.setVisible(false);lyr_GranelSlidoCargaGeralCargaConteinerizada_60.setVisible(false);lyr_GranelLquidoGasoso_61.setVisible(false);lyr_GranelSlido_62.setVisible(false);lyr_Multipropsito_63.setVisible(false);lyr_GranelSlidoCargaGeralCargaConteinerizada_64.setVisible(false);lyr_GranelLquidoGasoso_65.setVisible(false);lyr_GranelSlido_66.setVisible(false);lyr_Multipropsito_67.setVisible(false);lyr_GranelSlidoCargaGeralCargaConteinerizada_68.setVisible(false);lyr_GranelLquidoGasoso_69.setVisible(false);lyr_GranelSlido_70.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_71.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_72.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_73.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_74.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeAratu_75.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadas,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst Legal': 'Instrumento Legal ', 'Área m²': 'Área (m²)', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo de Área ', 'Inst Legal': 'Instrumento Legal ', 'Area': 'Área (m²)', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'Nº Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'Nº Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'Nº Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'Nº Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosDutoviriosExternos_15.set('fieldAliases', {'Posicao': 'Posição ', 'Nome': 'Nome', 'Mat Trans': 'Material Transportado ', 'Operador': 'Operador', 'T Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosExternos_20.set('fieldAliases', {'Operador': 'Operador', 'Descri': 'Descrição ', 'Trecho': 'Trecho', 'Linha': 'Linha', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldAliases', {'Ident': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldAliases', {'Ident': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldAliases', {'Ident': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldAliases', {'Ident': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_25.set('fieldAliases', {'Sigla': 'Sigla', 'Jurisd': 'Jurisdição ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', 'Obs': 'Observação', 'Identi': 'Identificador', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', 'Obs': 'Observação', 'Identi': 'Identificador', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', 'Obs': 'Observação', 'Identi': 'Identificador', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Util_Area': 'Utilização Atual da Área ', 'Obs': 'Observação', 'Identi': 'Identificador', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'Respons': 'Responsável ', 'T_Cessão': 'Tipo de Cessão ', 'D_Inic': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Respons': 'Responsável ', 'T_Cessão': 'Tipo de Cessão ', 'D_Inic': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldAliases', {'Nome': 'Nome', 'Respons': 'Responsável ', 'T_Cessão': 'Tipo de Cessão ', 'D_Inic': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Obs': 'Observação', 'Área m²': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_37.set('fieldAliases', {'Per_Carga': 'Perfil de Carga ', 'Id_Berco': 'Identificador do Berço ', 'Id_Cais': 'Identificador do Cais ', 'Profundid': 'Profundidade (m) ', 'Obs': 'Observação', 'C_Const': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Comp': 'Comprimento (m) ', });
lyr_AcostagemMdioPrazo_38.set('fieldAliases', {'Per_Carga': 'Perfil de Carga ', 'Id_Berco': 'Identificador do Berço ', 'Id_Cais': 'Identificador do Cais ', 'Profundid': 'Profundidade (m) ', 'Obs': 'Observação', 'C_Const': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Comp': 'Comprimento (m) ', });
lyr_AcostagemCurtoPrazo_39.set('fieldAliases', {'Per_Carga': 'Perfil de Carga ', 'Id_Berco': 'Identificador do Berço ', 'Id_Cais': 'Identificador do Cais ', 'Profundid': 'Profundidade (m) ', 'Obs': 'Observação ', 'C_Const': 'Características Construtivas ', 'Calado': 'Calado (m)', 'Comp': 'Comprimento (m) ', });
lyr_AcostagemSituaoAtual_40.set('fieldAliases', {'Per_Carga': 'Perfil de Carga ', 'Id_Berco': 'Identificador do Berço ', 'Id_Cais': 'Identificador do Cais ', 'Profundid': 'Profundidade (m) ', 'C_Const': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Comp': 'Comprimento (m) ', });
lyr_ArmazenagemLongoPrazo_41.set('fieldAliases', {'Tipo Insta': 'Tipo da Instalação ', 'ID': 'Identificador', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área m²': 'Área (m²) ', });
lyr_ArmazenagemMdioPrazo_42.set('fieldAliases', {'Tipo Insta': 'Tipo da Instalação ', 'ID': 'Identificador', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área m²': 'Área (m²) ', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldAliases', {'Tipo Insta': 'Tipo da Instalação ', 'ID': 'Identificador', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área m²': 'Área (m²) ', });
lyr_ArmazenagemSituaoAtual_44.set('fieldAliases', {'Tipo Insta': 'Tipo da Instalação ', 'ID': 'Identificador', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área m²': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadasIndividualizadas_45.set('fieldAliases', {'Nome': 'Identificador', 'ARREND_ID': 'Arrendatário', 'Inst Legal': 'Instrumento Legal ', });
lyr_reaseInstalaesAlfandegadas_46.set('fieldAliases', {'Inst Legal': 'Instrumento Legal ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Obs': 'Observação ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Obs': 'Observação', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Obs': 'Observação ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Obs': 'Observação ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.set('fieldAliases', {'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Obs': 'Observação ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.set('fieldAliases', {'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Obs': 'Observação ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.set('fieldAliases', {'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Obs': 'Observação ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.set('fieldAliases', {'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Obs': 'Observação ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_Multipropsito_55.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_56.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelLquidoGasoso_57.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlido_58.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_Multipropsito_59.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_60.set('fieldAliases', {'Perfil': 'Perfil de Carga', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelLquidoGasoso_61.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlido_62.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_Multipropsito_63.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_64.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelLquidoGasoso_65.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_GranelSlido_66.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_Multipropsito_67.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_68.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_GranelLquidoGasoso_69.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_GranelSlido_70.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_71.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_72.set('fieldAliases', {'Perfil': 'Perfil de Carga', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_73.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_74.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T Instal': 'Tipo de Instalação ', 'Obs': 'Observação ', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeAratu_75.set('fieldAliases', {'Name': 'Anexo ', 'Ins': 'Instrumento Legal ', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst Legal': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Inst Legal': 'TextEdit', 'Area': 'Range', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'Nº Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'Nº Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'Nº Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'Nº Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosDutoviriosExternos_15.set('fieldImages', {'Posicao': 'TextEdit', 'Nome': 'TextEdit', 'Mat Trans': 'TextEdit', 'Operador': 'TextEdit', 'T Duto': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosExternos_20.set('fieldImages', {'Operador': 'TextEdit', 'Descri': 'TextEdit', 'Trecho': 'TextEdit', 'Linha': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldImages', {'Ident': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldImages', {'Ident': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldImages', {'Ident': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldImages', {'Ident': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_25.set('fieldImages', {'Sigla': 'TextEdit', 'Jurisd': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldImages', {'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', 'Obs': 'TextEdit', 'Identi': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldImages', {'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', 'Obs': 'TextEdit', 'Identi': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldImages', {'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', 'Obs': 'TextEdit', 'Identi': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldImages', {'T_Explo': 'TextEdit', 'Util_Area': 'TextEdit', 'Obs': 'TextEdit', 'Identi': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Respons': 'TextEdit', 'T_Cessão': 'TextEdit', 'D_Inic': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Respons': 'TextEdit', 'T_Cessão': 'TextEdit', 'D_Inic': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldImages', {'Nome': 'TextEdit', 'Respons': 'TextEdit', 'T_Cessão': 'TextEdit', 'D_Inic': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldImages', {'Nome': 'Range', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldImages', {'Nome': 'Range', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldImages', {'Nome': 'Range', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldImages', {'Nome': 'Range', 'Destinacao': 'TextEdit', 'Obs': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_AcostagemLongoPrazo_37.set('fieldImages', {'Per_Carga': 'TextEdit', 'Id_Berco': 'TextEdit', 'Id_Cais': 'TextEdit', 'Profundid': 'TextEdit', 'Obs': 'TextEdit', 'C_Const': 'TextEdit', 'Calado': 'TextEdit', 'Comp': 'TextEdit', });
lyr_AcostagemMdioPrazo_38.set('fieldImages', {'Per_Carga': 'TextEdit', 'Id_Berco': 'TextEdit', 'Id_Cais': 'TextEdit', 'Profundid': 'TextEdit', 'Obs': 'TextEdit', 'C_Const': 'TextEdit', 'Calado': 'TextEdit', 'Comp': 'TextEdit', });
lyr_AcostagemCurtoPrazo_39.set('fieldImages', {'Per_Carga': 'TextEdit', 'Id_Berco': 'TextEdit', 'Id_Cais': 'TextEdit', 'Profundid': 'TextEdit', 'Obs': 'TextEdit', 'C_Const': 'TextEdit', 'Calado': 'TextEdit', 'Comp': 'TextEdit', });
lyr_AcostagemSituaoAtual_40.set('fieldImages', {'Per_Carga': 'TextEdit', 'Id_Berco': 'TextEdit', 'Id_Cais': 'TextEdit', 'Profundid': 'TextEdit', 'C_Const': 'TextEdit', 'Calado': 'TextEdit', 'Comp': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_41.set('fieldImages', {'Tipo Insta': 'TextEdit', 'ID': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_42.set('fieldImages', {'Tipo Insta': 'TextEdit', 'ID': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldImages', {'Tipo Insta': 'TextEdit', 'ID': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_44.set('fieldImages', {'Tipo Insta': 'TextEdit', 'ID': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasIndividualizadas_45.set('fieldImages', {'Nome': 'TextEdit', 'ARREND_ID': 'TextEdit', 'Inst Legal': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_46.set('fieldImages', {'Inst Legal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.set('fieldImages', {'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'Range', 'Obs': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.set('fieldImages', {'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'Range', 'Obs': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.set('fieldImages', {'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'Range', 'Obs': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.set('fieldImages', {'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'Range', 'Obs': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.set('fieldImages', {'Area': 'Range', 'Perfil': 'TextEdit', 'Obs': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.set('fieldImages', {'Area': 'Range', 'Perfil': 'TextEdit', 'Obs': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.set('fieldImages', {'Area': 'Range', 'Perfil': 'TextEdit', 'Obs': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.set('fieldImages', {'Area': 'Range', 'Perfil': 'TextEdit', 'Obs': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_Multipropsito_55.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_56.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquidoGasoso_57.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_58.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Multipropsito_59.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_60.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquidoGasoso_61.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_62.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Multipropsito_63.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_64.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquidoGasoso_65.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_66.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Multipropsito_67.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_68.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquidoGasoso_69.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_70.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_71.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_72.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_73.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_74.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'Range', 'T Instal': 'TextEdit', 'Obs': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeAratu_75.set('fieldImages', {'Name': 'TextEdit', 'Ins': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst Legal': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'Nº Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'Nº Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'Nº Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'Nº Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_15.set('fieldLabels', {'Posicao': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Mat Trans': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_20.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Descri': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Linha': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldLabels', {'Ident': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldLabels', {'Ident': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldLabels', {'Ident': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldLabels', {'Ident': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_25.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'Jurisd': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Identi': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Identi': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Identi': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Identi': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'D_Inic': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'D_Inic': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'D_Inic': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_37.set('fieldLabels', {'Per_Carga': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'Id_Cais': 'inline label - visible with data', 'Profundid': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Comp': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_38.set('fieldLabels', {'Per_Carga': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'Id_Cais': 'inline label - visible with data', 'Profundid': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Comp': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_39.set('fieldLabels', {'Per_Carga': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'Id_Cais': 'inline label - visible with data', 'Profundid': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Comp': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_40.set('fieldLabels', {'Per_Carga': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'Id_Cais': 'inline label - visible with data', 'Profundid': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Comp': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_41.set('fieldLabels', {'Tipo Insta': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_42.set('fieldLabels', {'Tipo Insta': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldLabels', {'Tipo Insta': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_44.set('fieldLabels', {'Tipo Insta': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasIndividualizadas_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'ARREND_ID': 'inline label - visible with data', 'Inst Legal': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_46.set('fieldLabels', {'Inst Legal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_47.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_48.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_49.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_50.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Obs': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_51.set('fieldLabels', {'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_52.set('fieldLabels', {'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_53.set('fieldLabels', {'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_54.set('fieldLabels', {'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_Multipropsito_55.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_56.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_57.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_58.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Multipropsito_59.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_60.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_61.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_62.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Multipropsito_63.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_64.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_65.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_66.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Multipropsito_67.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoCargaGeralCargaConteinerizada_68.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_69.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_70.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_71.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_72.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_73.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_74.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T Instal': 'inline label - visible with data', 'Obs': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAratu_75.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAratu_75.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});