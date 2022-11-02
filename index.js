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
        this.clientLevel = 'undefined';
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
    if (map.has(client.clientLevel)) {
      const discount = map.get(client.clientLevel).discount;
      return price * ((100 - discount) / 100);
    }
    return price;
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

for (const [level, discount] of Object.entries(bank.clientLevels)) {
  map.set(level, discount);
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
