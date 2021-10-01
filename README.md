21-10-01 추가 및 수정사항
### HTML 
1. HEAD에 script 불러올 때 defer 속성 추가함.
2. #ticket_count_num의 자식요소였던 p태그를 형제요소로 변경함.
3. 스펠링에 문제가 있어서 roullte를 toulette로 변경함. 나머지 css와 js에서도 변경 완료.
===============================
### SCSS
1. .ticket_count의 position을 relative에서 absolute로 변경.
2. p 태그가 #ticket_count_num의 자식요소일 때 작성했던 것을 정상위치(.ticket_count)로 옮김.
3. 오타 수정 및 img 에 걸려있던 cursor: pointer를 부모요소로 옮겨줌.
===============================
### Javascript
1. 티켓의 갯수, 스타트버튼, 티켓 변동내역을 변수 처리함.
2. 아이템이미지(마일리지 이미지)를 배열로 받아서 저장함.
3. #ticket_count_num에 ticketCount 값을 넣어줌. ( 변수값을 새로 읽어들일 때 첫 적용 )
4. 스타트버튼에 이벤트를 걸어서 ticketCheck에서 ticketCount의 값이 0보다 클 때 true, 아니면 None를 반환하도록 설정
5. ticketCheck의 값이 false일 때 ticketCount를 0으로 하는 값을 반환하고 종료.
6. ticketCheck의 값이 True일 때 ticketCount값을 1 빼고 그 값을 #ticket_count_num에 입력 후 난수생성 및 상품번호 생성하고 ticketCount와 상단에서 선언 할 rouletteAct 함수를 호출.
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

