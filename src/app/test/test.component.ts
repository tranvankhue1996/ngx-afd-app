import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test-primeng',
    templateUrl: 'test.component.html',
    styleUrls: [ 'test.component.css' ]
})

export class TestComponent implements OnInit {

    value: Date;
    
    ngOnInit() {
    }


}