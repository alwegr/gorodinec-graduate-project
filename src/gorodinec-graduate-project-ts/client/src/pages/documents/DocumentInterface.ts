export interface Document {
  _id: string;
  numberDocument: string;
  date: string;
  serviceNote: ServiceNote;
}

export interface ServiceNote {
  _id: string;
  nameServiceNote: string;
  dateServiceNote: Date;
  creator: Employee;
  addresser: {
    _id: string;
    lastName: string;
    firstName: string;
    middleName: string;
  }, 
  viewServiceNote: {
    _id: string;
    title: string;
  };
  content: string;
}

export interface Employee {
  _id: string;
  lastName: string;
  firstName: string;
  middleName: string;
}

export interface EmploymentContract{
  _id: string;
  dateEmploymentContract: Date;
  nameEmploymentContract: string;
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  position: {
    _id: string;
    title: string;
  };
  divisions: {
    _id: string;
    title: string;
  };
  seriesPassport: number,
  numberPassport: number,
  issued: string,
  dateOfIssue: Date,
  departmentCode: number,
  salary: number,
}

export interface Counterpartie{
  _id: string;
  nameCounterparties: string;
  inn: string;
  telephone: string;
  email: string;
  legalAddress: string;
  mailingAddress: string;
  bic: string;
  numberBic: number;
}

export interface Currency{
  _id: string;
  title: string;
  digitalCode: string;
  letterCode: string;
}