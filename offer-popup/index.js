let close_button = document.querySelector(".close_button");
let minute_value = document.querySelector(".minute");
let second_value = document.querySelector(".second");
let main_box = document.querySelector(".main_box");
let box = document.querySelector(".box");
let interval = "";
// seconds.
let s = 60;
// minutes.
let m = 5;
function offer_end_timer() {
  let interval = setInterval(() => {
    console.log("second");
    s--;
    second_value.innerHTML = s;
    if (s == 0) {
      m--;
      minute_value.innerHTML = m;
      s = 60;
    }
    if (m == 0) {
      clearInterval(interval);
    }
  }, 1000);
}
// Popup
window.onload = function () {
  setTimeout(() => {
    main_box.classList.add("main_box_active");
    box.classList.add("active");
    offer_end_timer();
  }, 2000);
};
close_button.onclick = function () {
  main_box.classList.remove("main_box_active");
  box.classList.remove("active");
  clearInterval(interval);
};
