var url = "http://159.65.58.116/heis-web/";

var updateView = function() {
  $.ajax({
    type: "POST",
    url: url
  }).done(function (result) {
    var modelData = JSON.parse(result);
    updateDOM(parseInt(modelData["current_floor"]), parseInt(modelData["last_floor"]), parseInt(modelData["door_open"]));
  });
};

function updateDOM(currentFloor, lastFloor, doorOpen) {
  $(".last-floor-number h6").text(lastFloor + 1);
  if(doorOpen) {
    $(".doors").each(function(i){
      if(i === currentFloor) {
        console.log(i);
        $(this).addClass("open");
      } else {
        $(this).removeClass("open");
      }
    });

  } else {

  }
}

window.setInterval(updateView, 100);
