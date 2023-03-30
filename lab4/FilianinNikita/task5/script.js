const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

let chosenDate = date;
let dateText = document.getElementsByClassName("wrapper")[1];
dateText.textContent = chosenDate.toDateString();

// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const changeDate = (e) => {
  if (e.target.className === "") {
    const active = document.querySelector("li.active");
    if (active !== null) active.className = "";

    chosenDate = new Date(currYear, currMonth, e.target.textContent);
    e.target.className = "active";
  } else if (e.target.className === "active") {
    chosenDate = null;
    e.target.className = "";
  }

  dateText.textContent = chosenDate === null ? "No Chosen Date" : chosenDate.toDateString();
  renderCalendar();
};

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTags = [];

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    let li = document.createElement("li");
    li.className = "inactive";
    li.innerText = lastDateofLastMonth - i + 1;
    liTags.push(li);
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    let li = document.createElement("li");

    if (chosenDate !== null) {
      let isChosenDate =
        i === chosenDate.getDate() &&
        currMonth === chosenDate.getMonth() &&
        currYear === chosenDate.getFullYear()
          ? "active"
          : "";
      li.className = isChosenDate;
    }

    li.innerText = i;
    liTags.push(li);
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    let li = document.createElement("li");
    li.className = "inactive";
    li.innerText = i - lastDayofMonth + 1;
    liTags.push(li);
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = "";
  liTags.forEach((x) => (daysTag.innerHTML += x.outerHTML));
};
renderCalendar();
daysTag.addEventListener("click", changeDate);

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
