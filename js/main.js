$(function(){

  // jQuery methods go here...
  var picture1W = $('#img5').width();
  var picture2W = $('#img9').width();

  
  // Next slide
  $("#btnnext").click(function(){
   //  left: "+=50",
     $('#img5').animate({Left:'200px'});
  });
  
  //previous slide
    $('.back-slide').click(function( e ){
    e.preventDefault();
    $('#slides').animate({scrollLeft: "-="+slideW }, 600);
  });
  
  });