const discoButton = document.querySelector('#disco-button');
discoButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF6'];
  
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];