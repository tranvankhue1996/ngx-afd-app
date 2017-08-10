import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';

import { CalendarModule } from 'primeng/primeng';


@NgModule({
    imports: [CalendarModule],
    declarations: [TestComponent],
    bootstrap: [TestModule]
})

export class TestModule { }