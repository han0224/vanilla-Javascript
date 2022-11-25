const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const secondHand = document.querySelector(".second-hand");

const setHand = setInterval(() => {
  const { hour, minutes, seconds } = getTime();
  hourHand.style.transform = `translate(-50%, 0) rotate(${hour * 30}deg)`;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `translate(-50%, 0) rotate(${seconds * 6}deg)`;
}, 1000);

const getTime = () => {
  const date = new Date();
  const hour = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hour, minutes, seconds };
};
