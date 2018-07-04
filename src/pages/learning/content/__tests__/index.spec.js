import Differencify from "differencify";

const differencify = new Differencify();

beforeAll(async () => {
  await differencify.launchBrowser({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
});

afterAll(async () => {
  await differencify.cleanup();
});

describe("learning/content index visual regression test", () => {
  it(
    "looks correct at desktop resolution",
    async () => {
      await differencify
        .init({
          testName: "content-index-visual-test"
        })
        .newPage()
        .setViewport({ width: 1600, height: 600 })
        .goto("http://localhost:9000/learning/content")
        .screenshot({
          fullPage: true
        })
        .toMatchSnapshot()
        .close()
        .end();
    },
    20000
  );
});
