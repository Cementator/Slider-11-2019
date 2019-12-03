import '../css/first.scss';
$(function(){

  let pos1 = 0; // counter for forward in the first row
  let pos11 = 4; // counter for backward in the first row
  let pos2 = 0; // counter for forward in the second row
  let pos22 = 3; // counter for backward in the second row
  var picture1W = -$("#img"+ pos1).width(); // width of the div which will be animated to the right in the first row
  var picture1Wback = -$("#img" + pos11).width(); // width of the hidden div which will be animated to the far left in the first row
  var picture2W = -$("#im"+ pos2).width(); // width of the div which will be animated to the righ in the second row
  var picture2Wback = -$("#im" + pos22).width(); // width of the hidden div which will be animated to the far left in the second row
  var firstrowwidth = $("#img0").width() + $("#img1").width() + $("#img2").width() + $("#img3").width() + $("#img4").width();
  var secondrowwidth = $("#im0").width() + $("#im1").width() + $("#im2").width() + $("#im3").width();

  $("#btnnext").click(()=>{
    $("div#wrap > div").animate({right: "+=" + picture1W + "px"}, 500); //first row
    $("#img" + pos1).animate({right: "+=" + firstrowwidth +"px"}, 500); //first row
    $("div#wrap2 > div").animate({right: "+=" + picture2W + "px"}, 500); //second row
    $("#im" + pos2).animate({right: "+=" + secondrowwidth +"px"}, 500); //second row
    pos1 = pos1 + 1;
    pos11 = pos11 + 1;  
    pos2 = pos2 + 1;
    pos22 = pos22 +1;
    picture1W = -$("#img"+ pos1).width(); //first row
    picture2W = -$("#im"+ pos2).width(); //second row 
    picture1Wback = -$("#img" + pos11).width(); //first row
    picture2Wback = -$("#im" + pos22).width(); //second row
    if (pos1 > 4) {
    pos1 = 0
    picture1W = -$("#img"+ pos1).width(); //first row
    }
    if (pos11 == 5) {
      pos11 = 0
      picture1Wback = -$("#img" + pos11).width(); //first row
    }
    if (pos2 > 3) {
      pos2 = 0
      picture2W = -$("#im"+ pos2).width(); //second row 
    }
    if (pos22 == 4) {
      pos22 = 0
      picture2Wback = -$("#im" + pos22).width();
    } 
  });
  $("#btnback").click(function(){
    $("div#wrap > div").animate({right: "-=" + picture1Wback + "px"}, 500); //first row
    $("#img" + pos11).animate({right: "-=" + firstrowwidth + "px"}, 500); //first row
    $("div#wrap2 > div").animate({right: "-=" + picture2Wback + "px"}, 500); //second row
    $("#im" + pos22).animate({right: "-=" + secondrowwidth + "px"}, 500); //second row
    pos1 = pos1 - 1;
    pos11 = pos11 - 1;
    pos2 = pos2 - 1;
    pos22 = pos22 - 1;
    picture1W = -$("#img" + pos1).width(); //first row
    picture1Wback = -$("#img" + pos11).width(); //first row
    picture2W = -$("#im" + pos2).width(); //second row
    picture2Wback = -$("#im" + pos22).width(); //second row
    if (pos1 == -1) {
      pos1 = 4
      picture1W = -$("#img" + pos1).width(); //first row
    }
    if (pos11 == -1) {
      pos11 = 4
      picture1Wback = -$("#img" + pos11).width(); //first row
    }
    if (pos2 == -1) {
      pos2 = 3
      picture2W = -$("#im" + pos2).width(); //second row
    }
    if (pos22 == -1) {
      pos22 = 3
      picture2Wback = -$("#im" + pos22).width(); //second row
    }
  });
});