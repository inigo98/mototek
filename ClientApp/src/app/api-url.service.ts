import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  //url = 'https://localhost:44352/api/'
  //url = 'https://testmototek-001-site1.btempurl.com/api/'
  url = 'https://tienda-mototec.com/api/'
  constructor() { }
}
