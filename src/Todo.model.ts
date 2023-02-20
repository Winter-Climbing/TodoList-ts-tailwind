export type todoList = {
  id: string;
  text: string;
  status: string;
};

export type handleTodo = (todo: todoList) => void;
// 이걸 콜 시그니쳐라고 부른다.

// 다수의 콜 시그니쳐를 가진 type을 오버로딩이라고 한다.
