"use strict";
//1 Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
//на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
//для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
//пустой объект.

function objNumber () {
var getDigitObg = {
number: +prompt('Введите число от 0 до 999'),
unit : 0,
ten : 0,
hundred : 0,
};
        if (getDigitObg.number <= 999){
          getDigitObg.hundred = Math.floor(getDigitObg.number / 100 % 10);
          getDigitObg.ten = Math.floor(getDigitObg.number / 10 % 10);
          getDigitObg.unit = Math.floor(getDigitObg.number % 10);
        }else {
          getDigitObg.number = 0;
          console.log('Вы ввели число за диапазоном 0 - 999');
          return getDigitObg;
        }
      console.log(getDigitObg);
      }
objNumber();


//2 Для игры, реализованной на уроке, добавить ограничение движения за пределы карты
        
const settings = {
  rowCount: 10,
  colCount: 10,
  startPositionX: 0,
  startPositionY: 0,
};

const player = {
  x: null,
  y: null,

  init(startX, startY) {
      this.x = startX;
      this.y = startY;
  },

  move(direction) {
      switch (direction) {
          case 2:
              this.y++;
              break;
          case 4:
              this.x--;
              break;
          case 6:
              this.x++;
              break;
          case 8:
              this.y--;
      }
  }
};

const game = {
  settings,
  player,

  run() {
      this.player.init(this.settings.startPositionX, this.settings.startPositionY);

      while (true) {
          this.render();

          const direction = this.getDirection();

          if (direction === -1) {return alert('До свидания!');}

          this.player.move(direction);
        }  
        },

  render() {
      let map = '';

      for (let row = 0; row < this.settings.rowCount; row++) {
          for (let col = 0; col < this.settings.colCount; col++) {
             if (this.player.y === row && this.player.x === col) {
                 map += '0 ';
             } else {
                 map += 'X ';
             }
          }
          map += '\n';
      }
      console.clear();
      console.log(map);
  },

  getDirection() {
      const availableDirections = [-1, 2, 4, 6, 8];

      while (true) {
          const direction = parseInt(prompt('Введите число куда хотите переместиться или -1 для выхода.'));

          if (!availableDirections.includes(direction)) {
              alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
              continue;
          }

          return direction;
      }
  }
      getPlayerStop(point) {
          return Point.x >= 0 &&
                 Point.y >= 0 &&
    }
}


game.run();

//3.Продолжить работу с интернет-магазином:
//3.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//3.2. Реализуйте такие объекты.
//3.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
newFunction();

function newFunction() {
  "use strict";
  const getShopBasket = {
    shop: [
      {
        product: "table",
        price: 1000,
        color: 'red',
        quantity: 3
      },
      {
        product: "chair",
        price: 500,
        color: 'blue',
        quantity: 12
      },
      {
        product: "cupboard",
        price: 2000,
        color: 'yellow',
        quantity: 23
      },
      {
        product: "sofa",
        price: 3000,
        color: 'red',
        quantity: 18
      }
    ],

    shopPriceBasket() {
      return this.shop.reduce(function (totalquantity, cartItem) {
          return totalquantity += cartItem.quantity;
        }, 0);
    }
  };

  console.log(getShopBasket.shopPriceBasket());
}
