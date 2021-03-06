const expect = require('chai').expect;
const Robot = require('../Robot');

describe('Robot::Class', () => {
  describe('moveForward::Method', () => {
    it('should increment Y coordinate for directionIndex 0 (N)', () => {
      const robot = new Robot(0, 0, 5, 5, 'N');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(0);
      expect(robot.yPos).to.be.equal(1);
    });
    it('should increment X coordinate for directionIndex 1 (E)', () => {
      const robot = new Robot(0, 0, 5, 5, 'E');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(1);
      expect(robot.yPos).to.be.equal(0);
    });
    it('should decrement Y coordinate for directionIndex 2 (S)', () => {
      const robot = new Robot(1, 1, 5, 5, 'S');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(1);
      expect(robot.yPos).to.be.equal(0);
    });
    it('should decrement X coordinate for directionIndex 3 (W)', () => {
      const robot = new Robot(1, 1, 5, 5, 'W');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(0);
      expect(robot.yPos).to.be.equal(1);
    });
    it('should not allow a robot to go below x0', () => {
      const robot = new Robot(0, 0, 5, 5, 'W');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(0);
    });
    it('should not allow a robot to go below y0', () => {
      const robot = new Robot(0, 0, 5, 5, 'S');
      robot.moveForward();
      expect(robot.yPos).to.be.equal(0);
    });
    it('should not allow a robot to go above xBound', () => {
      const robot = new Robot(5, 0, 5, 5, 'E');
      robot.moveForward();
      expect(robot.xPos).to.be.equal(5);
    });
    it('should not allow a robot to go above yBound', () => {
      const robot = new Robot(0, 5, 5, 5, 'N');
      robot.moveForward();
      expect(robot.yPos).to.be.equal(5);
    });
  });
  describe('moveLeft::Method', () => {
    it('should set directionIndex to 3 (W) from 0 (N)', () => {
      const robot = new Robot(0, 5, 5, 5, 'N');
      robot.moveLeft();
      expect(robot.directionIndex).to.be.equal(3);
    });
    it('should set directionIndex to 2 (S) from 3 (W)', () => {
      const robot = new Robot(0, 5, 5, 5, 'W');
      robot.moveLeft();
      expect(robot.directionIndex).to.be.equal(2);
    });
    it('should set directionIndex to 1 (E) from 2 (S)', () => {
      const robot = new Robot(0, 5, 5, 5, 'S');
      robot.moveLeft();
      expect(robot.directionIndex).to.be.equal(1);
    });
    it('should set directionIndex to 0 (N) from 1 (E)', () => {
      const robot = new Robot(0, 5, 5, 5, 'E');
      robot.moveLeft();
      expect(robot.directionIndex).to.be.equal(0);
    });
  });
  describe('moveRight::Method', () => {
    it('should set directionIndex to 1 (E) from 0 (N)', () => {
      const robot = new Robot(0, 5, 5, 5, 'N');
      robot.moveRight();
      expect(robot.directionIndex).to.be.equal(1);
    });
    it('should set directionIndex to 2 (S) from 1 (E)', () => {
      const robot = new Robot(0, 5, 5, 5, 'E');
      robot.moveRight();
      expect(robot.directionIndex).to.be.equal(2);
    });
    it('should set directionIndex to 3 (W) from 2 (S)', () => {
      const robot = new Robot(0, 5, 5, 5, 'S');
      robot.moveRight();
      expect(robot.directionIndex).to.be.equal(3);
    });
    it('should set directionIndex to 0 (N) from 3 (W)', () => {
      const robot = new Robot(0, 5, 5, 5, 'W');
      robot.moveRight();
      expect(robot.directionIndex).to.be.equal(0);
    });
  });
  describe('applyInstructions::Method', () => {
    it('should move a robot forward for instruction M', () => {
      const robot = new Robot(0, 0, 5, 5, 'N');
      robot.applyInstructions('M');
      expect(robot.yPos).to.be.equal(1);
    });
    it('should move a robot left for instruction L', () => {
      const robot = new Robot(0, 0, 5, 5, 'N');
      robot.applyInstructions('L');
      expect(robot.getDirection()).to.be.equal('W');
    });
    it('should move a robot right for instruction R', () => {
      const robot = new Robot(0, 0, 5, 5, 'N');
      robot.applyInstructions('R');
      expect(robot.getDirection()).to.be.equal('E');
    });
  });
  describe('getDirection::Method', () => {
    it('should return N for directionIndex 0', () => {
      const robot = new Robot(0, 0, 5, 5, 'N');
      expect(robot.directionIndex).to.be.equal(0);
      expect(robot.getDirection()).to.be.equal('N');
    });
    it('should return E for directionIndex 1', () => {
      const robot = new Robot(0, 0, 5, 5, 'E');
      expect(robot.directionIndex).to.be.equal(1);
      expect(robot.getDirection()).to.be.equal('E');
    });
    it('should return S for directionIndex 2', () => {
      const robot = new Robot(0, 0, 5, 5, 'S');
      expect(robot.directionIndex).to.be.equal(2);
      expect(robot.getDirection()).to.be.equal('S');
    });
    it('should return W for directionIndex 3', () => {
      const robot = new Robot(0, 0, 5, 5, 'W');
      expect(robot.directionIndex).to.be.equal(3);
      expect(robot.getDirection()).to.be.equal('W');
    });
  });
});