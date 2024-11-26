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
    weekday: "short",
    month: "short",
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
      document.getElementById("decimal-days").textContent = "";
      clearInterval(timerInterval); // Stop the countdown
      return;
    }

    // Standard countdown
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingTimeInDay = timeDifference % (1000 * 60 * 60 * 24); // Time left after full days
    const hours = Math.floor(remainingTimeInDay / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTimeInDay % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTimeInDay % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown-timer"
    ).textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

    // Decimal countdown
    const totalDays = days + remainingTimeInDay / (1000 * 60 * 60 * 24); // Convert timeDifference to days
    const decimalDays = (Math.floor(totalDays * 100) / 100).toFixed(2); // Round to hundredths
    document.getElementById(
      "decimal-days"
    ).textContent = `${decimalDays} days until`;
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
