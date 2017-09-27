const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: [
    'node_modules/openlayers/build/ol.ext/rbush.js',
    'node_modules/openlayers/build/ol.ext/pbf.js',
    'node_modules/openlayers/build/ol.ext/vectortile.js',
    'node_modules/openlayers/build/ol.ext/pixelworks.js',
    'node_modules/openlayers/src/**.js',
    'node_modules/openlayers/externs/olx.js',
    'node_modules/openlayers/externs/oli.js',
    './src/**.js',
  ],
  compilation_level: 'ADVANCED',
  js_output_file: 'dist/app.js'
});

compiler.run((exit, out, err) => {
  if (exit) {
    process.stderr.write(err, () => process.exit(exit));
  } else {
    process.stderr.write(err);
    process.stdout.write(out);
  }
});
