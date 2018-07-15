import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

import {Utils} from '@app/utilities';
import {countries} from '@app/utilities/countries';
import {courses} from '@app/utilities/coursesLevel';
import {district} from '@app/utilities/district';
import {family} from '@app/utilities/family';
import {childrens} from '@app/utilities/children';
import {places} from '@app/utilities/placeHeOccupies';
import {parentsSituation} from '@app/utilities/parentsSituation';
import {InputsValidators} from '@app/utilities/inputs.validators';
import {Postulation} from '@app/models/postulation';

import {POSTULATION_CONFIG as config} from '@app/postulation.config';
import {DialogComponent} from '@app/dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public year: string;
  public month: string;
  public day: string;
  public dayName: string;
  public family: Array<string>;
  public childrens: Array<string>;
  public places: Array<string>;
  public parentsSituation: Array<string>;
  public firstStepPostulationForm: FormGroup;
  public secondStepPostulationForm: FormGroup;
  public thirdStepPostulationForm: FormGroup;
  public fourthStepPostulationForm: FormGroup;
  public fifthStepPostulationForm: FormGroup;
  public sixthStepPostulationForm: FormGroup;
  public seventhStepPostulationForm: FormGroup;
  public eighthStepPostulationForm: FormGroup;
  public ninethStepPostulationForm: FormGroup;

  private postulation: Postulation;

  public filteredCountries: Observable<any[]>;
  private countries: any;

  public filteredCourses: Observable<any[]>;
  private courses: any;

  public filteredDistricts: Observable<any[]>;
  private districts: any;

  private monthNames: Array<any>;

  constructor(private _formBuilder: FormBuilder,
              private _dialog: MatDialog) {
  }

  ngOnInit() {

    this.postulation = new Postulation({});

    this.countries = countries.list;
    this.courses = courses.list;
    this.districts = district.list;

    this.family = family.list;
    this.childrens = childrens.list;
    this.places = places.list;
    this.parentsSituation = parentsSituation.list;

    this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayp', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Novimiembre', 'Diciembre'
    ];

    this.createFirstStepPostulationForm();

    this.createSecondStepPostulationForm();

    this.createThirdStepPostulationForm();

    this.createFourthStepPostulationForm();

    this.createFifthStepPostulationForm();

    this.createSixthStepPostulationForm();

    this.createSeventhStepPostulationForm();

    this.createEighthStepPostulationForm();

    this.createNinethStepPostulationForm();

    this.filteredCountries = this.firstStepPostulationForm.get('selectCountriesFilter').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCountries(val))
      );

    this.filteredCourses = this.firstStepPostulationForm.get('selectCoursesFilter').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterCourses(val))
      );

    this.filteredDistricts = this.firstStepPostulationForm.get('selectDistrictsFilter').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterDistricts(val))
      );

    this.setLocaleDate();

  }

  private fillPostulationModel() {

    this.firstStepPostulationForm.value.studentRunDv = Utils.getDv(this.firstStepPostulationForm.value.studentRun);

    this.secondStepPostulationForm.value.fatherRunDv = Utils.getDv(this.secondStepPostulationForm.value.fatherRun);

    this.thirdStepPostulationForm.value.motherRunDv = Utils.getDv(this.thirdStepPostulationForm.value.motherRun);

    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.firstStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.secondStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.thirdStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.fourthStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.fifthStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.sixthStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.seventhStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.eighthStepPostulationForm.value));
    Object.assign(this.postulation, Utils.getValueFromControlformToModel(this.postulation, this.ninethStepPostulationForm.value));

  }

  private setLocaleDate(): void {

    let d = new Date();
    this.dayName = d.toLocaleString('es-es', {weekday: 'long'});
    this.day = ('0' + d.getDate()).slice(-2).toString();
    this.month = this.monthNames[d.getMonth()];
    this.year = d.getFullYear().toString();

  }

  private filterCountries(name: string): any {

    return this.countries.filter(country_ =>
      country_.name.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }

  private filterCourses(name: string): any {

    return this.courses.filter(course_ =>
      course_.name.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }

  private filterDistricts(name: string): any {

    return this.districts.filter(district_ =>
      district_.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }

  private createFirstStepPostulationForm(): void {

    this.firstStepPostulationForm = this._formBuilder.group({
      studentRun: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueNumbers]],
      studentRunDv: [''],
      studentName: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentLastname: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentNationality: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentBirthday: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueDate]],
      studentPhone: ['', [Validators.required, Validators.maxLength(9), InputsValidators.checkValidValueNumbers]],
      studentAddres: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentCondominium: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentAddresDivision: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentCourseLevel: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentSchoolWhereHeComes: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentAnotherPostulatedSchool: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      selectCountriesFilter: [''],
      selectDistrictsFilter: [''],
      selectCoursesFilter: ['']
    });

  }

  private createSecondStepPostulationForm(): void {

    this.secondStepPostulationForm = this._formBuilder.group({
      fatherRun: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueNumbers]],
      fatherRunDv: [''],
      fatherName: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherLastname: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherBirthday: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueDate]],
      fatherPhone: ['', [Validators.required, Validators.maxLength(9), InputsValidators.checkValidValueNumbers]],
      fatherSecondary: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherUniversityStudies: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherProfession: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherWhereHeWorks: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherWorksPosition: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      fatherEmail: ['', [Validators.maxLength(100), Validators.email]]
    });

  }

  private createThirdStepPostulationForm(): void {

    this.thirdStepPostulationForm = this._formBuilder.group({
      motherRun: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueNumbers]],
      motherRunDv: [''],
      motherName: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherLastname: ['', [Validators.required, Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherBirthday: ['', [Validators.required, Validators.maxLength(8), InputsValidators.checkValidValueDate]],
      motherPhone: ['', [Validators.required, Validators.maxLength(9), InputsValidators.checkValidValueNumbers]],
      motherSecondary: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherUniversityStudies: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherProfession: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherWhereHeWorks: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherWorksPosition: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      motherEmail: ['', [Validators.maxLength(100), Validators.email]]
    });

  }

  private createFourthStepPostulationForm(): void {

    this.fourthStepPostulationForm = this._formBuilder.group({
      studentLivesWith: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      numberOfChildren: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      placeThatHeOccupies: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      parentsSituations: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      familySituationOthersSpecifications: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]]
    });

    this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].disable();

  }

  private createFifthStepPostulationForm(): void {

    this.fifthStepPostulationForm = this._formBuilder.group({
      hasBeenAttendedBySpecialist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      psychologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      neurologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      psychiatrist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      ophthalmologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentBackgroundOthers: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentBackgroundOthersSpecifications: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      specialistName: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      dateLastConsultation: ['', [Validators.maxLength(8), InputsValidators.checkValidValueDate]],
      reason: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

    this.fifthStepPostulationForm.disable();

    this.fifthStepPostulationForm.controls['hasBeenAttendedBySpecialist'].enable();

  }

  private createSixthStepPostulationForm(): void {

    this.sixthStepPostulationForm = this._formBuilder.group({
      reasonsForApplicationDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  private createSeventhStepPostulationForm(): void {

    this.seventhStepPostulationForm = this._formBuilder.group({
      studentDescriptionDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  private createEighthStepPostulationForm(): void {

    this.eighthStepPostulationForm = this._formBuilder.group({
      personWhoInscribesName: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      personWhoInscribesLastname: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      personWhoInscribesRelationship: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      personWhoInscribesOthers: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  private createNinethStepPostulationForm(): void {

    this.ninethStepPostulationForm = this._formBuilder.group({
      attorneyDeclaration: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      attorneyFullName: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      agreeDeclaration: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]]
    });

  }

  private OpenDialogToShow(postulation: Postulation): void {

    this._dialog.open(DialogComponent, {
      data: postulation,
      height: '600px',
      width: '600px'
    });

  }

  public parentsSituationsCheckSelected(e): void {

    if (e.value === 'Otros (especificar)') {
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].reset();
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].enable();
    } else {
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].reset();
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].disable();
    }

  }

  public hasBeenAttendedBySpecialistCheckSelected(e): void {

    if (e.value === 'SI') {

      this.fifthStepPostulationForm.enable();

      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].disable();

    } else {

      Object.keys(this.fifthStepPostulationForm.controls).forEach(key => {

        if (key !== 'hasBeenAttendedBySpecialist') {
          this.fifthStepPostulationForm.controls[key].reset();
        }
      });

      this.fifthStepPostulationForm.disable();

    }

    this.fifthStepPostulationForm.controls['hasBeenAttendedBySpecialist'].enable();

  }

  public studentBackgroundOthersCheckSelected(e): void {

    if (e.checked) {

      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].enable();

    } else {

      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].disable();

    }

  }

  public agreeDeclarationCheckSelected(e): void {

    if (e.checked) {

      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].enable();

    } else {

      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentBackgroundOthersSpecifications'].disable();

    }

  }

  public getErrorMessage(formGroup: string, control: string): string {

    if (control) {

      let statusControl = this[formGroup].get(control);

      if (statusControl.hasError('required')) {
        return config.messageFormValidation.required;
      }
      else if (statusControl.hasError('maxlength')) {
        return config.messageFormValidation.maxlength;
      }
      else if (statusControl.hasError('validValue')) {
        return config.messageFormValidation.validValue;
      }
      else if (statusControl.hasError('validValueNumber')) {
        return config.messageFormValidation.validValueNumber;
      }
      else if (statusControl.hasError('validValueDate')) {
        return config.messageFormValidation.validValueDate;
      }
      else if (statusControl.hasError('email')) {
        return config.messageFormValidation.email;
      }

    }

  }

  public submit(event: Event): void {

    event.preventDefault();

    this.fillPostulationModel();

    this.OpenDialogToShow(this.postulation);

  }

}
