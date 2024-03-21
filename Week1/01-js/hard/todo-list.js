/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid");
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Invalid Index");
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.log("Invalid index.");
      return null;
    }
  }
  clear() {
    this.todos = [];
  }
}


// const todoList= new Todo();

// todoList.add("Buy Groceries");
// todoList.add("Fuck everything");
// console.log("Initial Todo List:", todoList.getAll());

// todoList.remove(1);
// console.log("After removing:",todoList.getAll());

// todoList.update(0,"Study");
// console.log("After updates",todoList.getAll());
// todoList.add("Lionel Messi");
// console.log(todoList.getAll());

module.exports = Todo;

