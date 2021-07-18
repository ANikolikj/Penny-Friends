// const logo = document.querySelectorAll("#logo path");


// for (let i = 0; i<logo.length; i++){
//     console.log("Letter ${i} is ${logo[i].getTotalLength()}");
// }

function toggleText() {
    var text = document.getElementById("bubble1");
    if (text.style.opacity === "0") {
      text.style.opacity = "1";
    } else {
      text.style.opacity = "0";
    }
  }