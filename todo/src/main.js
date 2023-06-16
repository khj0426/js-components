const data = [
  {
    text: '자바스크립트 공부',
  },
  {
    text: '자바스크립트 복습하기',
  },
];

const $app = document.querySelector('.app');
new App({
  $target: $app,
  initalState: data,
});
/*
  TodForm 생성 파라미터에 이벤트 콜백을 넣고,
  text를 입력받으면 해당 콜백으로 text 넘기기
*/

/*
  어떠한 행위가 일어날 것이다를 외부에서 주입시켜
*/
