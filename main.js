var url = "159.65.58.116";

$.ajax({
  type: "POST",
  url: url
}).done(function( msg ) {
  console.log(msg);
});