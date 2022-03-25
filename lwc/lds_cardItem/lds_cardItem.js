import { LightningElement, api } from 'lwc';

export default class Lds_cardItem extends LightningElement {
    @api iconName;
    @api size;
    @api title;
}