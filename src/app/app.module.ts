import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatInputModule, MatRadioModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';

import {FormComponent} from './form/form.component';
import {DialogComponent} from './dialog/dialog.component';
import {MY_FORMAT} from '@app/utilities/datepickerFormat';
import {DvPipe} from './pipes/dv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogComponent,
    DvPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMomentDateModule,
    NgxMatSelectSearchModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT}
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
