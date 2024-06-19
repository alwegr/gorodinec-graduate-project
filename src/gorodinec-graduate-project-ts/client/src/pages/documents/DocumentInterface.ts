export interface Contract{
  _id: string,
  nameContract: string,
  dateStart: Date,
  dateEnd: Date,
  currency: Currency,
  price: number,
  statusContract: StatusContract,
  subjectAgreement: string,
  createContract: EmployeeContract,
  counterparties: Counterpartie[],
}

export interface CounterpartiesFormData {
  counterpartieId: string[];
}


export interface ServiceNote {
  _id: string;
  nameServiceNote: string;
  dateServiceNote: Date;
  creator: EmployeeServiceNote;
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

export interface EmployeeContract{
  _id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  position: {
    _id: string;
    title: string;
  };
}

export interface StatusContract{
  _id: string,
  title: string,
}

export interface EmployeeServiceNote {
  _id: string;
  lastName: string;
  firstName: string;
  middleName: string;
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