class Enemy {
  // private fields
  #level;
  #hp;
  #dmg;

  // constructor
  constructor(level, hp, dmg) {
    this.level = level;
    this.hp = hp;
    this.dmg = dmg;
  }

  // public method
  toString() {
    return `Level: ${this.level}
HP: ${this.hp}
DMG: ${this.dmg}`;
  }
}

troll = new Enemy(32, 100, 20);
console.log(troll.toString());
