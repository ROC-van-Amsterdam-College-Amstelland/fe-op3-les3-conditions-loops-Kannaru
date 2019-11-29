//javascript code
function myFuntion(){
    var text = "";
    var i;
    for (i = 0; i < 6; i++) {
      text += "Nummer " + i + "<br>";
      document.getElementById("test").innerHTML = text;
    }
    document.getElementById("test").innerHTML = text;
    }