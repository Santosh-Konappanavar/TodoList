export default class Todo {
  constructor(newData) {
    this.newdata = newData;
  }

  display(newdata) {
    newdata.index = this.newdata.length + 1;
    this.newdata.push(newdata);
    localStorage.setItem('mydata', JSON.stringify(this.newdata));
  }
}