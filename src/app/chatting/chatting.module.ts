import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    ChattingComponent,
    routesChatting,
    ChattingService
} from './index';

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(routesChatting)
    ],
    declarations: [ ChattingComponent ],
    providers: [ ChattingService ]
})

export class ChattingModule {}