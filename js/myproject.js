$(document).ready(function() {

$("a.scroll-button").on("click", function() {

	var sectionName = "#wavesseafoam";

	var sectionName = $(this).attr("href");
	console.log(sectionName);

//Step 3: Store how many pixels from the top the section we want to scroll to is
	//The offset method allows us to retreive the current position of an element relative to
	//the document
	//We need to specify where we want to measure from, so we add .top
	var sectionPlacement = 353;
	var sectionPlacement = $(sectionName).offset().top;
	console.log(sectionPlacement);

//Step 4: Animate our page to the position of the section we want to scroll to
//First we select our entire page by referencing html and body
//.animate allows us to animate different properties inside curly braces
//scrollTop moves the position of the vertical scrollbar to a given pixel measurement
//We specify sectionPlacement to animate the scroll bar to the
//position of our #first-section
//We use 1000 here to set the duration of our animation, in milliseconds
$("html, body").animate({ scrollTop: sectionPlacement }, 1000);
//Step 5: Stop links from following their normal behaviour
//To stop our links from jumping to the section inside of their href we use return false.
//This stops the "im done, carry on" message from being sent back to our anchor tag.
 return false;
});

});
