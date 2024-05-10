export interface Employee {
    _id: string;
    lastName: string;
    firstName: string;
    middleName: string;
    gender: string;
    personnelNumber: number;
    position: {
      _id: string;
      title: string;
    };
    divisions: {
      _id: string;
      title: string;
    };
    employeeStatus: {
      _id: string;
      title: string;
    };
  }
  