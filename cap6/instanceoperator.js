
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};
	
    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

// object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class.
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    // The constructor calls its superclass’s constructor through the super keyword.
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);

    if (x != y) {
      super.set(y, x, value);
    }
  }
}

// It is occasionally useful to know whether an object was derived from a specific class. For this, JavaScript provides a binary operator called instanceof.
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);

console.log(new SymmetricMatrix(2) instanceof Matrix);

console.log(new Matrix(2, 2) instanceof SymmetricMatrix);

console.log([1] instanceof Array);