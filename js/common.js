document.addEventListener("DOMContentLoaded", () => {
  let ticketCount = 10;
  const startBtn = document.querySelector('.start_roulette');
  const ticketChange = document.querySelector('.ticket_change');
  const itemRoulette = document.getElementsByClassName('item_image');
  /* test용 출력 */
  // console.log(startBtn);
  // console.log(ticketChange);
  console.log(itemRoulette);
  console.log(itemRoulette.length);

  const rouletteAct = function () {
    /* 이 안에 룰렛관련 동작을 넣고 아래에서 호출. */
    
  }

  /* 티켓 갯수를 HTML에 출력하기 위한 코드 */
  document.getElementById('ticket_count_num').innerHTML = ticketCount;

  /* START 버튼에 클릭이벤트를 넣고 응모권 갯수 비교하고 결과값 리턴.
  룰렛 애니메이션?을 실행할 수 있는 함수를 리턴.
   */
  startBtn.onclick = e => {
    console.log("=============================");
    console.log("StartBtn is Click");
    // console.log(ticketCount);
    let ticketCheck = ticketCount > 0 ? true : false;

    /* 여기에서 0일경우 미리 걸러버리기. */
    if(!ticketCheck) {
      /* 여기에서 응모권이 부족합니다 팝업 띄우기용 리턴 */
      console.log("응모권이 부족할 때 출력될 로그");
      console.log("=============================");
      return ticketCount = 0;
    }
    /* 여기에서 티켓이 1개 이상 있는 경우. */
    if(ticketCheck) {
      ticketCount--;
      /* 티켓 갯수를 HTML에 출력하기 위한 코드 */
      document.getElementById('ticket_count_num').innerHTML = ticketCount;
      // console.log("ticketCheck: " + ticketCheck);
      // console.log("ticketCount: " + ticketCount);

      /* 티켓 1개 뺐으니까 난수 생성. */
      const randomNum = Math.floor(Math.random() * ( 38 - 24)) + 24;
      const itemNum = (randomNum % 14);
      // console.log("난수: " + randomNum);
      // console.log("상품번호: " + itemNum);

      /* 여기에서 ticketCount의 값과 룰렛돌리기용 함수를 리턴 */
      /* 티켓 갯수를 HTML에 출력하기 위한 코드 */
      console.log("룰렛을 돌릴 때 출력될 로그");
      console.log("=============================");
      return ticketCount, rouletteAct;
    }
  }


});