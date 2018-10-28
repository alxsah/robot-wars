
const expect = require('chai').expect;
const Arena = require('../Arena');
const Robot = require('../Robot');

describe('Arena::Class', () => {
  describe('initialiseRobots::Method', () => {
    it('should create the correct number of robot objects', () => {
      const dataArray = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM', '4 4 S', 'MMRMMRMRRM'];
      const arena = new Arena(10, 10, dataArray);
      arena.initialiseRobots(dataArray);
      expect(arena.robots.length).to.be.equal(3);
    });
    it('should initialise robots with the correct bounds', () => {
      const dataArray = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
      const arena = new Arena(5, 5, dataArray);
      arena.initialiseRobots(dataArray);
      expect(arena.robots[0].xBound).to.be.equal(5);
      expect(arena.robots[0].yBound).to.be.equal(5);
      expect(arena.robots[1].xBound).to.be.equal(5);
      expect(arena.robots[1].yBound).to.be.equal(5);
    });
    it('should initialise robots with the correct positions', () => {
      const dataArray = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
      const arena = new Arena(5, 5, dataArray);
      arena.initialiseRobots(dataArray);
      expect(arena.robots[0].xPos).to.be.equal(1);
      expect(arena.robots[0].yPos).to.be.equal(2);
      expect(arena.robots[1].xPos).to.be.equal(3);
      expect(arena.robots[1].yPos).to.be.equal(3);
    });
  });
});