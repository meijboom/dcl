import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentDataTS } from 'src/models/component.model';
import { FormGroup, FormControl } from '@angular/forms';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ComponentDataService {

  constructor(private _http: HttpClient) { }

  // formcontrol
  createFormGroup() {
    return new FormGroup ({
      id: new FormControl(null),
      picture: new FormControl(''),
      title: new FormControl(''),
      category: new FormControl('1'),
      company: new FormControl('1'),
      htmlContent: new FormControl(''),
      cssContent: new FormControl(''),
      jsContent: new FormControl(''),
      userForeignKey: new FormControl(87)
    });
  }

//   {
//     "id": 1,
//     "picture": "Form-Picture",
//     "company": "Camelbak Co.",
//     "title": "Camelbak Co.Form",
//     "category": "Form",
//     "htmlContent": "Form-html",
//     "cssContent": "Form-css",
//     "jsContent": "Form-js",
//     "created_at": "2020-01-06T06:00:04.594627",
//     "updated_at": "2020-01-09T00:00:04.594627",
//     "userForeignKey": 1,
//     "user": null
// }

  // initFormGroup() {
  //   this.form.setValue({
  //     id: null,
  //     picture: '',
  //     title: '',
  //     category: '',
  //     html_Content: '',
  //     css_Content: '',
  //     js_Content: '',
  //     created_at: '',
  //     updated_at: ''
  //   });
  // }

  // get requests
  getAllComponents() {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]>(apiUrl);
  }

  getPaginatedComponents(pageIndex: number, pageSize: number) {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]>(apiUrl + pageIndex + '/' + pageSize);
  }

  getComponentsById(id: number) {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]>(apiUrl + id);
  }

  getComponentsByUser(n: number) {

    const apiUrl = 'https://localhost:5001/api/components/user/';
    return this._http.get(apiUrl + n);
  }

  getComponentsByCategory(str: string) {
    return this._http.get('https://localhost:5001/api/components/category/' + str);
  }

  // post
  postComponent(component: ComponentDataTS) {
    const apiUrl = 'https://localhost:5001/api/components/';
    console.log('INSIDE SERVICE');
    console.log(component);
    console.log(typeof (component));

    return this._http.post<any>(apiUrl, component).subscribe( res => {
      console.log(res);
    });
  }

  // put
  updateComponent(component: ComponentDataTS) {
    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.put<ComponentDataTS>(apiUrl, component);
    // return console.log("Component succesfully updated.");
  }


}
