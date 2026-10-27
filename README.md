# Switched On? AI in Australian Business

FIT3179 Data Visualisation 2 (Monash University, Semester 2 2026). Topic: Artificial Intelligence Adoption.

**Live page:** https://vabe0005.github.io/ai-adoption/
**Sketch:** [sketch_35221666.pdf](sketch_35221666.pdf)

## Files
| Path | What it is |
|---|---|
| `index.html` | The web page (layout with Pure.css grids) |
| `style.css` | Colours, typography and layout styles |
| `vega_lite_vis.js` | Embeds every chart with `vegaEmbed` and sets the shared chart theme |
| `*.vg.json` | One Vega-Lite specification per chart (13 in total) |
| `switch.svg`, `bulbs.svg` | Illustrations for the opening and the conclusion |
| `australia_states.topojson` | Australian state and territory boundaries (Natural Earth 1:50m, simplified) |
| `europe_countries.topojson` | European country boundaries (Natural Earth 1:50m, simplified) |
| `ai_by_size.csv`, `ict_by_size.csv`, `ict_by_industry.csv`, `ict_by_state.csv` | Data extracted from the ABS data cubes |
| `ai_international.csv` | Eurostat AI use by country and business size, with Australia added for comparison |
| `dots_ai_businesses.csv` | Dot positions for the dot density map (1 dot = 250 businesses using AI) |

## Charts
| # | File | Idiom |
|---|---|---|
| 1 | `waffle_size.vg.json` | Waffle chart (small multiples) |
| 2 | `butterfly_size.vg.json` | Butterfly (back-to-back) bar chart |
| 3 | `dumbbell_innovation.vg.json` | Dumbbell chart |
| 4 | `bump_tech_size.vg.json` | Bump chart |
| 5 | `choropleth_states.vg.json` | Choropleth map with a dropdown to switch technology |
| 6 | `dotmap_ai_users.vg.json` | Dot density map |
| 7 | `tilemap_toolkit.vg.json` | Tile-grid map with embedded mini bar charts |
| 8 | `diverging_industry.vg.json` | Diverging bar chart |
| 9 | `heatmap_industry.vg.json` | Heatmap with click-to-highlight |
| 10 | `marimekko_industry.vg.json` | Marimekko (variable-width column) chart |
| 11 | `choropleth_europe.vg.json` | Choropleth map of Europe with a business-size dropdown |
| 12 | `dotplot_countries.vg.json` | Dot plot (country comparison) |
| 13 | `symbol_barriers.vg.json` | Proportional symbol map with categorical colour |

## Data sources
- Australian Bureau of Statistics (2026), *Characteristics of Australian Business, 2024–25*, data cube 1 (table 1) and data cube 6 (tables 2 and 4). CC BY 4.0.
- Eurostat (2026), *The use of artificial intelligence (AI) technologies in the European Union, 2026 edition*, table 1 (2025 data). CC BY 4.0.
- Natural Earth, Admin 0 – Countries and Admin 1 – States, Provinces (1:50m). Public domain.

## Acknowledgement
Claude (Anthropic) was used to help write code and text for this page and to draw the two illustrations.

Author: Vimuth Abeysinghe, October 2026.

