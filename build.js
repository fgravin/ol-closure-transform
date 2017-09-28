const Compiler = require('google-closure-compiler').compiler;

const compiler = new Compiler({
  js: [
    '/home/fgravin/dev/openlayers/build/ol.ext/rbush.js',
    '/home/fgravin/dev/openlayers/build/ol.ext/pbf.js',
    // '/home/fgravin/dev/openlayers/build/ol.ext/vectortile.js',
    '/home/fgravin/dev/openlayers/build/ol.ext/pixelworks.js',
    '/home/fgravin/dev/openlayers/src/**.js',
    '/home/fgravin/dev/openlayers/externs/olx.js',
    '/home/fgravin/dev/openlayers/externs/oli.js',
    './src/**.js'
  ],
  compilation_level: 'SIMPLE',
  js_output_file: 'dist/app.js',
  create_source_map: true,
  debug: true,
  formatting: 'PRINT_INPUT_DELIMITER',

});

compiler.run((exit, out, err) => {
  if (exit) {
    process.stderr.write(err, () => process.exit(exit));
  } else {
    process.stderr.write(err);
    process.stdout.write(out);
  }
});
