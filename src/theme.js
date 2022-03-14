function lightTheme() {
	// If the theme is already light, don't add the transitions!
	const theme = $.cookie('theme');
	if (theme != 'light') {
		$('.switch').css('transition', 'left 0.5s ease');
		$('body').css('transition', 'background-color 0.6s ease');
	}
	$('#loading').css('color', '#000000');
	$('.switch').css('left', '1vw');
	//$('.switch').css('left', '13px');
	$('.switch').css('background-color', '#ffffff');
	$('.toggle').css('background-color', '#d1d1cf');
	$('.toggle').css('border', '0.1vw solid #d1d1cf');
	$('.toggle').attr('class', 'toggle light');
	$('body').css('background-color', '#eeeeee');
	$('#icon').css('color', '#000000');
	$('#icon').attr('class', 'fa fa-sun-o');
	$('#msg').css('color', '#000000');
	$('#definition').css('color', '#000000');
	$('input[type=button]').css('color', '#000000');
	$('#boxes').css('color', '#000000');
}
function darkTheme() {
	// If the theme is already dark, don't add the transitions!
	const theme = $.cookie('theme');
	if (theme != 'dark') {
		$('.switch').css('transition', 'left 0.5s ease');
		$('body').css('transition', 'background-color 0.6s ease');
	}
	$('#loading').css('color', '#ffffff');
	$('.switch').css('left', '-1vw');
	//$('.switch').css('left', '-13px');
	$('.switch').css('background-color', '#000000');
	$('.toggle').css('background-color', '#dddddd');
	$('.toggle').css('border', '0.1vw solid #dddddd');
	$('.toggle').attr('class', 'toggle dark');
	$('#icon').attr('class', 'fa fa-moon-o');
	$('body').css('background-color', '#121213');
	$('#icon').css('color', '#ffffff');
	$('#icon').attr('class', 'fa fa-moon-o');
	$('#msg').css('color', '#ffffff');
	$('#definition').css('color', '#ffffff');
	$('input[type=button]').css('color', '#ffffff');
	$('#boxes').css('color', '#ffffff');
}
function theme() {
	var toggle_class = $('.toggle').attr('class');
	if (toggle_class.includes('dark')) { // Going from dark (default) to light
		lightTheme();
	} else { // Going from light to dark
		darkTheme();
	}
	toggle_class = $('.toggle').attr('class');
	$.ajax({
		url: 'src/theme.php',
		method: 'post',
		global: false,
		async: false,
		data: {
			'theme': toggle_class
		},
		success: function(data) {
			console.log(data);
		}
	})
}