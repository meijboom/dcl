import { Component, OnInit } from '@angular/core';
import { ComponentData } from '../../../assets/shared components/componentData';

const SAMPLE_DATA = [
  { id: 1,
    company: 'Eneco',
    picture: 'e',
    title: 'string',
    category: 'string',
    html_Content: 'string',
    css_Content: 'string',
    js_Content: 'string',
    created_at: 'string',
    updated_at: 'string',
    user_id: 1},
    { id: 2,
      company: 'Eneco',
      title: 'string',
      picture: ' e',
      category: 'string',
      html_Content: 'string',
      css_Content: 'string',
      js_Content: 'string',
      created_at: 'string',
      updated_at: 'string',
      user_id: 1},
      { id: 2,
        company: 'Eneco',
        title: 'string',
        picture: ' e',
        category: 'string',
        html_Content: 'string',
        css_Content: 'string',
        js_Content: 'string',
        created_at: 'string',
        updated_at: 'string',
        user_id: 1},
        { id: 2,
          company: 'Eneco',
          title: 'string',
          picture: ' e',
          category: 'string',
          html_Content: 'string',
          css_Content: 'string',
          js_Content: 'string',
          created_at: 'string',
          updated_at: 'string',
          user_id: 1}
];

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }
  // this exports the ComponentData to be used in HTML
  componentsData: ComponentData[] = SAMPLE_DATA;

  ngOnInit() {
  }

}
