(() => {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const endMessageEl = document.getElementById("end-message");
  const countdownSection = document.querySelector(".countdown");

  // Set target date/time (Year-Month-Day Hour:Minute:Second)
  const targetDate = new Date("2025-10-30T06:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      // Countdown ended
      countdownSection.style.display = "none";
      endMessageEl.classList.remove("hidden");
      clearInterval(intervalId);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  // Update immediately so no blank on load
  updateCountdown();

  // Update every second
  const intervalId = setInterval(updateCountdown, 1000);
})();
