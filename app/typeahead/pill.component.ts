import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TypeAheadItem } from './typeahead.component';

@Component({
    selector: 'Pill',
    
    styles: [`
        div {
            border: 1px solid #555;
            color: #333;
            border-radius: 5px;
            padding: 2px 5px;
            margin-right: 5px;
            display: inline-block;
        }
    `],
    template: `
        <div
            (click)="handleItemClick($event)">
            {{ item.display }}
        </div>
    `
})
export class Pill {
    @Input() item: TypeAheadItem;
    @Output() itemClicked: EventEmitter<any> = new EventEmitter();

    state: string = 'in';
    handleItemClick (event: MouseEvent) {
        this.itemClicked.emit(this.item);
    }
}