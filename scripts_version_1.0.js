window.onload = function () {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  document.getElementById("currentDate").textContent =
    curr_date + "-" + curr_month + "-" + curr_year;
};

/*
When a details element is closed this function will create a new details 
element with the same content and replace it.
*/

function detailsToggled(e) {
  if (e.srcElement.open) return;
  const copy = document.createElement("details");
  copy.innerHTML = e.srcElement.innerHTML;
  copy.addEventListener("toggle", detailsToggled);
  e.srcElement.parentNode.replaceChild(copy, e.srcElement);
}
// Add the event listener to all details elements on the page
document.querySelectorAll("details").forEach((d) => {
  d.addEventListener("toggle", detailsToggled);
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function yourFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode-3");
}

const buttonToggle = document.querySelector(".toggle");
buttonToggle.addEventListener("click", toggleClass);

function toggleClass(){
  const element = document.querySelector('.dark-mode-2');
  element.classList.toggle('dark-mode-3');
}
