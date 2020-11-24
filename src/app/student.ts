export interface SchoolAcademic {
  AcademicID: number;
  AcademicStartDate: Date;
  AcademicEndDate: Date;
  IsCurrentAcademic: Boolean;
  SchoolID: number;
}
export interface SchoolClass {
  // S.No:number;
  ClassName: string;
  DisplayOrder: number;
  IsSelected: boolean;
}
export interface SchoolSubject {
  SubjectCode: string;
  SubjectNamee: string;
  Category_id: string;
}
export interface Student_Personal_Details {
  Student_ID: bigint;
  First_Name: string;
  Middle_Name: string;
  Last_Name: string;
  Mother_Tongue: string;
  Email_ID: string;
  Date_Of_Join: Date;
  Date_Of_Birth: Date;
  Aadhar_Number: number;
  Gender: boolean;
  Is_Login_Details_Sent: boolean;
}
export interface Student_Class_Details {
  Student_Class_ID: bigint;
  Student_ID: bigint;
  Student_Class_Section: string;
}
export interface Student_Parent_Details {
  Student_Parent_ID: bigint;
  Student_ID: bigint;
  Mother_Name: string;
  Father_Name: string;
  Mother_Occupation: string;
  Father_Occupation: string;
  Moblie_Number: number;
  Alternative_Moblie_number: number;
  Email_ID: string;
  Father_Aadhar_Number: number;
  Is_Login_Details_Sent: boolean;
}
export interface Student_communcation_Address {
  Student_Com_ID: bigint;
  Student_ID: bigint;
  House_Number: string;
  Stread_Road: string;
  Pin_Code: number;
}
