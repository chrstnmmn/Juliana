//always move scroll the page back to top when the page refresh
const targetY = document.getElementsByClassName("Flowers1");
window.onload = function () {
  window.scrollTo({ top: targetY, behavior: "smooth" });
};

//when the button is clicked, the website will check if it's invited or not
function checkName() {
  const name = document.getElementById("userName").value.trim();
  const outputName = document.getElementById("userNameText");
  const tableNumber = document.getElementById("seatNumberText");
  const userInput = document.getElementById("userName");
  //const result = document.getElementById("result");

  if (guestList[name]) {
    document.body.style.overflowY = "scroll";
    const targetY = document.getElementById("resultPart").offsetTop;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    userInput.value = "";
    outputName.innerHTML = name;
    tableNumber.innerHTML = guestList[name];
    return;
  } else {
    window.scrollTo({ top: targetY, behavior: "smooth" });
    userInput.placeholder = "Sorry, you are not invited.";
    setTimeout(() => {
      document.body.style.overflowY = "hidden";
    }, 300); // Redirect after 1 second(s)
  }
}

//lists of names that is invited
const guestList = {
  "Margaret Julianne Juan": 11,
  "Juliana Kim Borbe": 6,
  "Christian Emmanuel Collo": 23,
  "Jay - jay Dawal": 5,
  "Lemuel Clemente": 4,
  "Alex Poblete": 6,
  // Add more guests as needed
};
