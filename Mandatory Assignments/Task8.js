function turnOn() {
    let color = prompt("Enter bg color");
    if (color) {
      document.getElementById("bulb").style.backgroundColor = color.toLowerCase();
    }
  }
  
  function turnOff() {
    document.getElementById("bulb").style.backgroundColor = "white";
  }
  