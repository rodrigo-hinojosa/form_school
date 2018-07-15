export class Postulation {

  // I - Student properties
  studentRun: number;
  studentRunDv: string;
  studentName: string;
  studentLastname: string;
  studentNationality: string;
  studentBirthday: string;
  studentPhone: number;
  studentAddres: string;
  studentCondominium: string;
  studentAddresDivision: string;
  studentCourseLevel: string;
  studentSchoolWhereHeComes: string;
  studentAnotherPostulatedSchool: string;

  // II - Father properties
  fatherRun: number;
  fatherRunDv: string;
  fatherName: string;
  fatherLastname: string;
  fatherBirthday: string;
  fatherPhone: number;
  fatherSecondary: string;
  fatherUniversityStudies: string;
  fatherProfession: string;
  fatherWhereHeWorks: string;
  fatherWorksPosition: string;
  fatherEmail: string;

  // III - Mother properties
  motherRun: number;
  motherRunDv: string;
  motherName: string;
  motherLastname: string;
  motherBirthday: string;
  motherPhone: number;
  motherSecondary: string;
  motherUniversityStudies: string;
  motherProfession: string;
  motherWhereHeWorks: string;
  motherWorksPosition: string;
  motherEmail: string;

  // IV - Family situation
  studentLivesWith: string;
  numberOfChildren: string;
  placeThatHeOccupies: string;
  parentsSituations: string;
  FamilySituationOthersSpecifications: string;

  // V - Others student Background
  hasBeenAttendedBySpecialist: string;
  psychologist: string;
  neurologist: string;
  psychiatrist: string;
  ophthalmologist: string;
  studentBackgroundOthers: string;
  studentBackgroundOthersSpecifications: string;
  specialistName: string;
  dateLastConsultation: string;
  reason: string;

  // VI - Reasons for application
  reasonsForApplicationDetails: string;

  // VII - Student description
  studentDescriptionDetails: string;

  // VIII - Person who inscribes
  personWhoInscribesName: string;
  personWhoInscribesLastname: string;
  personWhoInscribesRelationship: string;
  personWhoInscribesOthers: string;

  // IX - Declarations
  attorneyDeclaration: string;
  attorneyFullName: string;
  agreeDeclaration: string;

  constructor(options: {
    _studentRun?: number;
    _studentRunDv?: string;
    _studentName?: string;
    _studentLastname?: string;
    _studentNationality?: string;
    _studentBirthday?: string;
    _studentPhone?: number;
    _studentAddres?: string;
    _studentCondominium?: string;
    _studentAddresDivision?: string;
    _studentCourseLevel?: string;
    _studentSchoolWhereHeComes?: string;
    _studentAnotherPostulatedSchool?: string;
    _fatherRun?: number;
    _fatherRunDv?: string;
    _fatherName?: string;
    _fatherLastname?: string;
    _fatherBirthday?: string;
    _fatherPhone?: number;
    _fatherSecondary?: string;
    _fatherUniversityStudies?: string;
    _fatherProfession?: string;
    _fatherWhereHeWorks?: string;
    _fatherWorksPosition?: string;
    _fatherEmail?: string;
    _motherRun?: number;
    _motherRunDv?: string;
    _motherName?: string;
    _motherLastname?: string;
    _motherBirthday?: string;
    _motherPhone?: number;
    _motherSecondary?: string;
    _motherUniversityStudies?: string;
    _motherProfession?: string;
    _motherWhereHeWorks?: string;
    _motherWorksPosition?: string;
    _motherEmail?: string;
    _studentLivesWith?: string;
    _numberOfChildren?: string;
    _placeThatHeOccupies?: string;
    _parentsSituations?: string;
    _FamilySituationOthersSpecifications?: string;
    _hasBeenAttendedBySpecialist?: string;
    _psychologist?: string;
    _neurologist?: string;
    _psychiatrist?: string;
    _ophthalmologist?: string;
    _studentBackgroundOthers?: string;
    _studentBackgroundOthersSpecifications?: string;
    _specialistName?: string;
    _dateLastConsultation?: string;
    _reason?: string;
    _reasonsForApplicationDetails?: string;
    _studentDescriptionDetails?: string;
    _personWhoInscribesName?: string;
    _personWhoInscribesLastname?: string;
    _personWhoInscribesRelationship?: string;
    _personWhoInscribesOthers?: string;
    _attorneyDeclaration?: string;
    _attorneyFullName?: string;
    _agreeDeclaration?: string;
  } = {}) {
    this.studentRun = options._studentRun || null;
    this.studentRunDv = options._studentRunDv || null;
    this.studentName = options._studentName || null;
    this.studentLastname = options._studentLastname || null;
    this.studentNationality = options._studentNationality || null;
    this.studentBirthday = options._studentBirthday || null;
    this.studentPhone = options._studentPhone || null;
    this.studentAddres = options._studentAddres || null;
    this.studentCondominium = options._studentCondominium || null;
    this.studentAddresDivision = options._studentAddresDivision || null;
    this.studentCourseLevel = options._studentCourseLevel || null;
    this.studentSchoolWhereHeComes = options._studentSchoolWhereHeComes || null;
    this.studentAnotherPostulatedSchool = options._studentAnotherPostulatedSchool || null;
    this.fatherRun = options._fatherRun || null;
    this.fatherRunDv = options._fatherRunDv || null;
    this.fatherName = options._fatherName || null;
    this.fatherLastname = options._fatherLastname || null;
    this.fatherBirthday = options._fatherBirthday || null;
    this.fatherPhone = options._fatherPhone || null;
    this.fatherSecondary = options._fatherSecondary || null;
    this.fatherUniversityStudies = options._fatherUniversityStudies || null;
    this.fatherProfession = options._fatherProfession || null;
    this.fatherWhereHeWorks = options._fatherWhereHeWorks || null;
    this.fatherWorksPosition = options._fatherWorksPosition || null;
    this.fatherEmail = options._fatherEmail || null;
    this.motherRun = options._motherRun || null;
    this.motherRunDv = options._motherRunDv || null;
    this.motherName = options._motherName || null;
    this.motherLastname = options._motherLastname || null;
    this.motherBirthday = options._motherBirthday || null;
    this.motherPhone = options._motherPhone || null;
    this.motherSecondary = options._motherSecondary || null;
    this.motherUniversityStudies = options._motherUniversityStudies || null;
    this.motherProfession = options._motherProfession || null;
    this.motherWhereHeWorks = options._motherWhereHeWorks || null;
    this.motherWorksPosition = options._motherWorksPosition || null;
    this.motherEmail = options._motherEmail || null;
    this.studentLivesWith = options._studentLivesWith || null;
    this.numberOfChildren = options._numberOfChildren || null;
    this.placeThatHeOccupies = options._placeThatHeOccupies || null;
    this.parentsSituations = options._parentsSituations || null;
    this.FamilySituationOthersSpecifications = options._FamilySituationOthersSpecifications || null;
    this.hasBeenAttendedBySpecialist = options._hasBeenAttendedBySpecialist || null;
    this.psychologist = options._psychologist || null;
    this.neurologist = options._neurologist || null;
    this.psychiatrist = options._psychiatrist || null;
    this.ophthalmologist = options._ophthalmologist || null;
    this.studentBackgroundOthers = options._studentBackgroundOthers || null;
    this.studentBackgroundOthersSpecifications = options._studentBackgroundOthersSpecifications || null;
    this.specialistName = options._specialistName || null;
    this.dateLastConsultation = options._dateLastConsultation || null;
    this.reason = options._reason || null;
    this.reasonsForApplicationDetails = options._reasonsForApplicationDetails || null;
    this.studentDescriptionDetails = options._studentDescriptionDetails || null;
    this.personWhoInscribesName = options._personWhoInscribesName || null;
    this.personWhoInscribesLastname = options._personWhoInscribesLastname || null;
    this.personWhoInscribesRelationship = options._personWhoInscribesRelationship || null;
    this.personWhoInscribesOthers = options._personWhoInscribesOthers || null;
    this.attorneyDeclaration = options._attorneyDeclaration || null;
    this.attorneyFullName = options._attorneyFullName || null;
    this.agreeDeclaration = options._agreeDeclaration || null;
  }

}
