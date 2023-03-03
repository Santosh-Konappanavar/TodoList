export default class Todo {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('mydata') || '[]');
  }

  add(description) {
    const newitem = {
      description,
      completed: false,
      index: this.data.length + 1,
    };
    this.data.push(newitem);
    localStorage.setItem('mydata', JSON.stringify(this.data));
    return newitem;
  }

  delete(index) {
    this.data.splice(index - 1, 1);
    this.updateIndexes();
    localStorage.setItem('mydata', JSON.stringify(this.data));
  }

  update(index, description) {
    const item = this.data[index - 1];
    item.description = description;
    localStorage.setItem('mydata', JSON.stringify(this.data));
    return item;
  }

  updateIndexes() {
    this.data.forEach((item, index) => {
      item.index = index + 1;
    });
  }

  get(index) {
    return this.data[index - 1];
  }

  getAll() {
    return this.data;
  }
}