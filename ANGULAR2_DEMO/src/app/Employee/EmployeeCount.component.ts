import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'employee-count',
    templateUrl: 'app/Employee/EmployeeCount.component.html'
    
})

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = "All";

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    @Input()
    programmers: number;
    @Input()
    managers: number;
    @Input()
    directors: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}