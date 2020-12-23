console.log("Your index.js file is loaded correc")




$('.circle').on("click", function(){
    
    $(this).children().toggleClass("textup");
    $(this).children('ul').toggleClass("listup");


      });





      $(document).ready(function() {

        $("#imagelogo").click(function(){
           $(".target").effect( "bounce", {times:1}, 1000 );
        });

     });


