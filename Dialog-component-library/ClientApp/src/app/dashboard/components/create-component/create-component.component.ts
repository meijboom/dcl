import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentDataService } from 'src/services/component-data.service';
import { ComponentDataTS } from 'src/models/component.model';



@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // saveComponent(componentForm: NgForm): void {
  //   this.

  // }

}
