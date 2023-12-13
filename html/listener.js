
window.addEventListener('message', (event) => {
    if (event.data.display === true) {
		$('.telegram').html(event.data.message);
		$("#telegram_container").fadeIn();
		$("#telegram_content").fadeIn();
		$("#telegram_buttons").fadeIn();
		$("#telegram_write").hide();

		
    } else {
		$("#telegram_container").hide();
		$("#telegram_content").hide();
		$("#telegram_buttons").hide();
		$("#telegram_write").hide();
		

	}

	$(".telegram_back_button").unbind().click(function(){
		$.post('https://rw-pinboard/back', JSON.stringify({})
	  );
	});

	$(".telegram_next_button").unbind().click(function(){
		$.post('https://rw-pinboard/next', JSON.stringify({})
	  );
	});

	$(".telegram_add_button").unbind().click(function(){
		$.post('https://rw-pinboard/new', JSON.stringify({tresc: $("#text_pinboard").val()})
	  );
	});
	
	$(".telegram_new_button").unbind().click(function(){
		$("#telegram_write").fadeIn();
		$("#telegram_buttons").hide();
		$("#telegram_content").hide();
	});

	$(".telegram_close_button").unbind().click(function(){
		$.post('https://rw-pinboard/close', JSON.stringify({})
	  );
	});
});
