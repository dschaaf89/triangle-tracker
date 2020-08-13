$(document).ready(function() {
  $("#triangle").submit(function(event) {
    const userAge = parseInt($("#sideA").val());
    const userAge = parseInt($("#sideB").val());
    const userAge = parseInt($("#sideC").val());
    event.preventDefault();
    console.log(userAge);
}); 


