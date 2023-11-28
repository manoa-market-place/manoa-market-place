import { Selector } from 'testcafe';

class AddProductPage {
  constructor() {
    this.pageId = '#add-product-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks that the form is present. */
  async hasForm(testController) {
    await testController.expect(Selector('#add-product-form').exists).ok();
  }
}

export const addProductPage = new AddProductPage();
