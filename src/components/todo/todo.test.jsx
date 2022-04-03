import { Todo } from "./todo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo component", () => {
  test("When a task title is typed into the input box and the 'add' button is clicked, a new todo item is added to the list", () => {
    render(<Todo />);

    addTask("mow lawn");

    expect(getAllTasks()).toEqual(["mow lawn"]);
  });

  test("view todos", () => {
    render(<Todo />);

    addTask("clean house");
    addTask("learn testing");
    addTask("take a break");

    console.log(getAllTasks());

    expect(getAllTasks()).toEqual([
      "clean house",
      "learn testing",
      "take a break",
    ]);
  });
});

function addTask(text) {
  const inputEl = screen.getByPlaceholderText("add task");
  userEvent.type(inputEl, text);

  const buttonEl = screen.getByText("Add");
  userEvent.click(buttonEl);
}

function getAllTasks() {
  const taskEls = screen.queryAllByTestId("todoItem__text");

  return taskEls.map((el) => el.textContent);
}
