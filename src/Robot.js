const utils = require('./utils');

class Robot {
  constructor(xPos, yPos, xBound, yBound, direction) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.xBound = xBound;
    this.yBound = yBound;
    this.directionIndex = Robot.compassPoints.indexOf(direction);
  }
  moveForward() {
    const incrementPosition = utils.switchcaseF({
      0: () => { if (this.yPos < this.yBound) this.yPos++; },
      1: () => { if (this.xPos < this.xBound) this.xPos++; },
      2: () => { if (this.yPos > 0) this.yPos--; },
      3: () => { if (this.xPos > 0) this.xPos--; }
    })(null);
    incrementPosition(this.directionIndex);
  }
  moveRight() {
    this.directionIndex = (this.directionIndex + 1) % 4;
  }
  moveLeft() {
    this.directionIndex = this.directionIndex === 0
      ? Robot.compassPoints.length - 1
      : this.directionIndex - 1;
  }
  applyInstructions(instructions) {
    const handleInstruction = utils.switchcaseF({
      'M': () => { this.moveForward() },
      'L': () => { this.moveLeft() },
      'R': () => { this.moveRight() }
    })(null);

    for (const i of instructions) {
      handleInstruction(i);
    }
  }
  getDirection() {
    return Robot.compassPoints[this.directionIndex];
  }
}

Robot.compassPoints = ['N', 'E', 'S', 'W'];

module.exports = Robot;