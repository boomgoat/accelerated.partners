$('.expand-button').on('click', function(){
  $('.special-text').toggleClass('-expanded');
  
  if ($('.special-text').hasClass('-expanded')) {
    $('.expand-button').html('Collapse Content');
  } else {
    $('.expand-button').html('Continue Reading');
  }
});