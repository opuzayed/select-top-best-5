document.getElementById("btn-messi").addEventListener("click", function () {
  const text = [];
  const element = getElementValueById("text-messi");
  text.push(element);
});
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
/* document.getElementById('btn-alvarez').addEventListener('click', function(){
    const text = [];
    const element = getElementValueById('text-alvarez');
    text.push(element);
});
document.getElementById('btn-maria').addEventListener('click', function(){
    const text = [];
    const element = getElementValueById('text-maria');
    text.push(element);
});
document.getElementById('btn-locelso').addEventListener('click', function(){
    const text = [];
    const element = getElementValueById('text-locelso');
    text.push(element);
});
document.getElementById('btn-romero').addEventListener('click', function(){
    const text = [];
    const element = getElementValueById('text-romero');
    text.push(element);
});
document.getElementById('btn-otamendi').addEventListener('click', function(){
    const text = [];
    const element = getElementValueById('text-otamendi');
    text.push(element);
    console.log(text[5]);
}); */
