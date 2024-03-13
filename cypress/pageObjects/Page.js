class Page {

  getUserNane(){
    return cy.get('#user-name').should('be.visible');
  }
  getLogin(){
    return cy.get('input[type="submit"]').should('be.visible')
  }
  getLogOut(){
    return cy.get('#logout_sidebar_link')
  }
  getPassword(){
    return cy.get('#password').should('be.visible')
  }
  getProdPageTitle(){
    return cy.get('.title')
  }
  getSideBarDrpdown(){
    return cy.get('#react-burger-menu-btn')
  }
  getTshirt1(){
    return cy.contains('Sauce Labs Bolt T-Shirt')
  }
  getTshirt1Details(){
    return cy.get('.inventory_details_desc_container')
  }
  getAddToCartBtn(){
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
  }
  getRmvFrmCartBtn(){
    return cy.contains('Remove')
  }
  getCart(){
    return cy.get('.shopping_cart_link')
  }
  getCartIconitems(){
    return cy.get('.shopping_cart_badge')
  }
  getCartItems(){
    return cy.get('.cart_quantity')
  }
  getCartDeets(){
    return cy.get('.cart_item')
  }
  getCartLabel(){
    return cy.get('.cart_item_label')
  }
  getChkOutBtn(){
    return cy.get('[data-test="checkout"]')
  }
  getContShoppingBtn(){
    return cy.get('[data-test="continue-shopping"]')
  }
  getChkOutInfo(){
    return cy.get('.checkout_info')
  }
  getChkOutFstName(){
    return cy.get('[data-test="firstName"]')
  }
  getChkOutLstName(){
    return cy.get('[data-test="lastName"]')
  }
  getChkOutPstCode(){
    return cy.get('[data-test="postalCode"]')
  }
  getConBtn(){
    return cy.get('[data-test="continue"]')
  }
  getOrderSummary(){
    return cy.get('#checkout_summary_container')
  }
  getFinishBtn(){
    return cy.get('[data-test="finish"]')
  }
  getOrderConfirmModal(){
    return cy.get('#checkout_complete_container')
  }
  getBckToHmBtn(){
    return cy.get('[data-test="back-to-products"]')
  }
}
export default Page;