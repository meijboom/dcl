import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentDataTS } from 'src/models/component.model';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ComponentDataService {
  _apiUrl: string;

  constructor(private _http: HttpClient) { }

  // formcontrol
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    picture: new FormControl(''),
    title: new FormControl(''),
    category: new FormControl('1'),
    company: new FormControl('1'),
    html_Content: new FormControl(''),
    css_Content: new FormControl(''),
    js_Content: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl(''),
  })

  initFormGroup() {
    this.form.setValue({
      id: null,
      picture: '',
      title: '',
      category: '',
      html_Content: '',
      css_Content: '',
      js_Content: '',
      created_at: '',
      updated_at: ''
    });
  }

  // get requests
  getAllComponents() {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]>(apiUrl);
  }

  getPaginatedComponents(pageIndex: number, pageSize: number) {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]> (apiUrl + pageIndex + '/' + pageSize);
  }

  getComponentsById(id: number) {

    const apiUrl = 'https://localhost:5001/api/components/';

    return this._http.get<ComponentDataTS[]> (apiUrl + id);
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
    console.log("gets till here");
    console.log(component);
    console.log(typeof(component));

    return this._http.post<any>(apiUrl, component)
  }

  // put
  updateComponent(component: ComponentDataTS) {
    const apiUrl = 'https://localhost:5001/api/components/';
    
    return this._http.post<ComponentDataTS>(apiUrl, component)
    // return console.log("Component succesfully updated.");
  } 


}
