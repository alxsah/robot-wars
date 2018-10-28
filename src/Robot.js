class Robot {
  constructor(xPos, yPos, xBound, yBound, direction) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.xBound = xBound;
    this.yBound = yBound;
    this.directionIndex = Robot.compassPoints.indexOf(direction);
  }
  moveForward() {
    switch(this.directionIndex) {
      case 0:
        this.yPos < this.yBound ? this.yPos++ : null;
        break;
      case 1:
        this.xPos < this.xBound ? this.xPos++ : null;
        break;
      case 2:
        this.yPos > 0 ? this.yPos-- : null;
        break;
      case 3: 
        this.xPos > 0 ? this.xPos-- : null;
        break;
    }
  }
  applyInstructions(instructions) {
    for (const i of instructions) {
      if (i === 'M') {
        this.moveForward();
      } else if (i === 'L') {
        this.directionIndex = this.directionIndex === 0
          ? Robot.compassPoints.length - 1
          : this.directionIndex - 1 % 4;
      } else if (i === 'R') {
        this.directionIndex = (this.directionIndex + 1) % 4;
      }
    }
  }
  getDirection() {
    return Robot.compassPoints[this.directionIndex];
  }
}

Robot.compassPoints = ['N', 'E', 'S', 'W'];

module.exports = Robot;