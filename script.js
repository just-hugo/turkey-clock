function getNextThanksgiving() {
  const today = new Date();
  const year = today.getFullYear();
  const thanksgiving = new Date(year, 10, 1);
  thanksgiving.setDate(22 + ((11 - thanksgiving.getDay()) % 7));

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
      clearInterval(timerInterval); 
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingTimeInDay = timeDifference % (1000 * 60 * 60 * 24);
    const hours = Math.floor(remainingTimeInDay / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTimeInDay % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTimeInDay % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown-timer"
    ).textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

    // Decimal countdown
    const totalDays = days + remainingTimeInDay / (1000 * 60 * 60 * 24);
    const decimalDays = (Math.floor(totalDays * 100) / 100).toFixed(2); 
    document.getElementById(
      "decimal-days"
    ).textContent = `${decimalDays} days until`;
  }

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

document.addEventListener("DOMContentLoaded", () => {
  displayThanksgivingDate();
  startCountdown();
});
