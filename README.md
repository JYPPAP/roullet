21-10-01 추가 및 수정사항

### 해야 할 일
1. 팝업창 만들기
  > 꽝 팝업, 당첨 팝업, 응모권 부족 팝업.
  
### HTML 
1. HEAD에 script 불러올 때 defer 속성 추가함.
2. #ticket_count_num의 자식요소였던 p태그를 형제요소로 변경함.
3. 스펠링에 문제가 있어서 roullte를 toulette로 변경함. 나머지 css와 js에서도 변경 완료.
===============================
### SCSS
1. .ticket_count의 position을 relative에서 absolute로 변경.
2. p 태그가 #ticket_count_num의 자식요소일 때 작성했던 것을 정상위치(.ticket_count)로 옮김.
3. 오타 수정 및 img 에 걸려있던 cursor: pointer를 부모요소로 옮겨줌.
4. item_image 출력했을 때 위치 세부 조정. ( 2px 이동)
===============================
### Javascript
1. 티켓의 갯수, 스타트버튼, 티켓 변동내역을 변수 처리함.
2. 아이템이미지(마일리지 이미지)를 배열로 받아서 저장함.
3. #ticket_count_num에 ticketCount 값을 넣어줌. ( 변수값을 새로 읽어들일 때 첫 적용 )
4. 스타트버튼에 이벤트를 걸어서 ticketCheck에서 ticketCount의 값이 0보다 클 때 true, 아니면 None를 반환하도록 설정
5. ticketCheck의 값이 false일 때 ticketCount를 0으로 하는 값을 반환하고 종료.
6. ticketCheck의 값이 True일 때 ticketCount값을 1 빼고 그 값을 #ticket_count_num에 입력 후 난수생성 및 상품번호 생성하고 ticketCount와 상단에서 선언 할 rouletteAct 함수를 호출.
7. 난수, 상품번호, 클릭 플래그를 변수 처리함.
8. 중복클릭 방지용 코드 완성
    - clickFlag값의 초기값이 false로 저장되어 있고 초기값이 clickCheck 함수를 실행하면 true로 변경된다.
    그 다음 중복클릭을 했을 때 clickFlag에는 true 값이 저장되어 있으며 그 true값은 return clickFlag로 true가 반환된다.
    if문에서 반환된 값이 참이고, return이 있다면 끝나게 된다.
    이렇게 중복을 막았고, 응모권이 없을때는 경고창을 출력할 것이고,
    재실행이 필요한 응모권이 있을 때. 그 곳에 마지막 실행 후 1초가 지났을 때 clickFlag의 값을 false로 초기화 할 수 있도록 작성했다.
9. 룰렛 애니메이션 함수 작성.
    - for 구문을 이용해서 0부터 난수까지 1씩 증가
    setTimeout을 이용해서 i * 100의 값 동안 opacity = 1로 보이게 설정
    (i * 100) + 200의 시간동안 opacity = 0으로 안보이게 설정
    마지막 이미지 앞에서 끝나기 때문에 (randomNum * 100) + 250의 시간일 때 opacity = 1로 지정해서 보일 수 있도록 변경.
    중복클릭 초기화를 위해서 끝날 때 clickFlag를 false로 초기화 할 수 있도록 작성.
===============================
### HTML

###### HEAD
1. 파비콘 추가
	> 기존 아이템매니아에 있는 링크 그대로 사용.
2. CSS 링크 추가
	> css/~min.css로 압축형태를 추가함.
3. JS 추가
	> js/common.js 추가함.
###### BODY
구조 작성 및 메인 컨텐츠 모양과 스타일 완성.

* btn_이미지 추가하는 부분에서 부모요소에 width 와 height 값을 전부 지정해 줘야 나중에 자식요소에 left 와 같은 값을 넣었을 때 고정된다.
===========
### SCSS

작성순서는 html을 기준으로 하여 탑다운 방식이며,
id값은 따로 빼서 적용.
초기화 간단하게 적용 (추후 추가예정)
폰트 적용 완료 (Tahoma, 영문전용 폰트)

마일리지 이미지들을 전부 opacity: 0, 클래스로 묶은다음 nth-child를 통해서 배경이미지로 삽입. 위치또한 :nth-child를 통해서 세로와 가로 적용함.

===========
### JavaScript

아직 동작구현 없음

