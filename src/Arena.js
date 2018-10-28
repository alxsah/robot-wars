const Robot = require('./Robot');

class Arena {
  constructor(xBound, yBound, dataArray) {
    this.robots = [];
    this.xBound = xBound;
    this.yBound = yBound;
    this.dataArray = dataArray;
  }
  initialiseRobots() {
    for (let i=0; i<this.dataArray.length; i+=2) {
      const robotPosition = this.dataArray[i].split(' ');
      const xPos = parseInt(robotPosition[0]);
      const yPos = parseInt(robotPosition[1]);
      const direction = robotPosition[2];
      const robot = new Robot(xPos, yPos, this.xBound, this.yBound, direction);
      this.robots.push(robot);
    }
  }
  applyRobotInstructions() {
    let output = '';
    for (let i=0; i<this.robots.length; i++) {
      this.robots[i].applyInstructions(this.dataArray[2*i + 1]);
      const currentOutput = `${this.robots[i].xPos} ${this.robots[i].yPos} ${this.robots[i].getDirection()}`;
      console.log(currentOutput);
      output += (i === this.robots.length -1) ? currentOutput : `${currentOutput}\n`;
    }
    return output;
  }
}

module.exports = Arena;