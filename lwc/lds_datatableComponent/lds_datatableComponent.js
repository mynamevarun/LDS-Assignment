import { LightningElement } from 'lwc';
import getOppData from '@salesforce/apex/LDS_CommonController.getOppData';

const COLUMNS = [
    {
        fieldName: 'NameUrl',
        label: 'Opportunity Name',
        type: 'url',
        typeAttributes: {
            label: { fieldName: 'Name' },
            target: '_self',
            tooltip: { fieldName: 'Name' }
        }
    },
    {
        fieldName: 'AccountName',
        label: 'Account Name'
    },
    {
        fieldName: 'CloseDate',
        label: 'Close Date',
        type: 'date-local',
        typeAttributes: {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
    },
    {
        fieldName: 'StageName',
        label: 'Stage'
    },
    {
        fieldName: 'Probability',
        label: 'Confidence'
    },
    {
        fieldName: 'Amount',
        label: 'Amount'
    }
];

export default class Lds_datatableComponent extends LightningElement {
    oppData = [];
    async connectedCallback(){
        const data = await getOppData();
        console.log(JSON.parse(JSON.stringify(data)));
        data.map(s=>{
            s.NameUrl = '/' + s.Id;
            s.AccountName = s.Account?.Name;
        });
        this.oppData = data;
    }
    get data(){
        return this.oppData;
    }

    get columns(){
        return COLUMNS;
    }
}