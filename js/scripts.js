$(document).ready(function() {
  $(".design").click(function() {
    $(".design1").toggle("slow");
  });
  $(".development").click(function() {
    $(".design2").toggle("slow");
  });
  $(".management").click(function() {
    $(".design3").toggle("slow");
  });
  $(".what").css("text-align", "center");
});


$(document).ready(function() {
  $(".container1").hover(function() {
      $("#port").css("background-color", "lightblue");
      $("#port2").css("background-color", "lightblue");
  
    }, function() {
      $("#port").css("background-color", "white");
      $("#port2").css("background-color", "white"); 
  });

});


function validateForm() {
  let Name = document.forms["myForm"]["fname"].value;
  if (Name == "") {
    alert("Name must be filled out");
    return false;
  }
}