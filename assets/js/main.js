$(function() {
  $('.order input[type="checkbox"]').on('click', function(e) {
    if ($(this).attr('checked')) {
      checkoff(this);
    } else {
      uncheck(this);
    }
  });  
});

var checkoff = function(el) {
  el.addClass('done');
}

var uncheck = function(el) {
  el.removeClass('done');
}
