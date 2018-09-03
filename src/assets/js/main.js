// JavaScript Document
$("#signin-form").validate();
$("#forgetpassword-form").validate();
$("#signup-form").validate();
$("#signup-form-stepone").validate();

//date picker
$("#datepicker").datepicker({
	inline: true,
	firstDay: 1,
	showOtherMonths: true,
	dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});

//tooltip
$(function () {
	"use strict";
	$('[data-toggle="tooltip"]').tooltip();
});



//short text
$(".short-details").text(function (index, currentText) {
	"use strict";
	return currentText.substr(0, 40) + "...";
});


// $(document).ready(function () { //document ready
// 	"use strict";
// 	$(".floating-input").focus(function () {
// 		$(this).parent().addClass("is-active is-completed");
// 	});

// 	$(".floating-input").focusout(function () {
// 		if ($(this).val() === "") {
// 			$(this).parent().removeClass("is-completed");
// 			$(this).parent().removeClass("is-active");
// 		}
// 	});

// $(".signup-stepone button").click(function(){
// 	$(".signup-steptwo").show();
// 	$(".signup-stepone").hide();
// 	$(".signup-stepthree").hide();
// });
// $(".signup-steptwo button").click(function(){
// 	$(".signup-stepone").hide();
// 	$(".signup-steptwo").hide();
// 	$(".signup-stepthree").show();
// });
// }); // document ready

$("input[name='signup-otp']").keyup(function () {
	"use strict";
	$("#signup-form-stepone button").removeAttr("disabled");
});

// //  <script> 
//     $(document).ready(function () {
//       $("#basic-addon3").click(function () {
//         $(".lextra-side-bar-listing-container").toggleClass("display-none");
//       });
//       $("#basic-addon4").click(function () {
//         $(".lextra-side-bar-location-container").toggleClass("display-none");;
//       });
//     });
// //   </script>
// //   <script>
//     $(".hide-side-bar").click(function () {
//       $(".lextra-side-bar-container").toggleClass("d-none")
//       $(".hide-side-bar").toggleClass("rotate-icon")
  
//     });
// //   </script>