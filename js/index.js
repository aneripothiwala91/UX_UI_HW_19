console.log("Your index.js file is loaded correc")

// const circle1 = $("#circle1") 


// function toggle1 () {
//     $("#buttontitle1").css("display", "block");
//     $("#buttonlist1").css("display", "block");
//     $("#bottomtitle1").css("display", "none");
//     $("#buttontitle2", "#buttonlist2" , "#bottomtitle2").css("display", "none");
// }

// circle1.click(function (event) {event.preventDefault(); toggle1()
// }) 


// const circle2 = $("#circle2") 


// function toggle2 () {
//     $("#buttontitle2").css("display", "block");
//     $("#buttonlist2").css("display", "block");
//     $("#bottomtitle2").css("display", "none");
//     $("#buttontitle1").css("display", "none");
//     $("#buttonlist1").css("display", "none");
//     $("#bottomtitle1").css("display", "none");
    
// }

// circle2.click(function (event) {event.preventDefault(); toggle2()
// }) 


$('.circle').on("click", function(){
  
  if ($(this).hasClass("circle1")){
    $("#buttontitle1").addClass("active");
    $("#buttonlist1").addClass("active");
    $("#buttontitle2", "#buttontitle3", "#buttontitle4").removeClass("active");
    $("#buttonlist1").css("display", "block");
    $("#buttonlist2", "#buttonlist3", "#buttonlist4").css("display", "none");
  }

   else if ($(this).hasClass("circle2")){
        $("#buttontitle2").addClass("active");
        $("#buttonlist2").addClass("active");
        $("#buttontitle1", "#buttontitle2", "#buttontitle3").removeClass("active");
        $("#buttonlist2").css("display", "block");
        $("#buttonlist1", "#buttonlist2", "#buttonlist3").css("display", "none");

  }

});
