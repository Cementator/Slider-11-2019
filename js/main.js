$(function(){

  // jQuery methods go here...
  var picture1W = $('#img5').width();
  var picture2W = $('#img9').width();

  
  // Next slide
  $("#btnnext").click(function(){
   //  left: "+=50",
     $("#wrap").animate({marginRight: "-=270px"});
  });
  
  //previous slide
  $("#btnback").click(function(){
    //  left: "+=50",
      $("#wrap").animate({marginRight: "+=270px"});
   });
  });