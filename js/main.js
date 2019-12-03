import '..css/first.scss';

$(function(){

  let pos1 = 0; // brojac pozicije u prvome redu
  let pos11 = 4; // brojac za back u prvome redu
  var pos2 = 0; // brojac pozicije u drugome redu
  var pos22 = 3; // brojac za back u drugome redu
  var picture1W = -$("#img"+ pos1).width(); // sirina diva koji treba biti pomaknut u prvome redu
  var picture1Wback = -$("#img" + pos11).width(); // sirina sakrivenoga diva koji treba biti pomaknut u lijevo u prvome redu
  var picture2W = -$("#im"+ pos2).width(); // sirina diva koji treba biti pomaknut u drugome redu
  var picture2Wback = -$("#im" + pos22).width(); // sirina sakrivenoga diva koji treba biti pomaknut u lijevo u drugome redu
  var firstrowwidth = $("#img0").width() + $("#img1").width() + $("#img2").width() + $("#img3").width() + $("#img4").width();
  var secondrowwidth = $("#im0").width() + $("#im1").width() + $("#im2").width() + $("#im3").width();

  $("#btnnext").click(()=>{
    $("div#wrap > div").animate({right: "+=" + picture1W + "px"}, 500); //prvi red
    $("#img" + pos1).animate({right: "+=" + firstrowwidth +"px"}, 500); //prvi red
    $("div#wrap2 > div").animate({right: "+=" + picture2W + "px"}, 500); //drugi red
    $("#im" + pos2).animate({right: "+=" + secondrowwidth +"px"}, 500); //drugi red
    pos1 = pos1 + 1;
    pos11 = pos11 + 1;  
    pos2 = pos2 + 1;
    pos22 = pos22 +1;
    picture1W = -$("#img"+ pos1).width(); //prvi red
    picture2W = -$("#im"+ pos2).width(); //drugi red 
    picture1Wback = -$("#img" + pos11).width(); //prvi red
    picture2Wback = -$("#im" + pos22).width(); //drugi red
    if (pos1 > 4) {
    pos1 = 0
    picture1W = -$("#img"+ pos1).width(); //prvi red
    }
    if (pos11 == 5) {
      pos11 = 0
      picture1Wback = -$("#img" + pos11).width(); //prvi red
    }
    if (pos2 > 3) {
      pos2 = 0
      picture2W = -$("#im"+ pos2).width(); //drugi red 
    }
    if (pos22 == 4) {
      pos22 = 0
      picture2Wback = -$("#im" + pos22).width();
    } 
  });
  $("#btnback").click(function(){
    $("div#wrap > div").animate({right: "-=" + picture1Wback + "px"}, 500); //prvi red
    $("#img" + pos11).animate({right: "-=" + firstrowwidth + "px"}, 500); //prvi red
    $("div#wrap2 > div").animate({right: "-=" + picture2Wback + "px"}, 500); //drugi red
    $("#im" + pos22).animate({right: "-=" + secondrowwidth + "px"}, 500); //drugi red
    pos1 = pos1 - 1;
    pos11 = pos11 - 1;
    pos2 = pos2 - 1;
    pos22 = pos22 - 1;
    picture1W = -$("#img" + pos1).width(); //prvi red
    picture1Wback = -$("#img" + pos11).width(); //prvi red
    picture2W = -$("#im" + pos2).width(); //drugi red
    picture2Wback = -$("#im" + pos22).width(); //drugi red
    if (pos1 == -1) {
      pos1 = 4
      picture1W = -$("#img" + pos1).width(); //prvi red
    }
    if (pos11 == -1) {
      pos11 = 4
      picture1Wback = -$("#img" + pos11).width(); //prvi red
    }
    if (pos2 == -1) {
      pos2 = 3
      picture2W = -$("#im" + pos2).width(); //drugi red
    }
    if (pos22 == -1) {
      pos22 = 3
      picture2Wback = -$("#im" + pos22).width(); //drugi red
    }
    console.log(pos2);
    console.log(pos22);
  });
/*  
  // Next slide
    $("#btnnext").click(function(){
      if (pos1===0) {
        pos1 = pos1 + 1;
        pos2 = pos2 + 1;
        $("#wrap").animate({marginRight: "+=" + picture1W + "px"}); //prvi red
        picture1Wback = picture1W; 
        picture1W = -$("#img"+ pos1).width(); //prvi red
        $("#arleft").attr("src","assets/arrow-blue-left.png");
        $("#btnback").css("border", "2px solid blue");
        $("#wrap2").animate({marginRight: "+=" + picture2W + "px"}); //drugi red
        picture2Wback = picture2W; 
        picture2W = -$("#im"+ pos2).width(); //drugi red
      }
      else if (pos1>0 && pos1<4) {
        $("#arleft").attr("src","assets/arrow-blue-left.png"); //prvi red
        $("#arright").attr("src","assets/arrow-blue-right.png");
        $("#btnnext").css("border", "2px solid blue");
        $("#btnback").css("border", "2px solid blue");
        $("#wrap").animate({marginRight: "+=" + picture1W + "px"});
        pos1= pos1 + 1;
        picture1Wback = picture1W;
        picture1W = -$("#img"+ pos1).width();
        if (pos2>0 && pos2<3) {
          $("#wrap2").animate({marginRight: "+=" + picture2W + "px"});
          pos2= pos2 + 1;
          picture2Wback = picture2W;
          picture2W = -$("#im"+ pos2).width();
        }
        if (pos1>=4){
          $("#arright").attr("src","assets/arrow-gray-right.png");
          $("#btnnext").css("border", "2px solid gray"); //prvi red
        }
      }
      else {
        $("#arright").attr("src","assets/arrow-gray-right.png");//prvi red
        $("#arleft").attr("src","assets/arrow-blue-left.png");
        $("#btnnext").css("border", "2px solid gray")
        pos1 = 4; //prvi red
        pos2 = 3; // drugi red
      }
    });
    // Previous slide
    $("#btnback").click(function(){
      if (pos1===0){
        pos1 = 0;
        pos2 = 0; 
        $("#arleft").attr("src","assets/arrow-gray-left.png");//prvi red
        $("#btnback").css("border", "2px solid gray");
      }
      else if (pos1>0 && pos1<4){
        $("#arleft").attr("src","assets/arrow-blue-left.png"); //prvi red
        $("#btnback").css("border", "2px solid blue");
        $("#wrap").animate({marginRight: "-=" + picture1Wback + "px"});
        pos1 = pos1 - 1;
        picture1W = -$("#img"+ pos1).width();
        picture1Wback = -$("#img"+ (pos1-1)).width();
        if (pos2>0 && pos2<3){
          $("#wrap2").animate({marginRight: "-=" + picture2Wback + "px"}); //drugi red
          pos2 = pos2 - 1; //drugi red
          picture2W = -$("#im"+ pos2).width();
          picture2Wback = -$("#im"+ (pos2-1)).width(); //drugi red
        }
        if (pos1===0){
          $("#arleft").attr("src","assets/arrow-gray-left.png");
          $("#btnback").css("border", "2px solid gray"); //prvi red
        }
      }
      else {
        $("#wrap").animate({marginRight: "-=" + picture1Wback + "px"}); //prvi red
        pos1 = pos1 - 1;
        picture1W = -$("#img"+ pos1).width();
        picture1Wback = -$("#img"+ (pos1-1)).width();
        $("#arright").attr("src","assets/arrow-blue-right.png");
        $("#btnnext").css("border", "2px solid blue");
        $("#wrap2").animate({marginRight: "-=" + picture2Wback + "px"}); //drugi red
        pos2 = pos2 - 1; //drugi red
        picture2W = -$("#im"+ pos2).width();
        picture2Wback = -$("#im"+ (pos2-1)).width(); //drugi red
      }
    });
*/
});