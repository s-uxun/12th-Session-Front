// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-form");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
  // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
  // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display == "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};

// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  // createElement를 사용해 li, span, button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [할 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".todo-list").appendChild(li);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentNode;
  // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const todoList = document.querySelector(".todo-list");
  todoList.removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  // createElement를 사용해 li, span. button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [끝낸 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleDoneToDo 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteDoneItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // done-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".done-list").appendChild(li);
  console.log(text);

  // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentNode;
  // 클래스명이 done-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const todoList = document.querySelector(".done-list");
  todoList.removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

// 시작 함수
init();
