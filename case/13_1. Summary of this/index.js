class Father {
  constructor () {
    this.eat = this.eat.bind(this);
  }
  get fruit () {
    return 'apple';
  }
  eat () {
    console.log('I am eating an ' + this.fruit)
  }
}

class Son {
    get fruit () {
    return 'orange';
  }
}

const father = new Father();
const son = new Son();
father.eat();
son.eat = father.eat;
son.eat();
console.log(son,father);