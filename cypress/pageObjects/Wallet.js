class Wallet {
      getWallet(){
        return cy.contains('Wallet')
      }
      getWithdrawal(){
        return cy.contains('Withdrawal')
      }
      getPageTitle(){
        return cy.get('.top_section')
      }
      getWalletTopUp(){
        return cy.contains('Top up wallet')
      }
      getTopUpModal(){
        return cy.get('.modal')
      }
      getXBtn(){
        return cy.get('.top_section > .material-icons-outlined')
      }
      getSelAcct(){
        return cy.get('#selectAccount')
      }
      getInputField(){
        return cy.get('.v-money3')
        .should('exist')
      }
      getContBtn(){
        return cy.contains('Continue')
      }
      getPinField(){
        return cy.get('.pin-grid input')
      }
      
} 
export default Wallet;