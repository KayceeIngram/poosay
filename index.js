var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-assets');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Poo Say",
    description: "Your daily unpolished news at Tarleton State University.",
    generator: "Metalsmith",
    url: "https://poosay.com"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(assets({
    source: './assets',
    destination: './assets'
  }))
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
