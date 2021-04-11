var geo_symbols = new Array();

geo_symbols['lat'] = ['N','S'];
geo_symbols['long'] = ['W','E'];

function process( input ) {
  var coords = input.split( "," );

  return convert( coords[0], "lat" ) + " " + convert( coords[1], "long" );
}

function convert( dec, dir ) {
  if ( dec >= 0 ) {
    _adjust = Math.floor;
  } else {
    _adjust = Math.ceil;
  }

  mins = (dec - _adjust(dec)) * 60;
  secs = (mins - _adjust(mins)) * 60;

  return _adjust(dec) + "°" + _adjust(mins) + "′" + Math.round( secs, 1) + "″" + get_hemisphere(dec,dir);
}

function get_hemisphere( dec, dir ) {
  if ( dec >= 0 ) {
    return geo_symbols[dir][0];
  } else {
    return geo_symbols[dir][1];
  }
}
