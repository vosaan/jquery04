$(document).ready(function(){
	var headclix = 0, eyesclix = 0, noseclix = 0; mouthclix = 0;
	
	lighting_1();
	lighting_2();
	lighting_3();
	
	$("#head").click(function(){
		if(headclix < 9){
			headclix += 1;
			$(this).animate({left:"-=367px"}, 500);
			} else {
			headclix = 0;
			$(this).animate({left:"0px"}, 500);			
		}
	});

	$("#eyes").click(function(){
		if(eyesclix < 9){
			eyesclix += 1;
			$(this).animate({left:"-=367px"}, 500);
		} else {
			eyesclix = 0;
			$(this).animate({left:"0px"}, 500);			
		}
	});

		$("#nose").click(function(){
		if(noseclix < 9){
			noseclix += 1;
			$(this).animate({left:"-=367px"}, 500);			
		} else {
			noseclix = 0;
			$(this).animate({left:"0px"}, 500);			
		}
	});

		$("#mouth").click(function(){
		if(mouthclix < 9){
			mouthclix += 1;
			$(this).animate({left:"-=367px"}, 500);			
		} else {
			mouthclix = 0;
			$(this).animate({left:"0px"}, 500);			
		}
	});	
		
});

function lighting_1(){
	$("#container #lighting1").fadeIn(250).fadeOut(250);
	setTimeout("lighting_1()", 5000);
}

function lighting_2(){
	$("#container #lighting2").fadeIn("fast").fadeOut("fast");
	setTimeout("lighting_2()", 6000);
}

function lighting_3(){
	$("#container #lighting3").fadeIn("fast").fadeOut("fast");
	setTimeout("lighting_3()", 7000);
}