import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentDataService } from 'src/services/component-data.service';
import { NotificationService } from 'src/services/notification.service';
import { ComponentDataTS } from 'src/models/component.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})

export class CreateComponentComponent implements OnInit {

  constructor(
    private service: ComponentDataService,
    private notificationService: NotificationService) {
    this.componentForm = this.service.createFormGroup();
  }

  component$: ComponentDataTS[];
  componentForm: FormGroup;

  uniqCategories;
  uniqCompanies;
  private uniqId;

  ngOnInit() {
    this.getAllComponents();
  }

  onSubmit(ngForm: NgForm) {
    console.log('ngForm');
    console.log(ngForm.value);
    this.service.postComponent(ngForm.value);
  }

  getAllComponents(): void {
    this.service.getAllComponents()
      .subscribe(res => {
        this.component$ = res;
        console.log(res);
        this.getUniqueCategories(this.component$);
        this.getUniqueCompanies(this.component$);
        this.getUniqueId(this.component$);
      });
  }

  getUniqueCategories(array: any) {
    const unique = [...new Set(array.map(item => item.category))];
    console.log(unique);
    this.uniqCategories = unique;
  }

  getUniqueCompanies(array: any) {
    const unique = [...new Set(array.map(item => item.company))];
    console.log(unique);
    this.uniqCompanies = unique;
  }
  getUniqueId(array: any): void {
    const unique = [...new Set(array.map(item => item.id))];
    const sortedArr = unique.sort((a: number, b: number ) => a - b);
    const highestID = sortedArr[sortedArr.length - 1];
    this.uniqId = +highestID + 1;
  }
}
