function showTime(timezone) {
    var date = new Date();
    var options = {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    var timeString = date.toLocaleString('en-US', options);
    document.getElementById('time').innerHTML = 'The time in ' + timezone + ' is ' + timeString;
  }
  