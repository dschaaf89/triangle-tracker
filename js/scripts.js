$(document).ready(function() {
  $("#triangle").submit(function(event) {
    const sideA = parseInt($("#sideA").val());
    const sideB = parseInt($("#sideB").val());
    const sideC = parseInt($("#sideC").val());
    event.preventDefault();
    
    if (sideA == sideB == sideC) {
      $("#equalTriangle").show();
    } 
    else if ( sideA == sideB && sideA !=sideC || sideB==sideC && sideB != sideA){ 
      $("#isoTriangle").show();
    } 
    else if (sideA != sideB !=sideC ) { 
      $("#scaleTriangle").show();
    } 
    else {
      $("#noTriangle").show();
    }
  }); 
}); 

