const GEO_SYMBOLS = new Map([
  [0, ['N','S']], // latitude
  [1, ['E','W']]  // longitude
]);

function process( input ) {
  let output = new Array();

  input.split( ",", 2 ).forEach((item, i) => {
    output.push(
      dec_to_degs(item) +
      get_hemisphere(item, i)
    )
  });

  return output.join(" ");
}

function dec_to_degs( dec ) {
  let abs = Math.round(Math.abs(dec * 3600));
  let degs = Math.floor(abs / 3600);
  let mins = Math.floor((abs % 3600) / 60);
  let secs = (abs % 3600) % 60;

  return `${degs}°${mins}′${secs}″`;
}

function get_hemisphere( dec, dir ) {
  return dec >= 0 ? GEO_SYMBOLS.get(dir)[0] : GEO_SYMBOLS.get(dir)[1];
}
