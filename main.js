var url = "http://159.65.58.116/heis-web/";

$.ajax({
  xhrFields: {
    withCredentials: true
  },
  type: "POST",
  crossDomain: true,
  url: url
}).done(function( msg ) {
  console.log(msg);
});