$(function(){
  // range
  $('button.submit').on('click', function(){
    var label = $(this).data("label");
    var val = $("."+label).val() * 0.01;
    console.log(label+"-"+val);
    ws.send(label+"-"+val);
  });

  $('button.imgbtn').on('click', function(){
    var label = "key";
    var val = $(this).data("value");
    console.log(label+"-"+val);
    ws.send(label+"-"+val);
  });
});

function send() {
    ws.send(document.getElementById('msg').value);
}

var host = window.document.location.host.replace(/:.*/, '');
var ws = new WebSocket('ws://' + host + ':3000');
ws.onmessage = function (event) {
    document.getElementById("messages").innerHTML += "<div>" + JSON.parse(event.data) + "</div>";
    console.log(JSON.parse(event.data));
};
