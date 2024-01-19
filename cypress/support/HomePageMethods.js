import AboutUsPage from "./Pages/AboutUsPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";


class HomePageMethods{
    clickOnPage(page){
      switch (page){
        case 'Home':
          HomePage.homeBtn().click();
            break; 
        case 'Contact':
          HomePage.contactBtn().click();
            break;
        case 'About us':
          HomePage.aboutUsBtn().click();
            break; 
        case 'Cart':
          HomePage.cartBtn().click();
            break;
        case 'Log in':
          HomePage.loginBtn().click();
            break; 
        case 'Sign up':
          HomePage.signUpBtn().click();
            break;
        default:
            throw new Error(`Page Not Supported: ${page}`);
     }
    }
    
    clickBtnSides(element) {
      switch (element){
        case 'previus button':
          HomePage.btnPreviousCarousel().click();
            break; 
        case 'left side':
          HomePage.leftSideCarousel().click();
            break;
        case 'next button':
          HomePage.btnNextCarousel().click();
            break; 
        case 'right side':
          HomePage.rightSideCarousel().click();
            break;
        default:
            throw new Error(`Unsupported element: ${element}`);
      }
    }

    clickIndicatorBtn(element){
      switch (element){
          case "first":
            HomePage.indicator01Btn().click();
              break;
          case "second":
            HomePage.indicator2Btn().click();
              break;
          case "third":
            HomePage.indicator03Btn().click();
              break;
          default:
              throw new Error(`Unsupported element: ${element}`);
      }
    }

    verifyPage(page){
      switch (page){
        case 'Home':
          HomePage.verifyPage();
            break; 
        case 'Contact':
          ContactPage.verifyPage();
            break;
        case 'About us':
          AboutUsPage.verifyPage();
            break; 
        case 'Cart':
          CartPage.verifyPage();
            break;
        case 'Log in':
          LoginPage.verifyPage();
            break; 
        case 'Sign up':
          SignUpPage.verifyPage();
            break;
        default:
            throw new Error(`Unsupported page: ${page}`);
      }
    }
    CheckImageIndicator(imageNumber) {
      switch (imageNumber) {
        case "first":
          HomePage.indicator01Btn().should('have.class', 'active');
            break;
        case "second":
          HomePage.indicator02Btn().should('have.class', 'active');
            break;
        case "third":
          HomePage.indicator03Btn().should('have.class', 'active');
            break;
        default:
            throw new Error(`Not valid image: ${imageNumber}`);
        }
      }
}
module.exports = new HomePageMethods();