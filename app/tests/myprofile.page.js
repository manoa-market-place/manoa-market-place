import { Selector } from 'testcafe';

class MyProfilePage {
  constructor() {
    this.pageId = '#my-profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasProfile(testController) {
    await testController.expect(Selector('#my-profile').exists).ok();
  }

  async gotoEditProfilePage(testController) {
    await testController.click('#edit-profile');
  }
}

export const myProfilePage = new MyProfilePage();
