function updateDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDateTime = now.toLocaleString("en-US", options);
  document.getElementById("datetime").textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
// Initialize with the current date and time
updateDateTime();
