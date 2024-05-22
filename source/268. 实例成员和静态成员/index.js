class Rabbit {
  furColor;
  age;
  nickname;
  static totalRabbits = 0;

  constructor(furColor, age, nickname) {
    this.furColor = furColor;
    this.age = age;
    this.nickname = nickname;
    Rabbit.totalRabbits++;
  }

  jump() {
    console.log(`${this.nickname} jumping`);
  }
}

const r1 = new Rabbit('white', 2, '小白兔');
const r2 = new Rabbit('gray', 3, '小灰兔');
r1.jump();
console.log(Rabbit.totalRabbits);
