/*
 * @Author: xiawang1024
 * @Date: 2023-04-13 14:58:06
 * @LastEditTime: 2023-04-13 15:08:13
 * @LastEditors: xiawang1024
 * @Description: 
 * @FilePath: /gitflow-test/index.js
 * 工作，生活，健康
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is can eat`);
    }
}

let dog = new Animal('dog');

let cat = new Animal('cat');