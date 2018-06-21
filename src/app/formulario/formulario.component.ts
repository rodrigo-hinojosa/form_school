import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

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

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  loading: boolean;
  postulationInvalid: boolean;
  valueInvalidMessage: string;
  family: Array<string>;
  childrens: Array<string>;
  places: Array<string>;
  parentsSituation: Array<string>;
  firstStepPostulationForm: FormGroup;
  secondStepPostulationForm: FormGroup;
  thirdStepPostulationForm: FormGroup;
  fourthStepPostulationForm: FormGroup;
  fifthStepPostulationForm: FormGroup;
  sixthStepPostulationForm: FormGroup;
  seventhStepPostulationForm: FormGroup;
  eighthStepPostulationForm: FormGroup;
  ninethStepPostulationForm: FormGroup;

  postulation = new Postulation();

  filteredCountries: Observable<any[]>;
  countries = countries.list;

  filteredCourses: Observable<any[]>;
  courses = courses.list;

  filteredDistricts: Observable<any[]>;
  districts = district.list;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.family = family.list;
    this.childrens = childrens.list;
    this.places = places.list;
    this.parentsSituation = parentsSituation.list;

    this.createFirstStepPostulationForm();

    this.createsecondStepPostulationForm();

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

  }

  createFirstStepPostulationForm() {

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

  createsecondStepPostulationForm() {

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

  createThirdStepPostulationForm() {

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

  createFourthStepPostulationForm() {

    this.fourthStepPostulationForm = this._formBuilder.group({
      studenLivesWith: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      numberOfChildren: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      placeThatHeOccupies: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      parentsSituations: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      familySituationOthersSpecifications: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]]
    });

    this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].disable();

  }

  createFifthStepPostulationForm() {

    this.fifthStepPostulationForm = this._formBuilder.group({
      hasBeenAtendedBySpecialist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      psychologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      neurologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      psychiatrist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      ophthalmologist: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentAntecedenstOthers: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      studentAntecedenstOthersSpecifications: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      specialistName: ['', [Validators.maxLength(100), InputsValidators.checkValidValueLv2]],
      dateLastConsultation: ['', [Validators.maxLength(8), InputsValidators.checkValidValueDate]],
      reason: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

    this.fifthStepPostulationForm.disable();

    this.fifthStepPostulationForm.controls['hasBeenAtendedBySpecialist'].enable();

  }

  createSixthStepPostulationForm() {

    this.sixthStepPostulationForm = this._formBuilder.group({
      reasonsForApplicationDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  createSeventhStepPostulationForm() {

    this.seventhStepPostulationForm = this._formBuilder.group({
      studenDescriptionDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  createEighthStepPostulationForm() {

    this.eighthStepPostulationForm = this._formBuilder.group({
      // reasonsForApplicationDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  createNinethStepPostulationForm() {

    this.ninethStepPostulationForm = this._formBuilder.group({
      // reasonsForApplicationDetails: ['', [Validators.maxLength(500), InputsValidators.checkValidValueLv2]]
    });

  }

  submit(event: Event) {
    alert(this.postulation);
    console.log(this.postulation);
  }

  getDv(T: number) {
    let M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return String(S ? S - 1 : 'K');
  }

  parentsSituationsCheckSelected(e) {

    if (e.value === 'Otros (especificar)') {
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].reset();
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].enable();
    } else {
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].reset();
      this.fourthStepPostulationForm.controls['familySituationOthersSpecifications'].disable();
    }
  }

  hasBeenAtendedBySpecialistCheckSelected(e) {

    if (e.value === 'SI') {

      this.fifthStepPostulationForm.enable();

      this.fifthStepPostulationForm.controls['studentAntecedenstOthersSpecifications'].disable();

    } else {

      Object.keys(this.fifthStepPostulationForm.controls).forEach(key => {

        if (key !== 'hasBeenAtendedBySpecialist') {
          this.fifthStepPostulationForm.controls[key].reset();
        }
      });

      this.fifthStepPostulationForm.disable();

    }

    this.fifthStepPostulationForm.controls['hasBeenAtendedBySpecialist'].enable();

  }

  studentAntecedenstOthersCheckSelected(e) {

    if (e.checked) {

      this.fifthStepPostulationForm.controls['studentAntecedenstOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentAntecedenstOthersSpecifications'].enable();

    } else {

      this.fifthStepPostulationForm.controls['studentAntecedenstOthersSpecifications'].reset();
      this.fifthStepPostulationForm.controls['studentAntecedenstOthersSpecifications'].disable();

    }

  }

  onSetDv(formControl: string, control: string, value: number) {

    this[formControl].value[control] = '';

    if (Number.isInteger(Number(value))) {
      this[formControl].value[control] = this.getDv(value);
    }
  }

  filterCountries(name: string) {
    return this.countries.filter(country_ =>
      country_.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterCourses(name: string) {
    return this.courses.filter(course_ =>
      course_.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterDistricts(name: string) {
    return this.districts.filter(district_ =>
      district_.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  getErrorMessage(formGroup: string, control: string) {

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


}
