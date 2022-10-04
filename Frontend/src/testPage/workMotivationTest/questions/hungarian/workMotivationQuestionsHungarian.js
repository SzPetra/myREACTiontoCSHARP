const workMotivationQuestions = [
  {
    id: 1,
    question: "...szüntelenül új, megoldatlan problémákba ütközik.",
    type: "szellemi ösztönzés",
    value: 0,
  },
  {
    id: 2,
    question: "...másokon segíthet.",
    type: "altruizmus",
    value: 0,
  },
  {
    id: 3,
    question: "...sok pénzt keres.",
    type: "anyagiak",
    value: 0,
  },
  {
    id: 4,
    question: "...változatos munkát végezhet.",
    type: "változatosság",
    value: 0,
  },
  {
    id: 5,
    question: "...szabadon dönthet a saját területén.",
    type: "függetlenség",
    value: 0,
  },
  {
    id: 6,
    question: "...tekintélyt szerezhet munkájával.",
    type: "presztízs",
    value: 0,
  },
  {
    id: 7,
    question: "...akár művész is lehet.",
    type: "esztétikum",
    value: 0,
  },
  {
    id: 8,
    question: "...a többiek közé tartozik.",
    type: "társas kapcsolatok",
    value: 0,
  },
  {
    id: 9,
    question: "...pillanatnyi kedve dönti el, hogy mit csináljon.",
    type: "játékosság",
    value: 0,
  },
  {
    id: 10,
    question: "...megvalósítja önmagát.",
    type: "önérvényesítés",
    value: 0,
  },
  {
    id: 11,
    question: "...tisztelheti a főnökét.",
    type: "hierarchia",
    value: 0,
  },
  {
    id: 12,
    question: "...tehet valamit a társadalmi igazságosságért.",
    type: "humán értékek",
    value: 0,
  },
  {
    id: 13,
    question:
      "...nem beszélhet mellé, mert csak jó vagy rossz megoldások léteznek.",
    type: "munkateljesítmény",
    value: 0,
  },
  {
    id: 14,
    question: "...másokat irányíthat.",
    type: "irányítás",
    value: 0,
  },
  {
    id: 15,
    question: "...új elképzeléseket alakíthat ki.",
    type: "kreativitás",
    value: 0,
  },
  {
    id: 16,
    question: "...valami újat alkothat.",
    type: "kreativitás",
    value: 0,
  },
  {
    id: 17,
    question: "...objektíven lemérheti munkája eredményét.",
    type: "munkateljesítmény",
    value: 0,
  },
  {
    id: 18,
    question: "...vezetője mindig helyesen dönt.",
    type: "hierarchia",
    value: 0,
  },
  {
    id: 19,
    question: "...olyat is csinálhat, ami más szemében fölöslegesnek tűnhet.",
    type: "játékosság",
    value: 0,
  },
  {
    id: 20,
    question: "...szebbé teheti a világot.",
    type: "esztétikum",
    value: 0,
  },
  {
    id: 21,
    question: "...önálló döntéseket hozhat.",
    type: "függetlenség",
    value: 0,
  },
  {
    id: 22,
    question: "...gondtalan életet biztosíthat.",
    type: "anyagiak",
    value: 0,
  },
  {
    id: 23,
    question: "...új gondolatokkal találkozhat.",
    type: "szellemi ösztönzés",
    value: 0,
  },
  {
    id: 24,
    question: "...vezetői képességeire szüksége lehet.",
    type: "irányítás",
    value: 0,
  },
  {
    id: 25,
    question: "...sikerét vagy kudarcát csak a következő nemzedék döntheti el.",
    type: "humán értékek",
    value: 0,
  },
  {
    id: 26,
    question: "...személyes életstílusa érvényesülhet.",
    type: "önérvényesítés",
    value: 0,
  },
  {
    id: 27,
    question: "...munkatársai egyben barátai is.",
    type: "társas kapcsolatok",
    value: 0,
  },
  {
    id: 28,
    question: "...biztos lehet afelől, hogy munkájáért a többiek megbecsülik.",
    type: "presztízs",
    value: 0,
  },
  {
    id: 29,
    question: "...nem kell minduntalan ugyanazt csinálnia.",
    type: "változatosság",
    value: 0,
  },
  {
    id: 30,
    question: "...jót tehet mások érdekében.",
    type: "altruizmus",
    value: 0,
  },
  {
    id: 31,
    question: "...más emberek javát szolgálhatja.",
    type: "altruizmus",
    value: 0,
  },
  {
    id: 32,
    question: "...sokféle dolgot csinálhat.",
    type: "változatosság",
    value: 0,
  },
  {
    id: 33,
    question: "...(ember)re mások felnéznek.",
    type: "presztízs",
    value: 0,
  },
  {
    id: 34,
    question: "...jól kijön munkatársaival.",
    type: "társas kapcsolatok",
    value: 0,
  },
  {
    id: 35,
    question: "...olyan életet élhet, amit legjobban szeret.",
    type: "önérvényesítés",
    value: 0,
  },
  {
    id: 36,
    question: "...(ember)nek konfliktusokat kell vállalnia.",
    type: "humán értékek",
    value: 0,
  },
  {
    id: 37,
    question: "...mások munkáját is irányíthatja.",
    type: "irányítás",
    value: 0,
  },
  {
    id: 38,
    question: "...szellemileg izgalmas munkát végezhet.",
    type: "szellemi ösztönzés",
    value: 0,
  },
  {
    id: 39,
    question: "...magas nyugdíjra számíthat.",
    type: "anyagiak",
    value: 0,
  },
  {
    id: 40,
    question: "...munkájába másnak nincs beleszólása.",
    type: "függetlenség",
    value: 0,
  },
  {
    id: 41,
    question: "...szépet teremthet.",
    type: "esztétikum",
    value: 0,
  },
  {
    id: 42,
    question: "...olykor játszhat is.",
    type: "játékosság",
    value: 0,
  },
  {
    id: 43,
    question: "...(ember)nek megértő vezetője van.",
    type: "hierarchia",
    value: 0,
  },
  {
    id: 44,
    question: "...szüntelenül fejlesztheti, tökéletesítheti önmagát.",
    type: "munkateljesítmény",
    value: 0,
  },
  {
    id: 45,
    question: "...új ötleteire mindig szükség van.",
    type: "kreativitás",
    value: 0,
  },
];

export default workMotivationQuestions;
