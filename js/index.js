$(document).ready(function(){
  // Hamburger Responsive Menu Code
  $('#hamburger').click(function(){
    $('#hide').toggle();
  });
    // Then look up 'throttle' - reduces the callback fn firing.

  $( window ).resize(function() {
      var screenwidth = $( window  ).width();
      if (screenwidth >= 585 && $('#hide').not(':visible')){
        $('#hide').show();
      }
    });

  $('#slide a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

});
