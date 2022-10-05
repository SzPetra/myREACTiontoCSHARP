const questions = [
  {
    id: 1,
    question: "...szüntelenül új, megoldatlan problémákba ütközik.",
    type: 1,
    value: 0,
  },
  {
    id: 2,
    question: "...másokon segíthet.",
    type: 2,
    value: 0,
  },
  {
    id: 3,
    question: "...sok pénzt keres.",
    type: 3,
    value: 0,
  },
  {
    id: 4,
    question: "...változatos munkát végezhet.",
    type: 4,
    value: 0,
  },
  {
    id: 5,
    question: "...szabadon dönthet a saját területén.",
    type: 5,
    value: 0,
  },
  {
    id: 6,
    question: "...tekintélyt szerezhet munkájával.",
    type: 6,
    value: 0,
  },
  {
    id: 7,
    question: "...akár művész is lehet.",
    type: 7,
    value: 0,
  },
  {
    id: 8,
    question: "...a többiek közé tartozik.",
    type: 8,
    value: 0,
  },
  {
    id: 9,
    question: "...pillanatnyi kedve dönti el, hogy mit csináljon.",
    type: 9,
    value: 0,
  },
  {
    id: 10,
    question: "...megvalósítja önmagát.",
    type: 10,
    value: 0,
  },
  {
    id: 11,
    question: "...tisztelheti a főnökét.",
    type: 11,
    value: 0,
  },
  {
    id: 12,
    question: "...tehet valamit a társadalmi igazságosságért.",
    type: 12,
    value: 0,
  },
  {
    id: 13,
    question:
      "...nem beszélhet mellé, mert csak jó vagy rossz megoldások léteznek.",
    type: 13,
    value: 0,
  },
  {
    id: 14,
    question: "...másokat irányíthat.",
    type: 15,
    value: 0,
  },
  {
    id: 15,
    question: "...új elképzeléseket alakíthat ki.",
    type: 14,
    value: 0,
  },
  {
    id: 16,
    question: "...valami újat alkothat.",
    type: 14,
    value: 0,
  },
  {
    id: 17,
    question: "...objektíven lemérheti munkája eredményét.",
    type: 13,
    value: 0,
  },
  {
    id: 18,
    question: "...vezetője mindig helyesen dönt.",
    type: 11,
    value: 0,
  },
  {
    id: 19,
    question: "...olyat is csinálhat, ami más szemében fölöslegesnek tűnhet.",
    type: 9,
    value: 0,
  },
  {
    id: 20,
    question: "...szebbé teheti a világot.",
    type: 7,
    value: 0,
  },
  {
    id: 21,
    question: "...önálló döntéseket hozhat.",
    type: 5,
    value: 0,
  },
  {
    id: 22,
    question: "...gondtalan életet biztosíthat.",
    type: 3,
    value: 0,
  },
  {
    id: 23,
    question: "...új gondolatokkal találkozhat.",
    type: 1,
    value: 0,
  },
  {
    id: 24,
    question: "...vezetői képességeire szüksége lehet.",
    type: 15,
    value: 0,
  },
  {
    id: 25,
    question: "...sikerét vagy kudarcát csak a következő nemzedék döntheti el.",
    type: 12,
    value: 0,
  },
  {
    id: 26,
    question: "...személyes életstílusa érvényesülhet.",
    type: 10,
    value: 0,
  },
  {
    id: 27,
    question: "...munkatársai egyben barátai is.",
    type: 8,
    value: 0,
  },
  {
    id: 28,
    question: "...biztos lehet afelől, hogy munkájáért a többiek megbecsülik.",
    type: 6,
    value: 0,
  },
  {
    id: 29,
    question: "...nem kell minduntalan ugyanazt csinálnia.",
    type: 4,
    value: 0,
  },
  {
    id: 30,
    question: "...jót tehet mások érdekében.",
    type: 2,
    value: 0,
  },
  {
    id: 31,
    question: "...más emberek javát szolgálhatja.",
    type: 2,
    value: 0,
  },
  {
    id: 32,
    question: "...sokféle dolgot csinálhat.",
    type: 4,
    value: 0,
  },
  {
    id: 33,
    question: "...(ember)re mások felnéznek.",
    type: 6,
    value: 0,
  },
  {
    id: 34,
    question: "...jól kijön munkatársaival.",
    type: 8,
    value: 0,
  },
  {
    id: 35,
    question: "...olyan életet élhet, amit legjobban szeret.",
    type: 10,
    value: 0,
  },
  {
    id: 36,
    question: "...(ember)nek konfliktusokat kell vállalnia.",
    type: 12,
    value: 0,
  },
  {
    id: 37,
    question: "...mások munkáját is irányíthatja.",
    type: 15,
    value: 0,
  },
  {
    id: 38,
    question: "...szellemileg izgalmas munkát végezhet.",
    type: 1,
    value: 0,
  },
  {
    id: 39,
    question: "...magas nyugdíjra számíthat.",
    type: 3,
    value: 0,
  },
  {
    id: 40,
    question: "...munkájába másnak nincs beleszólása.",
    type: 5,
    value: 0,
  },
  {
    id: 41,
    question: "...szépet teremthet.",
    type: 7,
    value: 0,
  },
  {
    id: 42,
    question: "...olykor játszhat is.",
    type: 9,
    value: 0,
  },
  {
    id: 43,
    question: "...(ember)nek megértő vezetője van.",
    type: 11,
    value: 0,
  },
  {
    id: 44,
    question: "...szüntelenül fejlesztheti, tökéletesítheti önmagát.",
    type: 13,
    value: 0,
  },
  {
    id: 45,
    question: "...új ötleteire mindig szükség van.",
    type: 14,
    value: 0,
  },
];

export default questions;