// $target,해당 컴포넌트가 추가될 Dom
// params.initalState - 해당 컴포넌트의 초기 상태

/*
    [{
        text:'자바스크립트 공부'
    },{
        text:'자바스크립트 복습'
    }]
*/

function TodoList({ $target, initalState }) {
  const $todoList = document.createElement('div');
  $target.appendChild($todoList);

  this.state = initalState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  //상태를 기준으로 UI를 업데이트
  this.render = () => {
    $todoList.innerHTML = `
    <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
    </ul>
    `;
  };

  this.render();
}
