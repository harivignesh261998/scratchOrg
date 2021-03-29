import { LightningElement } from "lwc";

export default class AddTwoNumbers extends LightningElement {
  numberOne = 0;
  numberTwo = 0;
  result;

  handleChangeOne = (event) => {
    this.numberOne = +event.target.value;
    this.result = this.numberOne + this.numberTwo;
    console.log();
  };

  handleChangeTwo = (event) => {
    this.numberTwo = +event.target.value;
    this.result = this.numberOne + this.numberTwo;
  };
}
