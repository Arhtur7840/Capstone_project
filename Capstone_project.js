const searchInput = document.getElementById('insert');
const items = document.querySelectorAll('.item');
let timeSpent = document.getElementById('timeSpent');
let seconds = 0;
let minutes = 0;
let hours = 0;
let searchHistory = [];
let today = new Date().getDay();
let daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWD = daysofweek[today];

document.cookie = 'iubds';

// This is what upadates the searched items everytime you type something in
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    items.forEach(item => { 
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'block';
      }
      else {
        item.style.display = 'none';
      }
    });
});
// This is what saves your search when you press Enter
addEventListener('keydown', function(e) {
  if(e.key === "Enter") {
    const searchTerm = searchInput.value.toLowerCase();
    saveSearchTerm(searchTerm);
  }
});

// This will save what you put into the search bar in the local storage
function saveSearchTerm(searchTerm) {
  searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  if(searchHistory.length >= 10) {
    searchHistory.shift();
  };

  searchHistory.push(searchTerm);
  console.log(searchHistory);

  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  document.getElementById("searchHistory").innerHTML = `
    <div>
      <p>
        ${searchHistory}
      </p>
    </div>
  `;

  document.cookie = `name=${searchHistory.length -1 };Expires=${currentWD + 7} ${new Date().getDay} ${new Date().getMonth() + 1} ${new Date().getFullYear()} 12:00:00 UTC`;
};

// This will repeat every second and display the time the user spent in the web app
setInterval(() => {
    timeSpent.innerHTML = `
        Your time spent is : 0${hours}:0${minutes}:0${seconds}
    `;

    seconds += 1;
    if(seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    if(minutes >= 60) {
        minutes = 0;
        hours += 1;
    }

    if(seconds >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : 0${hours}:0${minutes}:${seconds}
      `;
    }
    if(minutes >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : 0${hours}:${minutes}:0${seconds}
      `;
    }
    if(hours >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : ${hours}:0${minutes}:0${seconds}
      `;
    }
    if(minutes >= 10 && seconds >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : 0${hours}:${minutes}:${seconds}
      `;
    }
    if(minutes >= 10 && hours >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : ${hours}:${minutes}:0${seconds}
      `;
    }
    if(minutes >= 10 && hours >= 10 && seconds >= 10) {
      timeSpent.innerHTML = `
          Your time spent is : ${hours}:${minutes}:${seconds}
      `;
    }
}, 1000);
