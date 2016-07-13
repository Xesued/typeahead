import { Component } from '@angular/core';
import { Typeahead, TypeAheadItem } from './typeahead/typeahead.component';

@Component({
    selector: 'typeahead-sandbox',
    directives: [Typeahead],
    template: `
        <div>
            <h1>Typeahead!</h1>
            <Typeahead
                [options]="options"
            ></Typeahead>
        </div>`
})
export class AppComponent {

    options: TypeAheadItem[] = [
        {display: 'Nathan Norton', value: 1},
        {display: 'Jim PM', value: 2},
        {display: 'Sue Reviewer', value: 3},
        {display: 'Joe Planner', value: 4},
        {display: 'Sam Requester', value: 5}
    ]
}