import { Selector } from 'testcafe';

class AddServicePage {
  constructor() {
    this.pageId = '#add-service-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks that the form is present. */
  async hasForm(testController) {
    await testController.expect(Selector('#add-service-form').exists).ok();
  }
}

export const addServicePage = new AddServicePage();
