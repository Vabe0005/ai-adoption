// Shared look for every chart, so each .vg.json file can focus on the data and encodings.
var theme = {
  font: "IBM Plex Sans",
  background: null,
  view: {stroke: null},
  axis: {
    labelColor: "#4a4458",
    titleColor: "#4a4458",
    titleFontWeight: 500,
    titleFontSize: 12,
    labelFontSize: 11,
    gridColor: "#e7e3ee",
    domainColor: "#bdb7cc",
    tickColor: "#bdb7cc"
  },
  legend: {labelColor: "#4a4458", titleColor: "#4a4458", labelFontSize: 12, titleFontSize: 12, titleFontWeight: 600},
  header: {labelColor: "#1e1b2e"},
  text: {font: "IBM Plex Sans"}
};

var embedOptions = {actions: false, config: theme, renderer: "svg"};

// [container id, spec file]
var charts = [
  ["#waffle_size", "js/waffle_size.vg.json"],
  ["#dumbbell_innovation", "js/dumbbell_innovation.vg.json"],
  ["#choropleth_states", "js/choropleth_states.vg.json"],
  ["#tilemap_toolkit", "js/tilemap_toolkit.vg.json"],
  ["#diverging_industry", "js/diverging_industry.vg.json"],
  ["#heatmap_industry", "js/heatmap_industry.vg.json"],
  ["#symbol_barriers", "js/symbol_barriers.vg.json"]
];

charts.forEach(function (chart) {
  vegaEmbed(chart[0], chart[1], embedOptions)
    .then(function (result) {
      // result.view is the live Vega view (https://vega.github.io/vega/docs/api/view/)
    })
    .catch(console.error);
});
