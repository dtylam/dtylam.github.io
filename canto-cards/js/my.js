//list of card colours
var colors = [  "#c2e1e5", "#7a8b9e", "#a9ccbf", 
                "#efd0cc", "#d7c8de", "#d8c8af", 
                "#f78733", "#c0b283", "#eeaa7b",
                "#66b9bf", "#e37222", "#96858f",
                "#acc3ff", "#c6ecb7"];
                
//ready function
$(document).ready(function () {
    //change card colour 
    $("#card_en").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);
    $("#card_can").css('background-color', 
        colors[Math.floor(Math.random() * colors.length)]);

    // //set up MIME type
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType("application/json");
        }
      }
    });

    // click session
    $('.menuitem').click(function(){
        //empty original container
        $(".container").empty();

        //read json file
        var filename = "vocabs/" + $(this).val() + ".json";
        $.getJSON( filename, {}, function( data ) {
            var vocabs = data.session.vocabs;
            
            //test
            //$(".container").append(vocabs[0].word_en);

            //populate with cards            
            $.each(vocabs, function(index, vocab){
                var newcard = $("\
                    <div class= 'six columns card'> \
                        <h2 class='word_en'>" + vocab.word_en + "</h2> \
                        <h2 class='word_canto'>" + vocab.word_canto + "</h2> \
                        <h4 class='jyutping'>" + vocab.jyutping + "</h4> \
                        <p class='tag'>" + vocab.tags[0].tag + "</p> \
                    </div> \
                ");
                newcard.css('background-color', colors[Math.floor(Math.random() * colors.length)]);

                //decide if new row is needed or not
                if (index % 2 == 0){
                    var newrow = $("<div class='row'></div>");
                    newrow.append(newcard);
                    $(".container").append(newrow);
                }
                else{
                    $(".container").children().last().append(newcard);
                }
            });

            //append comments
            var commentrow = $("<div class='row comment'></div>");
            commentrow.append("<p>" + data.session.comment + "</p>");
            $(".container").append(commentrow);

            //auto hide canto
            $('.word_canto').hide();
            $('.jyutping').hide();

            // click any card to flip
            $('.card').click(function(){
                //change card colour 
                $(this).css('background-color', 
                    colors[Math.floor(Math.random() * colors.length)]);
                //decide flip
                if ($('.word_canto', this).is(':hidden')){
                    $('.word_canto', this).show();                    
                    $('.jyutping', this).show();                    
                    $('.word_en', this).hide();
                }
                else if ($('.word_en', this).is(':hidden')){
                    $('.word_en', this).show();
                }
                else {
                    $('.word_canto', this).hide();
                    $('.jyutping', this).hide();
                }
            });
        });

    });

    // at launch: click any card to change color
    $('.card').click(function(){
        //change card colour 
        $(this).css('background-color', 
            colors[Math.floor(Math.random() * colors.length)]);
    });
  })

