$(document).ready(function() {
	$('#button').click(function() {
		var firstName = $('#firstname').val();
		var lastName = $('#lastname').val();
		$('.output').append('<section>' + '<h1>' + firstName + ' ' + lastName + '</h1>' + '<p>' + 'Click for description' + '</p>' + '</section>');
	});
});
$(document).on('click', 'section', function() {
	var description = $('#description').val();
	$(this).children().hide();
	$(this).append('<p>' + description + '</p>')
});