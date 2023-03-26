function updateTime() {
    const newYorkTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    document.getElementById("new-york-time").textContent = newYorkTime;
  
    const londonTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
    document.getElementById("london-time").textContent = londonTime;
  
    const tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    document.getElementById("tokyo-time").textContent = tokyoTime;
  }
  
  setInterval(updateTime, 1000);
  