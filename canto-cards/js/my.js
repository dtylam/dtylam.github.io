//list of card colours
var colors = [  "#c2e1e5", "#7a8b9e", "#a9ccbf", 
                "#efd0cc", "#d7c8de", "#d8c8af", 
                "#f78733", "#c0b283", "#eeaa7b",
                "#66b9bf", "#e37222", "#96858f"];

//ready function
$(document).ready(function () {
    //change card colour 
    $("#card_en").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);
    $("#card_can").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);
  })

// change card colours at each refresh
$('input[type="submit"]').click(function(){
    //get search term
    var search_term = $('input[name=search_term]').val();
    $("#word_en").text(search_term);
    
    //change card colour 
    $("#card_en").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);
    $("#card_can").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);
});

