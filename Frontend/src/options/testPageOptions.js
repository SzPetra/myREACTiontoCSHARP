import ChairLampTestPage from "../testPage/chairLampTest/components/ChairLampTestPage";
import WorkMotivationTestPage from "../testPage/workMotivationTest/components/WorkMotivationTestPage";
import WorkMotivationTestPageReadLoud from "../testPage/workMotivationTest/components/WorkMotivationTestPageReadLoud";
import WorkMotivationTestPageSpeechRecognition from "../testPage/workMotivationTest/components/WorkMotivationTestPageSpeechRecognition";

const testPageOptions = [
  {
    id: 1,
    option: "Chair-lamp test",
    pageLink: "/tests/chair-lamp-test",
    component: <ChairLampTestPage />,
  },
  {
    id: 2,
    option: "Work motivation test",
    pageLink: "/tests/work-motivation-test",
    component: <WorkMotivationTestPage />,
  },
  {
    id: 3,
    option: "Work motivation test Read out loud",
    pageLink: "/tests/work-motivation-test/read-out-loud",
    component: <WorkMotivationTestPageReadLoud />,
  },
  {
    id: 4,
    option: "Work motivation test with Speech Recognition",
    pageLink: "/tests/work-motivation.test/speech-recognition",
    component: <WorkMotivationTestPageSpeechRecognition />,
  },
];

export default testPageOptions;
