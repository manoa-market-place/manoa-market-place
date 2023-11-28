import { Selector } from 'testcafe';

class EditProfilePage {
  constructor() {
    this.pageId = '#edit-profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasForm(testController) {
    await testController.expect(Selector('#edit-profile-form').exists).ok();
  }
}

export const editProfilePage = new EditProfilePage();
