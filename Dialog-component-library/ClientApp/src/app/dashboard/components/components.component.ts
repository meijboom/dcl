import { Component, OnInit, Input, Output } from '@angular/core';
import { ComponentDataService } from 'src/services/component-data.service';
import { ComponentDataTS } from 'src/models/component.model';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {


  @Input() components: any;

  constructor() { }

  ngOnInit() {
  }

}
