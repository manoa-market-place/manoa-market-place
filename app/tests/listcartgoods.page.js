import { Selector } from 'testcafe';

class ListCartGoodsPage {
  constructor() {
    this.pageId = '#list-cart-goods-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listCartGoodsPage = new ListCartGoodsPage();
