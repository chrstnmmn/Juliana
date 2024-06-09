const guestList = {
  Margaret: 1,
  Juliana: 2,
  Emman: 3,
  Raica: 4,
  // Add more guests as needed
};

function checkName() {
  const name = document.getElementById("userName").value.trim();
  //const result = document.getElementById("result");

  if (guestList[name]) {
    document.body.style.overflowY = "scroll";
    alert("Horay you are invited!");
  } else {
    document.body.style.overflow = "hidden";
    alert("You are not invited");
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"; // Change to the actual URL you want to redirect to
    }, 200); // Redirect after .2 seconds
  }
}
