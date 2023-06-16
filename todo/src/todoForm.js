/*
    onSubmit의 구현 내용은 전혀 관계가 없음
    onSubmit 시 행위를 외부에서 주입받아서 text를 넘겨 실행시키기만 함
    
    이렇게 독립적으로  특정 컴포넌트에 의존적이지 않게
    컴포넌트를 구성해야 함

    submit이벤트를 처리하는 곳에서 onSubmit을 호출하도록 함
*/

/*
    TodoForm 관련 작업은 TodoForm에서만 하면 된다 
*/
function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement('form');
  $target.appendChild($form);

  let initalFlag = false;

  //실제로 DOM을 그리는 부분
  this.render = () => {
    $form.innerHTML = `
        <input type = "text" name = "todo" />
        <button>Add</button>`;

    //이벤트의 처리
    if (!initalFlag) {
      $form.addEventListener('submit', (e) => {
        //태그의 고유 기능을 끄는 방법
        e.preventDefault();
        const $todo = $form.querySelector('input[name = todo]');

        const text = $todo.value;

        if (text.length > 1) {
          $todo.value = '';
          onSubmit(text);
        }
      });
      initalFlag = true;
    }
  };

  this.render();
}
