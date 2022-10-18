'use strict';
class Client {
  constructor(fullName, clientLevelId = 0, balance = 0) {
    this.fullName = fullName;
    this.clientLevelId = clientLevelId;
    this.balance = balance;
  }

  set clientLevelId(id) {
    switch (id) {
      case 0: {
        this.clientLevel = 'basic';
        break;
      }
      case 1: {
        this.clientLevel = 'pro';
        break;
      }
      case 2: {
        this.clientLevel = 'platinum';
        break;
      }
      default:
        this.clientLevel = 'basic';
        break;
    }
  }

  buy(price) {
    if (Client.finalPrice(this, price) > this.balance) {
      throw RangeError(price - this.balance);
    }
    return (this.balance -= Client.finalPrice(this, price));
  }

  static finalPrice(client, price) {
    for (const [key, value] of map) {
      if (key === client.clientLevel) {
        return price * ((100 - value.discount) / 100);
      }
    }
  }
}

const clients = [
  new Client('U1erKa', 0, 2000),
  new Client('U2erKa', 1, 2000),
  new Client('U3erKa', 2, 1000),
  new Client('U4erKa', 3, 1000),
  new Client('U5erKa'),
];

const bank = {
  bankName: 'Ripoff one',
  clientLevels: {
    basic: { discount: 0 },
    pro: { discount: 10 },
    platinum: { discount: 25 },
  },
};

const map = new Map();

for (const { clientLevel: level } of clients) {
  const { clientLevels: { basic, pro, platinum }, } = bank;
  if (level === 'platinum') {
    map.set(level, platinum);
  } else if (level === 'pro') {
    map.set(level, pro);
  } else {
    map.set(level, basic);
  }
}

for (const client of clients) {
  try {
    console.log(
      `After transaction ${client.fullName} balance is: ${client.buy(1250)}`
    );
  } catch (error) {
    console.log(
      `${client.fullName} needs ${error.message} more money to afford this`
    );
  }
}
