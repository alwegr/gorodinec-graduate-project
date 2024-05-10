export interface Document {
    _id: string;
    name: string;
    numberDocument: string;
    date: string;
    creator: {
      _id: string;
      lastName: string;
      firstName: string;
      middleName: string;
    };
    viewDocument: {
      name: string;
    };
  }