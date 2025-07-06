  var start = new Date().getTime();
    //   Function for mave and color change
      function move() {
        var left;
        var right;
        var top;
        var wh;
        var r;
        var g;
        var b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        left = Math.random() * 300;
        top = Math.random() * 300;
        wh = Math.random() * 400 + 100;
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.width = wh + "px";
        document.getElementById("shape").style.height = wh + "px";
        document.getElementById("shape").style.display = "block";
        document.getElementById("shape").style.background =
          "rgb(" + r + "," + g + ", " + b + ")";
        start = new Date().getTime();
      }

    //   function end
      move();
      document.getElementById("shape").onclick = function () {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        var timetaken = (end - start) / 1000;
        alert(timetaken);
        move();
      };