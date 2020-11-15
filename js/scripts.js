jQuery(function() {

	let my_switch = false;
	$('#button1').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

			$('p').hide();
			$('#leftpanel').show();
			$('#button2').show();
			$(this).html('BACK TO HALLWAY');
			$('#my_image').attr('src', 'images/b1.jpg');

		} else {
			my_switch = false;

$('p').hide();
			$('#leftpanel').hide();
			$('#button2').show();
			$(this).html('GO TO BEDROOM');
			$('#my_image').attr('src', 'images/thumb.jpg');
		}
	});
});

//<---panel-->
jQuery(document).ready(function($){
	$('#b1').on({
		'click': function(){
			$('#my_image').attr('src','images/b2.jpg');
		}
	});

	$('#b2').on({
		'click': function(){
			$('#my_image').attr('src','images/b3.jpg');
		}
	});

	$('#b3').on({
		'click': function(){
			$('#my_image').attr('src','images/b4.jpg');
		}
	});
});

//<----->
jQuery(document).ready(function($){
$("#b3").mouseleave(function(){
alert("LOOK SO MUCH BETTER!! LETS GO TO LIVING ROOM");
	});
		});


//<----->
jQuery(function() {

	let my_switch = false;
	$('#button2').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

			$('#leftpanel').hide();
			$('#button1').hide();
			$('#button2').hide();
			$('#rightpanel').show();
			$(this).html('BACK TO HALLWAY');
			$('#my_image').attr('src', 'images/l1.jpg');

		} else {
			my_switch = false;

			$('#leftpanel').hide();
			$('#button1').hide();
			$('#button2').hide();
			$('#rightpanel').hide();
			$(this).html('GO TO LIVING ROOM');
			$('#my_image').attr('src', 'images/thumb.jpg');
		}
	});
});

//<---panel-->
jQuery(document).ready(function($){
	$('#b4').on({
		'click': function(){
			$('#my_image').attr('src','images/l4.jpg');
		}
	});

	$('#b5').on({
		'click': function(){
			$('#my_image').attr('src','images/l9.jpg');
		}
	});

	$('#b6').on({
		'click': function(){
			$('#my_image').attr('src','images/l9.jpg');
		}
	});
});

//<---restart-->
function refreshPage(){
	window.location.reload();
}
