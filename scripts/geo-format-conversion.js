const GEO_SYMBOLS = new Map([
  [0, ['N','S']], // latitude
  [1, ['W','E']]  // longitude
]);

function process( input ) {
  let output = new Array()

  input.split( ",", 2 ).forEach((item, i) => {
    output.push(
      dec_to_degs(item) +
      get_hemisphere(item, i)
    )
  });

  return output.join(" ");
}

function dec_to_degs( dec ) {
  degs = Math.abs( dec );
  degs_int = Math.floor(degs);

  mins = (degs - degs_int) * 60;
  secs = (mins - Math.floor(mins)) * 60;

  return `${degs_int}°${Math.floor(mins)}′${Math.round(secs,1)}″`
}

function get_hemisphere( dec, dir ) {
  return dec >= 0 ? GEO_SYMBOLS.get(dir)[0] : GEO_SYMBOLS.get(dir)[1]
}
