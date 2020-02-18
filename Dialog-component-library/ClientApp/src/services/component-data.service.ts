import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentDataTS } from 'src/models/component.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {

  constructor(private _http: HttpClient) { }
  private listComponents: ComponentDataTS[];
  getAllComponents(): Observable<ComponentDataTS[]> {

    const apiUrl = 'https://localhost:5001/api/components/';
    // console.log(this._http.get<ComponentDataTS[]> (apiUrl + pageIndex + '/' + pageSize));
    return this._http.get<ComponentDataTS[]>(apiUrl);
    // .json(res => res.json());
  }

  getPaginatedComponents(pageIndex: number, pageSize: number) {

    const apiUrl = 'https://localhost:5001/api/components/';
    // console.log(this._http.get<ComponentDataTS[]> (apiUrl + pageIndex + '/' + pageSize));
    return this._http.get<ComponentDataTS[]> (apiUrl + pageIndex + '/' + pageSize);
    // .json(res => res.json());
  }

  getComponentsById(id: number) {

    const apiUrl = 'https://localhost:5001/api/components/';
    return this._http.get<ComponentDataTS[]> (apiUrl + id);
      // .map(res => res.json());
  }

  getComponentsByUser(n: number) {

    const apiUrl = 'https://localhost:5001/api/components/user/';
    return this._http.get(apiUrl + n);
      // .map(res => res.json());
  }

  getComponentsByCategory(str: string) {
    return this._http.get('https://localhost:5001/api/components/category/' + str);
      // .map(res => res.json());
  }

  // saveComponent(componentData: ComponentDataTS[]) {

  //   const apiUrl = 'https://localhost:5001/api/components/';

  //   if (componentData === null) {
  //     return this._http.post.componentData(apiUrl);

  //   }
  // }
}
