import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'Picklist',
    template: `
        <ul >
            <li *ngFor="let item of options"
                (click)="handleItemClick(item)">
                {{item.display}}
            </li>
        </ul>
    `
})
export class Picklist {

    @Input() show: boolean;
    @Input() options: any[];
    @Output() itemClicked: EventEmitter<any> = new EventEmitter();

    handleItemClick (item: any) {
        this.itemClicked.emit(item);
    }
}