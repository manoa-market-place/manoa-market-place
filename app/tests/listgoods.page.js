import { Selector } from 'testcafe';

class ListGoodsPage {
  constructor() {
    this.pageId = '#list-goods-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listGoodsPage = new ListGoodsPage();
