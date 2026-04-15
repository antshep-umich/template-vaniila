const discoButton = document.querySelector('#disco-button');
discoButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

//todo define getRandomColor that selects a random color from a predefined list of colors.
function getRandomColor() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF6'];
  return colors[Math.floor(Math.random() * colors.length)];
}