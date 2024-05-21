export interface Document {
  _id: string;
  name: string;
  numberDocument: string;
  date: string;
  serviceNote: ServiceNote
}

export interface ServiceNote{
  _id: string,
  nameServiceNote: string,
  creator: {
    _id: string;
    lastName: string;
    firstName: string;
    middleName: string;
  },
  addresser: {
    _id: string;
    lastName: string;
    firstName: string;
    middleName: string;
  }, 
  viewServiceNote: {
    _id: string;
    title: string;
  },
  content: string
}