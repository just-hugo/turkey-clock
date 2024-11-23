function getNextThanksgiving() {
  const today = new Date();
  const year = today.getFullYear();
  const thanksgiving = new Date(year, 10, 1); // Start with November 1st
  thanksgiving.setDate(22 + ((11 - thanksgiving.getDay()) % 7)); // Find the 4th Thursday

  if (thanksgiving < today) {
    thanksgiving.setFullYear(year + 1);
    thanksgiving.setDate(22 + ((11 - thanksgiving.getDay()) % 7));
  }

  return thanksgiving;
}

function displayThanksgivingDate() {
  const thanksgiving = getNextThanksgiving();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  document.getElementById("thanksgiving-date").textContent =
    thanksgiving.toLocaleDateString(undefined, options);
}

// Run the script on page load
document.addEventListener("DOMContentLoaded", displayThanksgivingDate);

function getNextThanksgiving() {
  const today = new Date();
  const year = today.getFullYear();
  const thanksgiving = new Date(year, 10, 1); // Start with November 1st
  thanksgiving.setDate(22 + ((11 - thanksgiving.getDay()) % 7)); // Find the 4th Thursday

  if (thanksgiving < today) {
    thanksgiving.setFullYear(year + 1);
    thanksgiving.setDate(22 + ((11 - thanksgiving.getDay()) % 7));
  }

  return thanksgiving;
}

function displayThanksgivingDate() {
  const thanksgiving = getNextThanksgiving();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  document.getElementById("thanksgiving-date").textContent =
    thanksgiving.toLocaleDateString(undefined, options);
}

function startCountdown() {
  const thanksgiving = getNextThanksgiving();

  function updateCountdown() {
    const now = new Date();
    const timeDifference = thanksgiving - now;

    if (timeDifference <= 0) {
      document.getElementById("countdown-timer").textContent =
        "Happy Thanksgiving!";
      clearInterval(timerInterval); // Stop the countdown
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    document.getElementById(
      "countdown-timer"
    ).textContent = `${days} days & ${hours} hours`;
  }

  // Update the countdown every second
  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Run once immediately
}

// Run the scripts on page load
document.addEventListener("DOMContentLoaded", () => {
  displayThanksgivingDate();
  startCountdown();
});
