const quotes = [
  {
    quote: "상식과 정직한 거래만큼 인간을 경탄케하는 것은 없다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "결과보다 과정 이라는 말은 상업 항공의 등장으로 옛말이 되었다.",
    author: "헨리 J. 틸만",
  },
  {
    quote: "많이 보고 많이 겪고 많이 공부하는 것은 배움의 세 기둥이다.",
    author: "벤자민 디즈라엘리",
  },
  {
    quote: "한 방향으로 깊이 사랑하면 다른 모든 방향으로의 사랑도 깊어진다.",
    author: "안네-소피 스웨친",
  },
  {
    quote:
      "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    author: "공자",
  },
  {
    quote: "교육은 더 높은 수준의 편견을 얻는 방법이다.",
    author: "로렌스 J. 피터",
  },
  {
    quote:
      "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
    author: "윌리 '페이머스' 아모스",
  },
  {
    quote:
      "성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다.",
    author: "프리츠 쿤켈",
  },
  {
    quote: "모든 전사 중 가장 강한 전사는 이 두 가지, 시간과 인내다.",
    author: "레프 톨스토이",
  },
  {
    quote:
      "성실함의 잣대로 스스로를 평가하라, 그리고 관대함의 잣대로 남들을 평가하라.",
    author: "존 미첼 메이슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
