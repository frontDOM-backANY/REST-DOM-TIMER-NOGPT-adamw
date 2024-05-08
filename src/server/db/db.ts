const db = require('mongoose');

const URI = process.env.MONGO_URI;

async function main() {
  await db.connect(URI);
  console.log('DB connected.');
}

module.exports = main;