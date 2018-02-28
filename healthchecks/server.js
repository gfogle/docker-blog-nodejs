'use strict';

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    debug: 'true',
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
  }
});

function logHeartbeat() {
  knex
    .select('*')
    .from('pg_catalog.pg_tables')
    .asCallback(function(err, result) {
      console.log('Hi I`m still here in this callback!');
    });
}

// This schedules code to run on intervals
// to keep this process alive
setInterval(logHeartbeat, 3000);