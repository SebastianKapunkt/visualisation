var plot_data = 
{
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "description": "A scatterplot showing horsepower and miles per gallons.",
    "data": {"url": "data/cars.json"},
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "color": {"field": "Origin", "type": "nominal"},
      "shape": {"field": "Origin", "type": "nominal"}
    }
  }
  