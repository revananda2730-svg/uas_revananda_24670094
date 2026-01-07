function greetingTime() {
  const hour = new Date().getHours();
  let greeting;

  if (hour >= 5 && hour <= 11) {
    greeting = "Selamat Pagi, Selamat Datang!";
  } else if (hour >= 12 && hour <= 14) {
    greeting = "Selamat Siang, Selamat Datang!";
  } else if (hour >= 15 && hour <= 17) {
    greeting = "Selamat Sore, Selamat Datang!";
  } else {
    greeting = "Selamat Malam, Selamat Datang!";
  }

  document.getElementById("greeting").innerText = greeting;
}