$(document).ready(function(){
//Calculator
	var x = 0;
	var y = 0;
	var z;

	$("#additionsolution").focus(function(){
		x = $("#addition1").val();
		y = $("#addition2").val();

		x = parseFloat(x);
		y = parseFloat(y);

		z = x + y;

		$(this).val(z);
	});


	$("#subtractionsolution").focus(function(){
		x = $("#subtraction1").val();
		y = $("#subtraction2").val();

		x = parseFloat(x);
		y = parseFloat(y);

		z = x - y;

		$(this).val(z);
	});


	$("#multiplicationsolution").focus(function(){
		x = $("#multiplication1").val();
		y = $("#multiplication2").val();

		x = parseFloat(x);
		y = parseFloat(y);

		z = x * y;

		$(this).val(z);

	});


	$("#divisionsolution").focus(function(){
		x = $("#division1").val();
		y = $("#division2").val();

		x = parseFloat(x);
		y = parseFloat(y);

		z = x / y;

		$(this).val(z);

	});


	$("#modulussolution").focus(function(){ // modulus gives you the left over remainder after dividing.
		x = $("#modulus1").val();
		y = $("#modulus2").val();

		x = parseFloat(x);
		y = parseFloat(y);

		z = x % y;

		$(this).val(z);

	});

//Color Animation
	$(".slider").slider({min: 0, max: 255, slide: captureColor, change: captureColor});

	$("#capturecolor").click(function(){
		$("body").animate({"background-color": $("#colorchoice").css("background-color")}, 2000);
	});

	function captureColor() {
		var r = $("#slider1").slider("value");
		var g = $("#slider2").slider("value");
		var b = $("#slider3").slider("value");
		$("#colorchoice").css("background-color", "rgb("+r+","+g+","+b+")");
	}

//Pick Your Ipsum
	$("#ipsumgenerate").submit(function(evt){
		evt.preventDefault();
		var numberofps = parseInt($("#paragraphs").val());
		$(".ipsum p:lt("+numberofps+")").show();
		$(".ipsum").slideDown(500);
		$("#paragraphs").trigger("blur");
	});

	$("#paragraphs").focus(function() {
		$(this).val("");
		$(".ipsum").slideUp(500, function(){
			$(".ipsum p").hide();
		});
	});

//Grocery List
var list = [];
var food_item;
var response = "a";

$("button#grocery").click(function(){

while(response == 'a'){
  food_item = prompt("What would you like to add to your grocery list?");
  list.push(food_item);
  response = prompt('(a)dd item or (q)uit?');
  }

  for (var i=0; i < list.length; i++){
    document.getElementById("mylist").innerHTML = document.getElementById("mylist").innerHTML + "<li>" + list[i] + "</li>";
   }
});

//Carousel
	checkArrows();

	$(".thumb").click(function(){
		$("#bigimage").attr({
			"src": $(this).attr("src"),
			"title": $(this).attr("title"),
			"alt": $(this).attr("alt")
		});
	});

	$("#right").click(function(){
		if($("#thumbnails").position().left > -512) {
			$("#thumbnails").animate({left: "-=133"}, 250, checkArrows);
		}
	});

	$("#left").click(function(){
		if($("#thumbnails").position().left < 20) {
			$("#thumbnails").animate({left: "+=133"}, 250, checkArrows);
		}
	});

	function checkArrows(){
		var leftPosition = $("#thumbnails").position().left;

		if(leftPosition == 20) {
			$("#left").hide();
			$("#right").show();
		}
		else if(leftPosition == -512) {
			$("#left").show();
			$("#right").hide();
		}
		else {
			$("#left").show();
			$("#right").show();
		}
	}

//HTML/CSS Login Form
	$(".username").focus(function() {
	$(".user-icon").css("left","-48px");
	});

	$(".username").blur(function() {
	$(".user-icon").css("left","0px");
	});

	$(".password").focus(function() {
	$(".pass-icon").css("left","-48px");
	});

	$(".password").blur(function() {
	$(".pass-icon").css("left","0px");
	});


});
