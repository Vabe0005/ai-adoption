# Switched On? AI in Australian Business

FIT3179 Data Visualisation 2 (Monash University, Semester 2 2026). Topic: Artificial Intelligence Adoption.

**Live page:** https://YOUR-GITHUB-USERNAME.github.io/ai-adoption/

## Files
| Path | What it is |
|---|---|
| `index.html` | The web page (layout with Pure.css grids) |
| `css/style.css` | Colours, typography and layout styles |
| `js/vega_lite_vis.js` | Embeds every chart with `vegaEmbed` and sets the shared chart theme |
| `js/*.vg.json` | One Vega-Lite specification per chart |
| `js/australia_states.topojson` | State/territory boundaries (Natural Earth 1:50m, simplified) |
| `data/*.csv` | Data extracted from the ABS data cube |

## Charts
| File | Idiom |
|---|---|
| `waffle_size.vg.json` | Waffle chart (small multiples) |
| `dumbbell_innovation.vg.json` | Dumbbell chart |
| `choropleth_states.vg.json` | Choropleth map with a dropdown to switch technology |
| `tilemap_toolkit.vg.json` | Tile-grid map (cartogram) with embedded mini bar charts |
| `diverging_industry.vg.json` | Diverging bar chart |
| `heatmap_industry.vg.json` | Heatmap with click-to-highlight |
| `symbol_barriers.vg.json` | Proportional symbol map with categorical colour |

## Data sources
- Australian Bureau of Statistics (2026), *Characteristics of Australian Business, 2024–25*, data cube 6, tables 2 and 4. CC BY 4.0.
- Natural Earth, Admin 1 – States, Provinces (1:50m). Public domain.

Author: [Your name], October 2026.
