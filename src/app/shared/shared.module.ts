import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { AccordionModule } from 'primeng/components/accordion/accordion';

// const PRIMENG_DEPENDENCIES = [
    
// ];

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
} from '@angular/material';

const MATERIALNG_DEPENDENCIES = [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
];

import { CardComponent, JumbotronComponent } from '../layout';

@NgModule({
    imports: [
        // Primeng deps
        // PRIMENG_DEPENDENCIES,
        // Material deps
        MATERIALNG_DEPENDENCIES
    ],
    declarations: [
        JumbotronComponent,
        CardComponent
    ],
    exports: [
        JumbotronComponent,
        CardComponent,
        TranslateModule,
        // Primeng deps
        // PRIMENG_DEPENDENCIES,
        // Material deps
        MATERIALNG_DEPENDENCIES
    ]
})
export class SharedModule {}