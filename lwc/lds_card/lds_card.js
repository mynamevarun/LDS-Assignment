import { LightningElement } from 'lwc';

export default class Lds_card extends LightningElement {
    cards = [
        {
            key: 0,
            iconName: 'standard:account',
            size: 'small',
            title: 'Accounts',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur officiis nihil eveniet accusamus ut perferendis saepe provident sed dolor dolorum ducimus sunt alias, voluptates velit fuga voluptate soluta placeat.'
        },
        {
            key: 1,
            iconName: 'standard:sales_cadence_target',
            size: 'small',
            title: 'Customers Targets',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur officiis nihil eveniet accusamus ut perferendis saepe provident sed dolor dolorum ducimus sunt alias, voluptates velit fuga voluptate soluta placeat.'
        },
        {
            key: 0,
            iconName: 'standard:contract_line_item',
            size: 'small',
            title: 'User Contracts',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur officiis nihil eveniet accusamus ut perferendis saepe provident sed dolor dolorum ducimus sunt alias, voluptates velit fuga voluptate soluta placeat.'
        }
    ]
}