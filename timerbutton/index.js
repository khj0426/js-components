//토글 버튼
function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement('button');
  $target.appendChild($button);

  this.state = {
    //클릭시 올라갈 카운터
    clickCount: 0,
    //토클 여부?
    toggled: false,
  };

  //상태 갱신 setState
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    $button.textContent = text;
    //상태에 따라 다른 UI를 반환한다.
    $button.style.textDecoration = this.state.toggled ? 'line-through' : 'none';
  };

  //버튼 클릭시 이벤트
  $button.addEventListener('click', () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    //클릭시 현재 상태의 Count 반환
    if (onClick) {
      onClick(this.state.clickCount);
    }
  });

  this.render();
}

//타이머 버튼, timer 시간 뒤에 토글을 해준다.
function TimerButton({ $target, text, timer = 1000 }) {
  const button = new ToggleButton({
    $target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

function ButtonGroup({ $target, buttons }) {
  //처음 한번만 추가되게 설정

  let isInit = false;
  const $group = document.createElement('div');
  this.render = () => {
    if (!isInit) {
      //타입에 따라 다른 버튼을 만든다
      buttons.forEach(({ type, ...props }) => {
        if (type === 'toggle') {
          new ToggleButton({
            $target: $group,
            ...props,
          });
        } else if (type === 'timer') {
          new TimerButton({
            $target: $group,
            ...props,
          });
        }
      });
      $target.appendChild($group);
      isInit = true;
    }
  };

  this.render();
}

const $app = document.querySelector('.app');
new ToggleButton({
  $target: $app,
  text: '간단한 토글 버튼',

  //현재의 상태를 받아서 확인
  onClick: (clickCount) => {
    if (clickCount % 3 === 0) {
      alert('3번 클릭');
    }
  },
});

new TimerButton({
  $target: $app,
  text: '간단한 타이머 버튼',
  timer: 5000,
});

new TimerButton({
  $target: $app,
  text: '3초뒤에 토글 사라짐',
});

new ButtonGroup({
  $target: $app,
  buttons: [
    {
      type: 'toggle',
      text: '버튼 그룹 토글 버튼',
    },
    {
      type: 'timer',
      text: '버튼 그룹 타이머 10초 버튼',
      timer: 1000,
    },
  ],
});
