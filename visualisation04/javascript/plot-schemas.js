let my_schema = {
  "$schema": "https://vega.github.io/schema/vega/v4.json",
  "width": 500,
  "height": 500,
  "padding": 5,
  "data": [{
    "name": "cars",
    "values": []
  }],
  "scales": [{
      "name": "x",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {
        "data": "cars",
        "field": "Horsepower"
      },
      "range": "width"
    },
    {
      "name": "y",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {
        "data": "cars",
        "field": "Displacement"
      },
      "range": "height"
    },
    {
      "name": "size",
      "type": "linear",
      "round": true,
      "nice": false,
      "zero": true,
      "domain": {
        "data": "cars",
        "field": "Acceleration"
      },
      "range": [4, 361]
    }
  ],

  "axes": [{
      "scale": "x",
      "grid": true,
      "domain": false,
      "orient": "bottom",
      "tickCount": 5,
      "title": "Horsepower"
    },
    {
      "scale": "y",
      "grid": true,
      "domain": false,
      "orient": "left",
      "titlePadding": 5,
      "title": "Miles_per_Gallon"
    }
  ],

  "legends": [{
    "size": "size",
    "title": "Acceleration",
    "format": "s",
    "encode": {
      "symbols": {
        "update": {
          "strokeWidth": {
            "value": 2
          },
          "opacity": {
            "value": 0.5
          },
          "stroke": {
            "value": "#4682b4"
          },
          "shape": {
            "value": "circle"
          }
        }
      }
    }
  }],
  "marks": [{
    "name": "marks",
    "type": "symbol",
    "from": {
      "data": "cars"
    },
    "encode": {
      "enter": { 
        "tooltip": [
          {"field": "Car", "type": "ordinal"},
        ]
      },
      "update": {
        "x": {
          "scale": "x",
          "field": "Horsepower"
        },
        "y": {
          "scale": "y",
          "field": "Displacement"
        },
        "size": {
          "scale": "size",
          "field": "Acceleration"
        },
        "shape": {
          "value": "circle"
        },
        "strokeWidth": {
          "value": 2
        },
        "opacity": {
          "value": 0.5
        },
        "stroke": {
          "value": "#4682b4"
        },
        "fill": {
          "value": "transparent"
        }
      },
      "hover": { "fill": {"value": "red"} }
    }
  }]
}