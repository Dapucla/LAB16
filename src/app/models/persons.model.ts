export interface Persons {
  id?: number,
  name: string,
  surname: string,
  patronymic: string,
  phone: number,
  email: string,
  birthday: any,
  department: number
}
export enum TypeDepartmen {
  data,
  ios,
  android,
  web
}
