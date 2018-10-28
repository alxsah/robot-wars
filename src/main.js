const fs = require('fs');
const path = require('path');
const Arena = require('./Arena');
const Robot = require('./Robot');
const robots = [];

if (process.argv.length < 3) {
  console.log(`Usage: node ${process.argv[1]} <FILENAME>`);
  process.exit(1);
}

const filename = process.argv[2];
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  const dataArray = data.toString().split('\n');
  const arenaBounds = dataArray[0].split(' ');

  const arena = new Arena(arenaBounds[0], arenaBounds[1], dataArray.slice(1));
  arena.initialiseRobots();
  const output = arena.applyRobotInstructions();

  const outputPath = path.join(__dirname, '..', 'output', path.basename(filename));
  fs.writeFile(outputPath, output, (err) => {
    if (err) throw err;
  });
});
