const player = [];
document.querySelectorAll(".select-player").forEach(selectPlayer);
function selectPlayer(item) {
  item.addEventListener("click", function () {
    const playerName = this.parentNode.querySelector("h5").innerText;
    if (player.length < 5) {
      player.push(playerName);
      //   document.getElementById("selectedPlayers").innerText = player;

      let item = document.createElement("li");
      item.innerText = playerName;
      document.getElementById("selectedPlayers").appendChild(item);

      this.classList.add("disable");
    } else {
      alert("Cannot Select More Than 5");
    }

    console.log(player);
  });
}

