$(function() {

  $('#doesitwork').click(function() {
    $('#status').addClass('working');
  });
  
  $('#highlight_d').click(function() {
    $('.table:eq(3)').addClass('highlighted');
  });

  $('#highlight_all').click(function() {
    $('.table').addClass('highlighted');
  });

  $('#remove_last').click(function() {
    $('.table:last').remove();
  });

  $('#change_a').click(function() {
    $('.table:eq(0)').addClass('blue');
  });

  $('#change_c').click(function() {
    $('.table:eq(2)').addClass('green');
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
    $('#orders').append('<li class="order">' + '<span>' + $('#order_name').val() + '</span> <span class="right"><input type="checkbox" /></span></li>');
    $('#order_name').val('');
  });
});

$(document).ready(function() {
	$('.order input[type="checkbox"]').each(function(e) {
    	if ($(this).attr('checked')) {
   	   checkoff(this);
  	  } else {
  	    uncheck(this);
    	}
	});
});
	

var checkoff = function(el) {
  $(el).parent().parent().addClass('done');
}

var uncheck = function(el) {
  $(el).parent().parent().removeClass('done');
}
