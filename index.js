const { addonBuilder } = require("stremio-addon-sdk");

// Dane serialu i streamów
const streamsDB = {
  // przykładowe id serialu w Stremio
  "example-series-id": [
    {
      title: "Voe",
      url: "https://cdn-qr0aegqhvu9n9dym.orbitcache.com/engine/hls2/01/12703/5d9yp500urfo_,n,.urlset/index-v1-a1.m3u8?t=tpO7nRuDn9tpep3ubEmgeRNKRKqXzUgwCgmnl-eHUYQ&s=1755363620&e=14400&f=6351541"
    },
    {
      title: "VidFast",
      url: "https://tgtria1dbw.xyz/file2/NvUhe7DDlHC60Gn1LsWPxQ1lZKKPip8SKpMbEJT9AOATBYTgOa3TV7Vo1qNnkZdGRpIEhIRBvxRazBnELlulqmHvkJoa1o3gOwMm3ITS+x09E8wnKO953w04rcaua4kyylKUGZj+qXyg5mQSd99s+g7PO"
    },
    {
      title: "MappleTV",
      url: "https://tgtria1dbw.xyz/file2/NvUhe7DDlHC60Gn1LsWPxQ1lZKKPip8SKpMbEJT9AOATBYTgOa3TV7Vo1qNnkZdGRpIEhIRBvxRazBnELlulqmHvkJoa1o3gOwMm3ITS+x09E8wnKO953w04rcaua4kyylKUGZj+qXyg5mQSd99s+g7PO"
    }
  ]
};

const builder = new addonBuilder({
  id: "example-addon",
  version: "1.0.0",
  name: "Testowy Addon",
  description: "Addon do testowania linków w Stremio",
  resources: ["stream"],
  types: ["series"],
  catalogs: []
});

builder.defineStreamHandler(({ type, id }) => {
  // Sprawdzamy czy mamy streamy dla danego id
  if (streamsDB[id]) {
    return Promise.resolve(streamsDB[id]);
  }
  // Brak streamów dla danego id
  return Promise.resolve([]);
});

module.exports = builder.getInterface();