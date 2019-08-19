
class CuboidMakerclass {
  constructor(detail) {
    this.length = detail.length,
    this.width = detail.width,
    this.height = detail.height
  }
  surfaceArea = () => {
    let CuboidSurfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return CuboidSurfaceArea;
  }
  volume = () => {
    let volumeEquals = this.length * this.width * this.height;
    return volumeEquals;
  }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(CuboidObject.volume()); // 100
console.log(CuboidObject.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerclass {
  constructor(detail) {
    super(detail);
  }
  volume = () => {
    let volumeEquals = this.length * this.width * this.height;
    return volumeEquals;
  }
  surfaceArea = () => {
    let CuboidSurfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return CuboidSurfaceArea;
  }
}

const CubeObject = new CubeMaker ({
  length: 8,
  width: 10,
  height: 10,
});

console.log(CubeObject.volume());
console.log(CubeObject.surfaceArea());