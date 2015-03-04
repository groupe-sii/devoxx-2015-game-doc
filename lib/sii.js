if(!window.location.hash) {
	window.location.hash = '#!/default/';
}

(function() {
	var adapt = function() {
		// rename texts to match Stomp
		$('h4:contains("Response Messages")').text("Events");
		$('h4:contains("Response Class")').text("Event Class");
		$('th:contains("HTTP Status Code")').text("Event topic");
		$('th:contains("Response Model")').text("Event Model");
		$('.http_method a:contains("post")').text("publish");
		$('.http_method a:contains("get")').text("subscribe");

		// remove column
		$('th:contains("Value")').hide();
		$('th:last-child').width("auto");
	}
	
	sii = {
		adapt: adapt
	};
})()