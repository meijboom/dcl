import { Component, OnInit, Input, Output } from '@angular/core';
import { ComponentDataTS } from 'src/models/component.model';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  @Input() components: ComponentDataTS;
  uniqueCompanies: any;

  searchTermCategory: string;
  searchTermCompany: string;
  constructor() { }

  ngOnInit() {
    console.log(this.components);
    this.uniqueCompanies = this.getUniqCompanies(this.components);
  }


  getUniqCompanies(components: any) {
    const lookup = {};
    const items = components;
    const result = [];

    for (let item, i = 0; item = items[i++];) {
      const name = item.company;

      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }
    }
    return result;
  }
}
