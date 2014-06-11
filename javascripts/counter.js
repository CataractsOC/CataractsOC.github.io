$(document).ready(function(){
	counter();

	$('.counter-input').focus(function() {
		$(".error").fadeOut();
	});

	$(".create-counter").click(function(){

		var intRegex = /^\d+$/;
		var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;
		var str = $('.counter-input').val();

		if(intRegex.test(str) || floatRegex.test(str)){
			counter();
		}
		else{
			$(".error").fadeIn();
		}
	});
});

function counter(){

	$('.counter-wrapper').empty();

	var number = $(".counter-input").val();
	var numArray = number.split("");

	for(var i=0; i<numArray.length; i++) { 
		numArray[i] = parseInt(numArray[i], 10);
		$(".counter-wrapper").append('<span class="digit-con"><span class="digit'+i+'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');	
	}

	var increment = $('.digit-con').outerHeight();
	var speed = 5000;

	for(var i=0; i<numArray.length; i++) {
		$('.digit'+i).animate({top: -(increment * numArray[i])}, speed);
	}

	$(".digit-con:nth-last-child(3n+4)").after("<span class='comma'>,</a>");
}