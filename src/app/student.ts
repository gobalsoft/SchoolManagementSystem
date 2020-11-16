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
