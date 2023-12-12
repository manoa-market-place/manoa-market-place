import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addProductPage } from './addproduct.page';
import { myProfilePage } from './myprofile.page';
import { homePage } from './home.page';
import { editProfilePage } from './editprofile.page';
import { addServicePage } from './addservice.page';
import { listProductPage } from './listproduct.page';
import { listCartGoodsPage } from './listcartgoods.page';
import { listGoodsPage } from './listgoods.page';
import { listServicesPage } from './listservices.page';
import { listProfilesPage } from './listprofiles.page';
import { adminPage } from './admin.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@hawaii.edu', password: 'changeme' };
const adminCredentials = { username: 'admin@hawaii.edu', password: 'admin' };

/** Sign in action with the given credentials. */
const signInUser = async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
};

const signInAdmin = async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
};

fixture('manoa-market-place localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that Home page shows up', async (testController) => {
  await signInUser(testController);
  await homePage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await signInUser(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that MyProfile page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.isDisplayed(testController);
  await myProfilePage.hasProfile(testController);
});

test('Test that EditProfile page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.isDisplayed(testController);
  await myProfilePage.hasProfile(testController);
  await myProfilePage.gotoEditProfilePage(testController);
  await editProfilePage.hasForm(testController);
});

test('Test that AddProduct page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoAddProductPage(testController);
  await addProductPage.isDisplayed(testController);
  await addProductPage.hasForm(testController);
});

test('Test that AddService page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoAddServicePage(testController);
  await addServicePage.isDisplayed(testController);
  await addServicePage.hasForm(testController);
});

test('Test that ListProduct page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoListProductPage(testController);
  await listProductPage.isDisplayed(testController);
});

test('Test that ListCartGoods page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoListCartGoodsPage(testController);
  await listCartGoodsPage.isDisplayed(testController);
});

test('Test that ListGoods page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoListGoodsPage(testController);
  await listGoodsPage.isDisplayed(testController);
});

test('Test that ListServices page shows up', async (testController) => {
  await signInUser(testController);
  await navBar.gotoListServicesPage(testController);
  await listServicesPage.isDisplayed(testController);
});

test('Test that Admin can access all admin pages', async (testController) => {
  await signInAdmin(testController);
  await navBar.gotoListProfilesPage(testController);
  await listProfilesPage.isDisplayed(testController);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
});
