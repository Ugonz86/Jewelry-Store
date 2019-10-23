$(function() {
  $("form#info").submit(function(event){
    event.preventDefault();
    $("#name").text($("#firstName").val() + " " + $("#lastName").val());
    $(".product").text($("#product").val().toLowerCase());
    $("#addressInput").text($("#address").val());
    $("#zip").text($("#zipCode").val());
    $("h1").hide();
    $("#info").hide();
    $("#receipt").show()
  })
})
