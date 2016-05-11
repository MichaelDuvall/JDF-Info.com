/* Coded by Michael Duvall */
$("td").hover(
		function () {
			$(this).addClass("shadowClass");
			
		},
		function () {
		$(this).removeClass("shadowClass");
		});
		
		$("#jdfSchem").hover(
		function () {
			$("#jdfSchem ul").append("<li class='appendLi'>Open's in new Window</li>");
		},
		function () {
		$(".appendLi").remove();
		});
		
		$("#cip4").hover(
		function () {
			$("#cip4 ul").append("<li class='appendLi'>Open's in new Window</li>");
		},
		function () {
		$(".appendLi").remove();
		});
		
		$("#jdfTools").hover(
		function () {
			$("#jdfTools ul").append("<li class='appendLi'>Open's in new Window</li>");
		},
		function () {
		$(".appendLi").remove();
		});
		$("#asnJdf").hover(
		function () {
			$("#asnJdf ul").append("<li class='appendLi'>Open's in new Window</li>");
		},
		function () {
		$(".appendLi").remove();
		});
		$("#jdfSpec").hover(
		function () {
			$("#jdfSpec ul").append("<li class='appendLi'>Open's in new Window</li>");
		},
		function () {
		$(".appendLi").remove();
		});
		
		
		$("#jdfSchem").click(function(){ 
	window.open ("http://www.cip4.org/documents/jdf_specifications/schema.php");
		});
		$("#cip4").click(function(){ 
	window.open ("http://www.cip4.org/");
		});
		$("#jdfTools").click(function(){ 
	window.open("http://community.cip4.org/index.php/tools");	
		});
		$("#asnJdf").click(function(){ 
	window.open("http://www.printing.org/node/3405/");	
		});
		$("#jdfSpec").click(function(){ 
	window.open("http://www.cip4.org/documents/jdf_specifications/");	
		});
// footer images
$("#html5Logo").tooltip({position: { my: "right+129", at: "right" }, content: "JDF-Info.com has passed the HTML5 Validation test by W3C." });
$("#twitter").hover(
		function () {
			$(this).addClass("shadowClass");
			var src = "images/twitterColor.png";
            $(this).attr("src", src);
		},
		function () {
			$(this).removeClass("shadowClass");
			var src = "images/jdfInfoTwitter.png";
            $(this).attr("src", src);
		});
$("#linkedIn").hover(
		function () {
			$(this).addClass("shadowClass");
			var src = "images/linkedinColor.png";
            $(this).attr("src", src);
		},
		function () {
			$(this).removeClass("shadowClass");
			var src = "images/jdfInfoLinkedIn.png";
            $(this).attr("src", src);
		});	
$("#facebook").hover(
		function () {
			$(this).addClass("shadowClass");
			var src = "images/facebookColor.png";
            $(this).attr("src", src);
		},
		function () {
			$(this).removeClass("shadowClass");
			var src = "images/jdfInfoFacebook.png";
            $(this).attr("src", src);
		});	
$("#html5Logo").hover(
		function () {
			
			var src = "images/html5Color.png";
            $(this).attr("src", src);
		},
		function () {
			
			var src = "images/html5.png";
            $(this).attr("src", src);
		});						
		
		
					