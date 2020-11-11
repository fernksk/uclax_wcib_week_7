jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {


	//if ( my_switch == false ) {
	//	my_switch = true;
	//	$('.square.alt').addClass('red');
	//} else {
	//	my_switch = false;
	//	$('.square.alt').removeClass('red');
	//}

//<--to this-->

//if ( $('.square.alt').hasClass('red')){
	//$('.square.alt').removeClass('red');
//} else {
	//$('.square.alt').addClass('red');
//}

//<--fade in&out-->

//$('#my_image').slideUp();
//$('#my_image').fadeOut();

//if ( my_switch == false ) {
	//my_switch = true;
	//$('#my_image').fadeOut();
//} else {
	//my_switch = false;
	//$('#my_image').fadeIn();
//}

//<--change images-->

//if ( my_switch == false ) {
//	my_switch = true;
//} else {
//	my_switch = false;
//	$('#my_image').attr('src', 'images/kitten.png');
//}

//<--change images&button text content-->

//change it in html first
//from <button id="my_button" class="btn btn-primary">Button</button> to
//<button id="my_button" class="btn btn-primary">Click for puppy</button>
//then use jQ

//if ( my_switch == false ) {
//	my_switch = true;

//	$(this).html('Click for Kitten');
//	$('#my_image').attr('src', 'images/puppy.png');

//} else {
//	my_switch = false;

//	$(this).html('Click for Puppy');
//	$('#my_image').attr('src', 'images/kitten.png');
//}

//<--change images,button text content and button color-->

if ( my_switch == false ) {
	my_switch = true;

	$(this).html('Click for Kitten').removeClass('btn-primary').addClass('btn-success');
	$('#my_image').attr('src', 'images/puppy.png');

} else {
	my_switch = false;

	$(this).html('Click for Puppy').removeClass('btn-success').addClass('btn-primary');
	$('#my_image').attr('src', 'images/kitten.png');
}

});
});
