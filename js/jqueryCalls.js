/* Coded by Michael Duvall */
$(function() {
$("#dialog").dialog({
	 position: { my: "center", at: "center", of: "#jdfPrdCert" },
	 modal: true,
	 height: 380,
	 width: 730,
	 modal: true,
	autoOpen: false,
	show: {
		effect: "puff",
		duration: 400
	},
	hide: {
		effect: "clip",
		duration: 400
		}
});

$( "#opener" ).click(function() {
	$( "#dialog" ).dialog( "open" );
	});
 }); 

$(function() {
$("#jmfBox" ).dialog({
	 position: { my: "center", at: "center", of: "#jdfPrdCert" },
	 modal: true,
	 height: 380,
	 width: 730,
	 modal: true,
	 autoOpen: false,
	 show: {
		effect: "drop",
		duration: 500
	},
	hide: {
		effect: "drop",
		duration: 500
		}
});

$( "#jdfJmf" ).click(function() {
	$( "#jmfBox" ).dialog( "open" );
	});
}); 

$(function() {
$( "#emailBox" ).dialog({
	position: { my: "center", at: "top", of: "#jdfPrdCert" },
	 modal: true,
	 height: 259,
	 width: 243,
	 modal: true,
	autoOpen: false,
	show: {
		effect: "scale",
		duration: 500
	},
	hide: {
		effect: "puff",
		duration: 500
		}
});

$("#jdfemail" ).click(function() {
	$("#emailBox").dialog( "open" );
	});
}); 

$(function() {
$("#jdfTutBox" ).dialog({
	position: { my: "center", at: "top", of: "#jdfPrdCert" },
	 modal: true,
	 height: 259,
	 width: 722,
	 modal: true,
	autoOpen: false,
	show: {
		effect: "blind",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});

$( "#jdfTut" ).click(function() {
	$( "#jdfTutBox" ).dialog( "open" );
	});
});
	
$(function() {
$("#jdfCertBox" ).dialog({
	position: { my: "center", at: "center", of: "#jdfPrdCert" },
	 modal: true,
	 height: 380,
	 width: 722,
	 modal: true,
	autoOpen: false,
	show: {
		effect: "blind",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});
$("#jdfPrdCert").click(function(){
	$('#jdfCertBox').dialog('open');
	});
});

// why are you not working
$(function(){
$("#misBox").dialog({
	position: { my: "center", at: "center", of: "#jdfPrdCert" },
	modal: true,
	height: 380,
	width: 722,
	modal: true,
	autoOpen: false,
	show: {
		effect: "blind",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});
$("#jdfMis").click(function(){
	$('#misBox').dialog('open');
	});
});
$(function(){
$("#intBox").dialog({
	position: { my: "center", at: "center", of: "#jdfPrdCert" },
	modal: true,
	height: 380,
	width: 722,
	modal: true,
	autoOpen: false,
	show: {
		effect: "puff",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});
$("#intCert").click(function(){
	$('#intBox').dialog('open');
	});
});
$(function(){
$("#intFctBox").dialog({
	position: { my: "center", at: "center", of: "#jdfPrdCert" },
	modal: true,
	height: 380,
	width: 243,
	modal: true,
	autoOpen: false,
	show: {
		effect: "puff",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});
$("#qckFacts").click(function(){
	$('#intFctBox').dialog('open');
	});
});

function preload(arrOfImages) {
    $(arrOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'images/twitterColor.png',
    'images/linkedinColor.png',
    'images/facebookColor.png',
    'images/html5Color.png'
]);

$(function(){
$("#aboutBox").dialog({
	position: { my: "center", at: "center", of: "#jdfPrdCert" },
	modal: true,
	height: 260,
	width: 243,
	modal: true,
	autoOpen: false,
	show: {
		effect: "puff",
		duration: 500
	},
	hide: {
		effect: "fade",
		duration: 500
		}
});
$("#aboutJdfInof").click(function(){
	$('#aboutBox').dialog('open');
	});
});






