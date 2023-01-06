const first = document.querySelector(".first");
const second = document.querySelector(".second");

const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb;";
  temp.style.color = "white";
  setTimeout(() => {
    temp.innerHTML = "&#xf2ca;";
  }, 1000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c9;";
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c8;";
    temp.style.color = "yellow";
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = "&#xf2c7;";
    temp.style.color = "red";
  }, 4000);
};
tempLoad();
setInterval(tempLoad, 5000);
