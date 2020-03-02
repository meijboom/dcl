import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentDataService } from 'src/services/component-data.service';
import { NotificationService } from 'src/services/notification.service';
import { ComponentDataTS } from 'src/models/component.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private service: ComponentDataService,
    private notificationService: NotificationService) {
    this.componentForm = this.service.createFormGroup();
  }

  component$: ComponentDataTS[];
  thisComponent$: ComponentDataTS[];

  componentForm: FormGroup;

  uniqCategories;
  uniqCompanies;

  finishedLoadingData: boolean = false;
  finishedLoadingAllComponents: boolean = false;
  finishedLoadingThisComponent: boolean = false;

  // for route paramater
  compId: number;

  ngOnInit() {
    this.compId = this.route.snapshot.params['id'];
    this.getSingleComponent(this.compId);
    this.getAllComponents();
    this.checkData();
  }

  checkData() {
    if (this.finishedLoadingAllComponents && this.finishedLoadingThisComponent) {
      this.finishedLoadingData = true;
    }
  }

  onSubmit(ngForm: NgForm) {
    console.log('ngForm');
    console.log(ngForm.value);
    this.service.updateComponent(ngForm.value, ngForm.value.id);
  }

  getAllComponents(): void {
    this.service.getAllComponents()
      .subscribe(res => {
        this.component$ = res;
        console.log(res);
        this.getUniqueCategories(this.component$);
        this.getUniqueCompanies(this.component$);
        this.getUniqueId(this.component$);
      },
        error => {
          console.log(error);
        },

        () => {
          this.finishedLoadingData = true;
          this.checkData();
          console.log('finished loading');
        }
      );
  }

  getSingleComponent(id): void {
    this.service.getComponentsById(id)
      .subscribe(res => {
        this.thisComponent$ = res;
      },
        error => {
          console.log(error);
        },

        () => {
          this.finishedLoadingThisComponent = true;
          console.log('finished loading single component');
        });
  }

  getUniqueCategories(array: any) {
    const unique = [...new Set(array.map(item => item.category))];
    console.log(unique);
    this.uniqCategories = unique;
  }

  getUniqueCompanies(array: any) {
    const unique = [...new Set(array.map(item => item.company))];
    console.log(unique)
    this.uniqCompanies = unique;
  }
  getUniqueId(array: any) {
    let arrLength = array.length;
    console.log(arrLength);
    if (array[arrLength - 1] > arrLength) {
      let newId = arrLength + 1;
      console.log(newId);
      return newId;
    }




  }
}