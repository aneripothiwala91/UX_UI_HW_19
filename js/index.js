console.log("Your index.js file is loaded correc")




$('.circle').on("click", function(){
    $(".listup").removeClass("listup");
    $(".textup").removeClass("textup");
    $(this).children().toggleClass("textup");
    $(this).children('ul').toggleClass("listup");
    // $(".footernav").css("margin-bottom", "300px");
    
});


$('.circle1').on("click", function(){
$(".footernav").css("margin-bottom", "200px");
});

$('.circle2').on("click", function(){
    $(".footernav").css("margin-bottom", "300px");
    });





$(".leftcontent h2").animate({ right:"-200px" , opacity: "1"  }, 2000)







    //   $(document).ready(function() {

    //     $("#imagelogo").click(function(){
    //        $(".target").effect( "bounce", {times:1}, 1000 );
    //     });

    //  });


