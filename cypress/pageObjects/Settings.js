class Settings {
      getSettingsMod(){
        return cy.get('a[href="/settings"]')
      }
      getTitle(){
        return cy.get('.title')
      }
      getPersDet(){
        return cy.contains('Personal Details')
      }
      getSection(){
        return cy.get('.section_title')
      }
      getEditProf(){
        return cy.get('.edit_profile')
      }
      getModalTitle(){
        return cy.get('.modal_title')
      }
      getSubModalTitle(){
        return cy.get('.modal_subtitle')
      }
      getFirstName(){
        return cy.get('input[placeholder="Enter your First Name"]');
      }
      getLastName(){
        return cy.get('input[placeholder="Enter your Last Name"]');
      }
      getDob(){
        return cy.get('#dob')
      }
      getGender(){
        return cy.get('#gender')
      }
      getBank(){
        return cy.get('#bank')
      }
      getAcctInPut(){
        return cy.get('#accountNumber')
      }
      getAcctName(){
        return cy.get('.holder_input')
      }
      getDeletebankbtn(){
        return cy.get('.delete_btn>svg')
      }
      getSecuritySec(){
        return cy.contains('Security')
      }
      getContBtn(){
        return cy.contains('Contains')
      }
      getCards(){
        return cy.contains('Cards')
      }
      getAddnewCard(){
        return cy.get('.add_new')
      }
      getBankAcctMana(){
        return cy.contains('Bank Account Management')
      }
      getSecTit(){
        return cy.get('.section_title')
      }
      getAddNewBank(){
        return cy.get('.add_new')
      }
      getAddNewBankModalXBtn(){
        return cy.get('.top_section > .material-icons-outlined')
      }
      getAddNewBankModal(){
        return cy.get('.modal')
      }
      getEmpStatus(){
        return cy.get('#employment-status')
      }
      getJobTitleOptional(){
        return cy.get('#employment-status')
      }
      getAddress(){
        return cy.get('#address')
      }
      getCountry(){
        return cy.get('#country')
      }
      getState(){
        return cy.get('#state')
      }
      getCity(){
        return cy.get('#city')
      }
      getContBtn(){
        return cy.contains('Continue')
      }
      getSettingsBox(){
        return cy.get('.section_ctn')
      }
      getPasswordUpdateBtn(){
        return cy.get('.action-btn')
      }
      getCurrentPass(){
        return cy.get(':nth-child(1) > .secret-key-input-ctn > #password')
      }
      getNewPass(){
        return cy.get(':nth-child(2) > .secret-key-input-ctn > #password')
      }
      getConNewPass(){
        return cy.get(':nth-child(3) > .secret-key-input-ctn > #password')
      }
      getSetAsDefault(){
        return cy.get('.set_bank_default')
      }
      getEDITProfileIMge(){
        return cy.get('.edit_image')
      }
}
export default Settings;