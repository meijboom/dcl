import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentDataTS } from 'src/models/component.model';

@Injectable({
  providedIn: 'root'
})

export class ComponentDataService {

  constructor(private _http: HttpClient) { }

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
}
