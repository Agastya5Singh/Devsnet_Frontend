function add(){
    var z=parseInt(document.getElementById("a").value);
    var y=parseInt(document.getElementById("b").value);
    var x = y + z;
  document.getElementById("result").innerHTML = x;
  }
  function sub(){
    var y=parseInt(document.getElementById("a").value);
    var z=parseInt(document.getElementById("b").value);
   var x = y-z;
  document.getElementById("result").innerHTML = x;
  }
  function div(){
    var xx=parseInt(document.getElementById("a").value);
    var yy=parseInt(document.getElementById("b").value);
    var x = xx/yy;
  document.getElementById("result").innerHTML = x;
  }
  function mul(){
    var xx=parseInt(document.getElementById("a").value);
    var yy=parseInt(document.getElementById("b").value);
    var x = yy*xx;
  document.getElementById("result").innerHTML = x;
  }