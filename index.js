'use strict';

const IFTTT = require('node-ifttt-maker')
const client = new IFTTT(process.env.API_KEY);

async function doStuff() {
  try {
      const response = await client.request({event: 'start_pomodoro'});
      console.log("Response:", response);
  } catch(e) {
      console.error("IFTTT throw an error", e);
  }
}

doStuff();

