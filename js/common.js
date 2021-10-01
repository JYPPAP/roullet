document.addEventListener("DOMContentLoaded", () => {
  let ticketCount = 10;
  let randomNum;
  let itemNum;
  let clickFlag = false;
  const startBtn = document.querySelector('.start_roulette');
  const ticketChange = document.querySelector('.ticket_change');
  const itemRoulette = document.getElementsByClassName('item_image');

  function noMoreTicket(ticketCount) {
    console.log("-----------------------------");
    console.log("응모권이 부족!할 때 출력될 로그");
    console.log("Ticket 이 없습니다.");
    console.log("현재 티켓의 갯수: " + ticketCount);
  }

  function rouletteAct(randomNum, itemNum) {
    /* 이 안에 룰렛관련 동작을 넣고 아래에서 호출. */
    console.log("-----------------------------");
    console.log("룰렛을 돌릴 때 출력될 로그");
    console.log("난수: " + randomNum);
    console.log("상품 번호: " + itemNum);

    for ( let i=0; i<randomNum; i++ ) {
      /* 이미지 보이게 */
      setTimeout(() => {
        itemRoulette[(i % 14)].style.opacity = "1";
      }, i*100);
      /* 이미지 안보이게 */
      setTimeout(() => {
        itemRoulette[(i % 14)].style.opacity = "0";
      }, (i*100) + 200);
    }
    /* 마지막 이미지 출력 */
    setTimeout(() => {
      itemRoulette[(itemNum)].style.opacity = "1";
    }, (randomNum*100) + 250);

    /* 중복클릭 초기화 */
    setTimeout(() => {
      clickFlag = false;
    }, (randomNum*100) + 1250);
  }

  /* 티켓 갯수를 HTML에 출력하기 위한 코드 */
  document.getElementById('ticket_count_num').innerHTML = ticketCount;

  /* 중복클릭 차단 */
  /*
  초기값이 false로 저장되어 있고 
    초기값이 clickCheck 함수를 실행하면 true로 변경된다.
    그 다음 중복클릭을 했을 때 clickFlag에는 true 값이 저장되어 있으며 그 true값은 return clickFlag로 true가 반환된다.
    if문에서 반환된 값이 참이고, return이 있다면 끝나게 된다.
    이렇게 중복을 막았고,
    응모권이 없을때는 경고창을 출력할 것이고,
    재실행이 필요한 응모권이 있을 때. 그 곳에 마지막 실행 후 1초가 지났을 때 clickFlag의 값을 false로 초기화 할 수 있도록 작성했다.
  */
  function clickCheck(){
    if(clickFlag) {
      return clickFlag;
    } else {
      clickFlag = true;
      return false;
    }
  }

  /* START 버튼에 클릭이벤트를 넣고 응모권 갯수 비교하고 결과값 리턴.
  룰렛 애니메이션?을 실행할 수 있는 함수를 리턴.
   */
  startBtn.onclick = e => {
    console.log("=============================");
    console.log("StartBtn is Click");

    /* 중복실행 방지용 코드 */
    /* 값이 참이면 여기서 끝난다.
    값이 거짓이면 아래 코드로 넘어간다. */
    if(clickCheck()){return;}

    /* 뽑기 후 초기화. */
    for ( let i=0; i<itemRoulette.length; i++ ) {
      itemRoulette[(i % 14)].style.opacity = "0";
    }
    // console.log(ticketCount);
    /* 티켓유무 판단 */
    let ticketCheck = ticketCount > 0 ? true : false;

    /* 티켓이 없을 경우 */
    if(!ticketCheck) {
      return clickFlag, noMoreTicket(ticketCount);
    }

    /* 티켓이 1개 이상 있는 경우. */
    if(ticketCheck) {
      /* 티켓 갯수를 줄이고 출력 */
      ticketCount--;
      document.getElementById('ticket_count_num').innerHTML = ticketCount;
      /* 난수와 아이템의 인덱스값 생성. */
      // 여러 1바퀴 좀 넘게 돌아야 보는맛이 있기 때문에 최소값 24로 지정 2바퀴 넘게돌면 지루할 수 있으니 최대값 38로 지정.
      const randomNum = Math.floor(Math.random() * ( 38 - 24)) + 24;
      const itemNum = (randomNum % 14);

      /* 티켓의 총 갯수와 룰렛돌리기 함수를 리턴 */
      return clickFlag, ticketCount, rouletteAct(randomNum, itemNum);
    }
  }
});