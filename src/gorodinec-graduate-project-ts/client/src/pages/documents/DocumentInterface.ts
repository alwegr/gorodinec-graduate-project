export interface Document {
  _id: string;
  numberDocument: string;
  date: string;
  serviceNote: ServiceNote;
}

export interface ServiceNote {
  _id: string;
  nameServiceNote: string;
  creator: Employee,
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
  dateEmploymentContract: string,
  nameEmploymentContract: string,
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