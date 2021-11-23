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


document.getElementById('submit').addEventListener('click', function () {
  var username = $("#mce-NAME").val();
  var email = $("#mce-EMAIL").val();
  var message = $("#message").val();
  if ($("#mce-NAME").val() && $("#mce-EMAIL").val() && $("#message").val()) {
      alert("Hi " + username + ", we have received your message. Thank you for reaching out to us.");
  } else {
      alert("Please fill all fields!");
  }
});