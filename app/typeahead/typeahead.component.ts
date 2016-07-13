import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Picklist } from './picklist.component';
import { Pill } from './pill.component';

export interface TypeAheadItem {
    display: string;
    value: any;
}

@Component({
    selector: 'Typeahead',
    directives: [Picklist, Pill],
    // animations: [
    //     trigger('flyInOut', [
    //         state('in', style({
    //             height: '100%',
    //             opacity: 1,
    //         })),
    //         transition('void => in', [
    //             style({
    //                 height: '0px',
    //                 opacity: 0
    //             }),
    //             animate('2000ms ease-in')
    //         ]),
    //         transition('* => void', [
    //            animate(2000, style({height: '0px', opacity: 0}))
    //         ])
    //     ])
    // ],
    template: `
        <div>
            <input type="text"
                (keyup)="handleFilterChange($event)" />
            
            <Pill *ngFor="let value of values"
                [item]="value"
                (itemClicked)="handlePillClick($event)"></Pill>


            <Picklist 
                [show]="showPicklist"
                [options]="picklistOptions"
                (itemClicked)="handlePicklistSelect($event)"></Picklist>
        </div>
    `
})
export class Typeahead {

    @Input() options: TypeAheadItem[];
    @Output() change: EventEmitter<any> = new EventEmitter<any>();

    filterValue: string = '';
    values: TypeAheadItem[] = [];
    state: string = 'in';

    handleFilterChange (event: KeyboardEvent) {
        this.filterValue = (<HTMLInputElement>event.target).value;
    }

    handlePicklistSelect (item: TypeAheadItem) {
        this.values.push(item);
    }

    handlePillClick (item: TypeAheadItem) {
        let index = this.values.indexOf(item);
        if (index > -1) {
            this.values.splice(index,1);   
        }
    }

    _matchesFilter (item: TypeAheadItem) {
        return item.display.indexOf(this.filterValue) > -1;
    }

    get picklistOptions() {
        let plOptions = [];

        if (this.filterValue === '' ){
            return plOptions;
        }

        for (let i = 0; i < this.options.length; i++ ){
            let currOption = this.options[i];
            if (this.values.indexOf(currOption) === -1 && this._matchesFilter(currOption)) {
                plOptions.push(currOption);
            }
        }
        return plOptions;
    }

    get showPicklist () {
        return this.filterValue !== '';
    }
}
