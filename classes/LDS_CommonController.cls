public with sharing class LDS_CommonController {
    @AuraEnabled
    public static List<Opportunity> getOppData(){
        try {
            List<Opportunity> opportunities = [SELECT Id, Name, AccountId, Account.Name, CloseDate, StageName, Probability, Amount FROM Opportunity order by Name Limit 8];
            return opportunities;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
