const Robot = require('./Robot');

class Arena {
  constructor(xBound, yBound, instructions) {
    this.robots = [];
    this.xBound = xBound;
    this.yBound = yBound;
    this.instructions = instructions;
  }
  initialiseRobots() {
    for (let i=0; i<this.instructions.length; i+=2) {
      const robotPosition = this.instructions[i].split(' ');
      const [xPos, yPos] = [parseInt(robotPosition[0]), parseInt(robotPosition[1])];
      const direction = robotPosition[2];
      const robot = new Robot(xPos, yPos, this.xBound, this.yBound, direction);
      this.robots.push(robot);
    }
  }
  applyRobotInstructions() {
    let output = '';
    for (let i=0; i<this.robots.length; i++) {
      const dataIndex = 2*i + 1;
      this.robots[i].applyInstructions(this.instructions[dataIndex]);
      const currentOutput = `${this.robots[i].xPos} ${this.robots[i].yPos} ${this.robots[i].getDirection()}`;
      console.log(currentOutput);
      output += (i === this.robots.length -1) ? currentOutput : `${currentOutput}\n`;
    }
    return output;
  }
}

module.exports = Arena;