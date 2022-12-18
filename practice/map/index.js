'use strict';
class Client {
  constructor(fullName, clientLevel = null, balance = 0) {
    this.fullName = fullName;
    this.clientLevel = clientLevel;
    this.balance = balance;
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

const clientLevels = {
  basic: 'basic',
  pro: 'pro',
  platinum: 'platinum',
};

const clients = [
  new Client('U1erKa', clientLevels.basic, 2000),
  new Client('U2erKa', clientLevels.pro, 2000),
  new Client('U3erKa', clientLevels.platinum, 1000),
  new Client('U4erKa', clientLevels.undefined, 1000),
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
