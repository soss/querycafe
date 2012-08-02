$(function() {

  $('#doesitwork').click(function() {
    $('#status').addClass('working');
  });
  
  $('#highlight_d').click(function() {
    $('.table:eq(4)').addClass('highlighted');
  });

  $('#highlight_all').click(function() {
    
  });

  $('#remove_last').click(function() {
    $('.table :last').remove();
  });

  $('#change_a').click(function() {
    $(this).addClass('blue');
  });

  $('#change_c').click(function() {
    $(this).addClass('.green');
  });

  $('.order input[type="checkbox"]').live('click', function(e) {
    if ($(this).attr('checked')) {
      checkoff(this);
    } else {
      uncheck(this);
    }
  });

  $('#new_order').on('submit', function(e) {
    e.preventDefault();
    $('#orders').append('<li class="order">' + $('#order_name').val() + '</li>');
    $('#order_name').val('');
  });
});

var checkoff = function(el) {
  el.addClass('done');
}

var uncheck = function(el) {
  el.removeClass('done');
}
