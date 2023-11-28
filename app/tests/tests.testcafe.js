import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addProductPage } from './addproduct.page';
import { myProfilePage } from './myprofile.page';
import { homePage } from './home.page';
import { editProfilePage } from './editprofile.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@hawaii.edu', password: 'changeme' };

/** Sign in action with the given credentials. */
const signIn = async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
};

fixture('manoa-market-place localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await signIn(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that AddProduct page shows up', async (testController) => {
  await signIn(testController);
  await navBar.gotoAddProductPage(testController);
  await addProductPage.isDisplayed(testController);
  await addProductPage.hasForm(testController);
});

test('Test that MyProfile page shows up', async (testController) => {
  await signIn(testController);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.isDisplayed(testController);
  await myProfilePage.hasProfile(testController);
});

test('Test that Home page shows up', async (testController) => {
  await signIn(testController);
  await homePage.isDisplayed(testController);
});

test('Test that EditProfile page shows up', async (testController) => {
  await signIn(testController);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.isDisplayed(testController);
  await myProfilePage.hasProfile(testController);
  await myProfilePage.gotoEditProfilePage(testController);
  await editProfilePage.hasForm(testController);
});
