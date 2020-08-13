$(document).ready(function () {
  $("#triangle").submit(function (event) {
    $('#equalTriangle, #isoTriangle, #scaleTriangle, #noTriangle, #noData').hide();
    const sideA = parseInt($("#sideA").val());
    const sideB = parseInt($("#sideB").val());
    const sideC = parseInt($("#sideC").val());
    event.preventDefault();

    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
      $("#noTriangle").show();
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $("#isoTriangle").show();
    } else if ((sideA !== sideB) && (sideA !== sideC) && (sideB !== sideC)) {
      $("#scaleTriangle").show();
    } else if (sideA === sideB && sideA === sideC) {
      $("#equalTriangle").show();
    }
    
    else {
      $("#noData").show();
    }
  });
});
