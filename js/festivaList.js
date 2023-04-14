//     festivalTitle: "", //축제 이름
//     festivalAreaIns: "", //축제 장소
//     festivalDate: "", //축제 날짜
//     festivalMainIns: "", //축제 설명
//     festivalTag: "", //축제 해시태그
//     festivalSite: "", //축제 사이트

//카드 이미지 hover했을 때 나올 카드 내용
//서울

const festivalSeoul = [
  {
    festivalTitle: "석촌호수 벚꽃축제", //축제 이름
    festivalAreaIns: "장소 : 서울 송파구 석촌호수", //축제 장소
    festivalDate: "기간 : 23.04.05. (수) ~ 23.04.09. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 아름다운 봄, 벚꽃이야기 호수벚꽃축제'는\n4월 5일 석촌호수 동호 중앙무대에서 개막식 공연과 함께 축제의 시작을 알리며,\n 이후로는 청년 버스킹 및 문화예술단체 등이 준비한 각종 공연이 진행됩니다.\n 또한 캐리커쳐, 페이스페인팅 등 각종 체험부스와 플리마켓이 준비되어 있어 관람객들에게 볼거리와 놀거리를 다양하게 제공한다. 올해 가족 및 친구, 연인 등과 함께 따뜻한 햇살과 만개한 벚꽃이 경관을 이루는 석촌호수에서 봄의 향연을 즐기시기 바란다.", //축제 설명
    festivalTag: "#꽃축제 #데이트코스 #봄축제 #나들이 #벚꽃", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=c3c8b79f-14e4-4f19-8f9b-e9b3826ee4ea&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=1908132&qvt=0&query=%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98%20%EB%B2%9A%EA%BD%83%EC%B6%95%EC%A0%9C", //축제 사이트
  },
  {
    festivalTitle: "궁중문화축전", //축제 이름
    festivalAreaIns: "경복궁, 창덕궁, 창경궁, 덕수궁, 경희궁, 종묘, 사직단", //축제 장소
    festivalDate: "기간 : 23.04.29. (토) ~ 23.05.07. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : ‘궁중문화축전’은 대한민국의 대표 문화유산인 경복궁, 창덕궁, 덕수궁, 창경궁, 경희궁 5대궁과 종묘, 사직단을 배경으로 펼쳐지는 국내 최대 문화유산 축제이다. 궁중문화축전은 '오늘, 궁을 만나다'라는 슬로건 아래 매년 각 고궁의 장소성과 역사성을 활용한 공연, 전시, 체험, 의례 등의 문화예술프로그램을 선보이고 있다. ", //축제 설명
    festivalTag: "#경복궁 #광화문 #도심여행 #문화유산", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=1bb9ef3a-65ba-44c2-87f9-9ce04a8ee02f&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=3515656&qvt=0&query=%EA%B6%81%EC%A4%91%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%84", //축제 사이트
  },
  {
    festivalTitle: "서울릴랙스위크", //축제 이름
    festivalAreaIns: "장소 : 서울무역전시컨벤션센터(SETEC) 컨벤션홀", //축제 장소
    festivalDate: "기간 : 23.03.01. (수) ~ 23.04.30. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 서울릴랙스위크는 누구나 방문하여 몸과 마음을 돌볼 수 있는 '마음이 쉬는 곳'으로 구성되어 있는 서울 도시 축제이자, 멘탈 힐링 축제이다. 명상을 통한 시민들의 스트레스 완화와 치유, 행복을 도모하는 담마토크 및 수행주간 등 시민참여형 프로그램으로 일상 속 소소하고 편안한 휴식을 제공한다.", //축제 설명
    festivalTag: "#힐링축제 #휴식 #스트레스완화 #위로 #강남", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=07fd5131-66e8-4be9-b111-546570827ba1&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=24775060&qvt=0&query=%EC%84%9C%EC%9A%B8%EB%A6%B4%EB%9E%99%EC%8A%A4%EC%9C%84%ED%81%AC", //축제 사이트
  },
  {
    festivalTitle: "서울릴랙스위크", //축제 이름
    festivalAreaIns: "장소 : 서울무역전시컨벤션센터(SETEC) 컨벤션홀", //축제 장소
    festivalDate: "기간 : 23.03.01. (수) ~ 23.04.30. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 서울릴랙스위크는 국내외의 유수한 연사들의 강연으로 꾸려지는 '담마토크'와, 매주 일상 속에서 지혜로운 삶을 위해 마음을 공부하는 '수행주간', 누구나 방문하여 몸과 마음을 돌볼 수 있는 '마음이 쉬는 곳'으로 구성되어 있는 서울 도시 축제이자, 멘탈 힐링 축제이다. 시민들의 힐링, 치유, 마음 관리를 위한 마음챙김 관련 프로그램을 제공하는 연구·교육 기관·단체·협회 108곳을 모아 지도로 제작해, 모두가 편히 쉴 수 있는 릴랙스 스팟을 한눈에 보여드린다. 명상을 통한 시민들의 스트레스 완화와 치유, 행복을 도모하는 담마토크 및 수행주간 등 시민참여형 프로그램으로 일상 속 소소하고 편안한 휴식을 제공한다.", //축제 설명
    festivalTag: "#힐링축제 #휴식 #스트레스완화 #위로 #강남", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=07fd5131-66e8-4be9-b111-546570827ba1&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=24775060&qvt=0&query=%EC%84%9C%EC%9A%B8%EB%A6%B4%EB%9E%99%EC%8A%A4%EC%9C%84%ED%81%AC", //축제 사이트
  },
  {
    festivalTitle: "서울릴랙스위크", //축제 이름
    festivalAreaIns: "장소 : 서울무역전시컨벤션센터(SETEC) 컨벤션홀", //축제 장소
    festivalDate: "기간 : 23.03.01. (수) ~ 23.04.30. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 서울릴랙스위크는 국내외의 유수한 연사들의 강연으로 꾸려지는 '담마토크'와, 매주 일상 속에서 지혜로운 삶을 위해 마음을 공부하는 '수행주간', 누구나 방문하여 몸과 마음을 돌볼 수 있는 '마음이 쉬는 곳'으로 구성되어 있는 서울 도시 축제이자, 멘탈 힐링 축제이다. 시민들의 힐링, 치유, 마음 관리를 위한 마음챙김 관련 프로그램을 제공하는 연구·교육 기관·단체·협회 108곳을 모아 지도로 제작해, 모두가 편히 쉴 수 있는 릴랙스 스팟을 한눈에 보여드린다. 명상을 통한 시민들의 스트레스 완화와 치유, 행복을 도모하는 담마토크 및 수행주간 등 시민참여형 프로그램으로 일상 속 소소하고 편안한 휴식을 제공한다.", //축제 설명
    festivalTag: "#힐링축제 #휴식 #스트레스완화 #위로 #강남", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=07fd5131-66e8-4be9-b111-546570827ba1&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=24775060&qvt=0&query=%EC%84%9C%EC%9A%B8%EB%A6%B4%EB%9E%99%EC%8A%A4%EC%9C%84%ED%81%AC", //축제 사이트
  },
];

const festivalGangWon = [];

export const festivalDataList = {
  seoul: festivalSeoul,
  gangWon: festivalGangWon,
};
