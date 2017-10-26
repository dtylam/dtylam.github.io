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

    // //set up MIME type
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType("application/json");
        }
      }
    });

    // click session
    $('#menuitem').click(function(){
        //empty original container
        $(".container").empty();

        //read json file
        var filename = "vocabs/" + $(this).val() + ".json";
        $.getJSON( filename, {}, function( data ) {
            var vocabs = data.session.vocabs;
            
            //test
            //$(".container").append(vocabs[0].word_en);

            //populate with rows            
            $.each(vocabs, function(index, vocab){
                var $cardrow = $("\
                <div class='row'> \
                    <div class= 'six columns card' id='card_en'> \
                        <h2 id='word_en'>" + vocab.word_en + "</h2> \
                        <h2 id='word_canto'>" + vocab.word_canto + "</h2> \
                        <h4 id='jyutping'>" + vocab.jyutping + "</h4> \
                        <p id='tag'>" + vocab.tags[0].tag + "</p> \
                    </div> \
                    <div class= 'six columns card'  id='card_can'> \
                        <h2>廣東話</h2> \
                        <p id='word_can'></p> \
                        <p id='jyutping'></p> \
                    </div> \
                </div> \
                ");
                $(".container").append($cardrow);
            });

        });
       
    });

    // click any card to flip
    $('.card').click(function(){
        //change card colour 
        $(this).css('background-color', 
            colors[Math.floor(Math.random() * colors.length)]);
    });
  })



