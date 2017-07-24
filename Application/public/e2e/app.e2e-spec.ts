import { MongooseDemoPage } from './app.po';

describe('mongoose-demo App', () => {
  let page: MongooseDemoPage;

  beforeEach(() => {
    page = new MongooseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
