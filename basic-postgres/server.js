'use strict';

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    debug: 'true',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '',
    database: 'docker-blog'
  }
});

function logHeartbeat() {
  knex
    .select('*')
    .from('doesnt-exist')
    .asCallback(function(err, result) {
      console.log('Hi I`m still here in this callback!');
    });
}

// This schedules code to run on intervals
// to keep this process alive
setInterval(logHeartbeat, 3000);