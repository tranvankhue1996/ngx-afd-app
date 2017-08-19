import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    ProfileComponent,
    routesProfile
} from './index';

@NgModule({
    imports: [
        RouterModule.forChild(routesProfile)
    ],
    declarations: [ ProfileComponent]
})

export class ProfileModule {}