'use strict';

function logHeartbeat() {
  console.log('Hey y\'all I`m still here!');
}

// This schedules code to run on intervals
// to keep this process alive
setInterval(logHeartbeat, 3000);