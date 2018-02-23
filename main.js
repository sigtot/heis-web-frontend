var url = "http://159.65.58.116/heis-web/webEndpoint.php";
var orderArray = [0,0,0,0]; // 0 is 1st floor

var updateView = function() {
  $.ajax({
    type: "POST",
    url: url,
    data: {"orders": orderArray}
  }).done(function(result) {
    var modelData = JSON.parse(result);
    updateDOM(parseInt(modelData["current_floor"]), parseInt(modelData["last_floor"]), parseInt(modelData["door_open"]));
  });
};

function deleteOrder(floor) {
  orderArray[floor] = 0;
}

$(".doors").click(function(i){
  var floor = 3 - $(".doors").index($(this));
  orderArray[floor] = 1;
  var element = $(this);
  element.addClass("pressed");
  window.setTimeout(function(){
    element.removeClass("pressed");
    orderArray[floor] = 0;
  }, 1000);
});

function updateDOM(currentFloor, lastFloor, doorOpen) {
  $(".last-floor-number h6").text(lastFloor + 1);
  $(".doors").each(function(i){
    if(i === 3 - currentFloor && doorOpen) {
      $(this).addClass("open");
    } else {
      $(this).removeClass("open");
    }
  });
}

window.setInterval(updateView, 100);
