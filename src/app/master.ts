export interface Religion {
  ReligionID: number;
  ReligionName: string;
  Status: boolean;
}
export interface Nationality {
  NationalityID: number;
  Nationality: string;
  Status: boolean;
}
export interface Disability {
  DisabilityID: number;
  Disability: string;
  Status: boolean;
}
export interface Category {
  CategoryID: number;
  Category: string;
  Status: boolean;
}
export interface Caste {
  CasteID: number;
  Caste: string;
  Status: boolean;
}
export interface Country {
  CountryID: number;
  Country_Name: string;
}
export interface State {
  StateID: number;
  State_Name: string;
  CountryID: number;
}
export interface City {
  CityID: number;
  City_Name: string;
  StateID: number;
}
