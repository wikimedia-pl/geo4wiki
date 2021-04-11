const GEO_SYMBOLS = new Map([
  ['lat', ['N','S']],
  ['long', ['W','E']]
]);

function process( input ) {
  var coords = input.split( "," );

  return convert( coords[0], "lat" ) + " " + convert( coords[1], "long" );
}

function convert( dec, dir ) {
  degs = Math.abs( dec );
  degs_int = Math.floor(degs);

  mins = (degs - degs_int) * 60;
  secs = (mins - Math.floor(mins)) * 60;

  return `${degs_int}°${Math.floor(mins)}′${Math.round(secs,1)}″${get_hemisphere(dec,dir)}`
}

function get_hemisphere( dec, dir ) {
  if ( dec >= 0 ) {
    return GEO_SYMBOLS.get(dir)[0]
  } else {
    return GEO_SYMBOLS.get(dir)[1]
  }
}
