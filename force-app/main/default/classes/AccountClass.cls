public with sharing class AccountClass {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    List<Account> accountList = [
      SELECT Id, Name, Type, Industry, Phone, Date__c
      FROM Account
    ];
    return accountList;
  }

  @AuraEnabled
  public static String updateAccount(Account recordToUpdate) {
    System.debug(recordToUpdate);
    update recordToUpdate;
    return recordToUpdate.Id;
  }
}
