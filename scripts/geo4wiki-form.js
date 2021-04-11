$( document ).ready(function() {
  $( "#geo-from" ).focus();

  $( "#geo-input" ).submit(function( event ) {
    event.preventDefault();
    const formData = new FormData(event.target);

    var result = document.getElementById("converted-result");

    $( "#converted-result" ).val( process( formData.get('from') ) );

    var container = $( "#converted-container");

    container.fadeIn();

    // copy to clipboard
    result.focus();
    result.setSelectionRange(0, result.value.length);
    document.execCommand("copy");
    result.blur();

    container.find( '.success-msg' ).fadeIn();
  });
});
