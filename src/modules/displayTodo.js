export default class Todo {
  constructor() {
    const data = JSON.parse(localStorage.getItem('mydata') || '[]');
    this.data = data.map((data, index) => ({
      index,
      description: data.description,
      completed: data.completed || false,
    }));
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
    this.data.splice(index, 1);
    this.data.forEach((data, index) => {
      data.index = index;
    });
    this.updateIndexes();
    localStorage.setItem('mydata', JSON.stringify(this.data));
  }

  update(index, description) {
    this.data[index].description = description;
    localStorage.setItem('mydata', JSON.stringify(this.data));
  }

  updateIndexes() {
    this.data.forEach((item, index) => {
      item.index = index + 1;
    });
  }

  get() {
    return this.data;
  }

  getAll() {
    return this.data;
  }

  toggleCompleted(index) {
    this.data[index].completed = !this.data[index].completed;
    localStorage.setItem('mydata', JSON.stringify(this.data));
  }
}