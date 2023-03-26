function showTime() {
    const timezone = document.getElementById("timezone").value;
    const date = new Date().toLocaleString("en-US", {timeZone: timezone});
    const time = new Date(date);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("clock").innerText = formattedTime;
}

showTime();
