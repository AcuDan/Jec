import Page from "../pageObjects/Page.js";
import jsonData from "../fixtures/jsonData.config.json"



const page = new Page();
const username = jsonData.username 
const password = jsonData.password
const ProductPageTitle = jsonData.Products_Page_Title
const stagingUrl = jsonData.stagingUrl

Cypress.Commands.add('tests', () => {

    // 2. Enter valid credentials to log in. 
    page.getUserNane().type(username)
    page.getPassword().type(password)
    page.getLogin().click()

    //3. Verify that the login is successful and the user is redirected to the products page. 
    page.getProdPageTitle().should('have.text',ProductPageTitle )
    page.getSideBarDrpdown().should('exist')

    // 4. Select a T-shirt by clicking on its image or name. 
    page.getTshirt1().click()

    // 5. Verify that the T-shirt details page is displayed. 
    page.getTshirt1Details().within(() => {
        cy.contains('Sauce Labs Bolt T-Shirt')
        cy.contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        cy.contains('$15.99')
        cy.contains('Add to cart')
    })

    // 6. Click the "Add to Cart" button. 
    page.getRmvFrmCartBtn().should('not.exist')
    cy.contains('Add to cart').click()

    //  7. Verify that the T-shirt is added to the cart successfully. 
    page.getRmvFrmCartBtn().should('exist')
    page.getCartIconitems().should('contain', '1')

    //8. Navigate to the cart by clicking the cart icon or accessing the cart page directly.  
    page.getCart().click()

    // 9. Verify that the cart page is displayed. 
    page.getProdPageTitle().should('have.text', 'Your Cart')
    page.getCartLabel().within(() => {
        cy.contains('Sauce Labs Bolt T-Shirt')
        cy.contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        cy.contains('$15.99')
        cy.contains('Remove')
    })
    page.getChkOutBtn().should('exist')
    page.getContShoppingBtn().should('exist')

    // 10. Review the items in the cart and ensure that the T-shirt is listed with the correct details (name, price,  quantity, etc.).  
    //  I dont understand the second part of this line(ensuring tshirt is listed with correct details)

    cy.contains('Remove').click()

    //  11. Click the "Checkout" button. 
    page.getChkOutBtn().click()

    // 12. Verify that the checkout information page is displayed. 
    page.getProdPageTitle().should('have.text', 'Checkout: Your Information')
    page.getChkOutInfo().within(() => {
        page.getChkOutFstName().should('exist')
        page.getChkOutLstName().should('exist')
        page.getChkOutPstCode().should('exist')
    })

    //  13. Enter the required checkout information (e.g., name, shipping address, payment details). 
    page.getChkOutFstName().type('Daniel')
    page.getChkOutLstName().type('Soga')
    page.getChkOutPstCode().type('1000001')

    // 14. Click the "Continue" button. 
    page.getConBtn().click()

    // 15. Verify that the order summary page is displayed, showing the T-shirt details and the total amount. 

    page.getOrderSummary().within(() => {
        cy.contains('QTY')
        cy.contains('Description')
        cy.contains('Payment Information')
        cy.contains('SauceCard #31337')
        cy.contains('Shipping Information')
        cy.contains('Shipping Information')
        cy.contains('Free Pony Express Delivery!')
        cy.contains('Price Total')
        cy.contains('Item total: $0')
        cy.contains('Tax: $0.00')
        cy.contains('Total: $0.00')
    })
     

 	// 16. Click the "Finish" button. 
    page.getFinishBtn().click()

   // 17. Verify that the order confirmation page is displayed, indicating a successful purchase. 
   page.getOrderConfirmModal().within(() => {
        cy.contains('Thank you for your order!')
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
   })

   // 18. Logout from the application. 

   page.getBckToHmBtn().should('have.text', 'Back Home').click()
   page.getSideBarDrpdown().click()
   page.getLogOut().should('have.text', 'Logout').click()

   //  19. Verify that the user is successfully logged out and redirected to the login page.  

   page.getLogin().should('exist')
   cy.url().then((currentUrl) => {
    expect(currentUrl).to.equal(stagingUrl);
  });
  


});