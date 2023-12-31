import { Selector } from 'testcafe';

class ListProductPage {
  constructor() {
    this.pageId = '#list-product-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listProductPage = new ListProductPage();
