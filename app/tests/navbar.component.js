import { Selector } from 'testcafe';

const visible = async (testController) => {
  const vis = await Selector('#basic-navbar-nav').visible;
  if (!vis) {
    await testController.click('button.navbar-toggler');
  }
};

class NavBar {
  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    await visible(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    await visible(testController);
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await visible(testController);
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    await visible(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  async gotoAddProductPage(testController) {
    await visible(testController);
    await testController.click('#sell-things');
    await testController.click('#navbar-add-product');
  }

  async gotoMyProfilePage(testController) {
    await visible(testController);
    await testController.click('#navbar-current-user');
    await testController.click('#user-dropdown-profile');
  }

  async gotoAddServicePage(testController) {
    await visible(testController);
    await testController.click('#sell-things');
    await testController.click('#navbar-add-service');
  }

  async gotoListProductPage(testController) {
    await visible(testController);
    await testController.click('#navbar-list-product');
  }

  async gotoListCartGoodsPage(testController) {
    await visible(testController);
    await testController.click('#navbar-list-cart');
  }

  async gotoListGoodsPage(testController) {
    await visible(testController);
    await testController.click('#navbar-list-goods');
  }

  async gotoListServicesPage(testController) {
    await visible(testController);
    await testController.click('#navbar-list-services');
  }

  async gotoListProfilesPage(testController) {
    await visible(testController);
    await testController.click('#navbar-current-user');
    await testController.click('#user-dropdown-admin');
  }

  async gotoAdminPage(testController) {
    await visible(testController);
    await testController.click('#navbar-admin');
  }
}

export const navBar = new NavBar();
