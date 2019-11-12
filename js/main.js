$(function(){

  var pos1 = 0; // brojac pozicije u prvome redu
  var pos2 = 0; // brojac pozicije u drugome redu
  var picture1W = -$("#img"+ pos1).width(); // sirina diva koji treba biti pomaknut u prvome redu
  var picture1Wback = picture1W // sirina sakrivenoga diva koji treba biti pomaknut u lijevo u prvome redu
  var picture2W = -$("#im"+ pos2).width(); // sirina diva koji treba biti pomaknut u drugome redu
  var picture2Wback = picture2W // sirina sakrivenoga diva koji treba biti pomaknut u lijevo u drugome redu
  
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
});