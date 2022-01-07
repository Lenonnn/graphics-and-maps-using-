"use strict";

// https://www.amcharts.com/demos/
// https://www.amcharts.com/javascript-charts/

var chart = AmCharts.makeChart("chart_pizza", {
    "type": "pie",
    "theme": "light",
    "dataProvider": [
        {'indicador':'SP', 'valor': 25},
        {'indicador':'RJ', 'valor': 15},
        {'indicador':'MG', 'valor': 12},
        {'indicador':'RS', 'valor': 5}
    ],
    "valueField": "valor",
    "titleField": "indicador",
     "balloon":{
     "fixedPosition":true
    },
    "export": {
   "enabled": true
    }
  });

  var chart = AmCharts.makeChart("chart_colunas", {
    "theme": "light",
    "type": "serial",
    "dataProvider":[
        {'indicador':'SP', 'valor': 25},
        {'indicador':'RJ', 'valor': 15},
        {'indicador':'MG', 'valor': 12},
        {'indicador':'RS', 'valor': 5}
    ],
    "valueAxes": [{
        "title": "Valores em reais"
        }],
        "graphs": [{
        "balloonText": "Valor in [[category]]:[[value]]",
        "fillAlphas": 1,
        "lineAlpha": 0.2,
        "title": "Valor",
        "type": "column",
        "valueField": "valor",
        "labelText": "[[value]]",
        "labelPosition":"inside"
        }],
        "depth3D": 20,
        "angle": 30,
        "rotate": false,
        "categoryField": "indicador",
        "categoryAxis": {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left"
        },
        "export": {
        "enabled": true
        }
        });
         