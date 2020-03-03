import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentDataService } from 'src/services/component-data.service';
import { NotificationService } from 'src/services/notification.service';
import { ComponentDataTS } from 'src/models/component.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ComponentDataService,
    private notificationService: NotificationService) {
    this.componentForm = this.service.createFormGroup();
  }

  component$: ComponentDataTS[];
  thisComponent$: ComponentDataTS[];

  componentForm: FormGroup;

  uniqCategories;
  uniqCompanies;

  finishedLoadingData = false;
  finishedLoadingAllComponents = false;
  finishedLoadingThisComponent = false;

  // for route paramater
  routeparam;
  compId: number;

  ngOnInit() {
    this.routeparam = this.route.snapshot.params['id'];
    this.compId = Number(this.routeparam);
    this.getAllComponents();
  }

  checkData(): void {
    if (this.finishedLoadingThisComponent) {
      console.log("finished loading all data.");
      console.log("Setting variable to true...");
      this.finishedLoadingData = true;
    }
  }

  onSubmit(ngForm: NgForm) {
    console.log('ngForm');
    console.log(ngForm.value);
    this.service.updateComponent(ngForm.value, ngForm.value.id);
  }

  getAllComponents(): void {
    // get a single component
    this.getSingleComponent(this.compId);

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
          // this.finishedLoadingData = true;
          console.log('finished loading all components. Checking data..');
          this.checkData();
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
          console.log('finished loading single component. Getting all components..');
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
  deleteComponent() {
    console.log("deleting component")
    this.service.deleteComponent(this.compId);
  }
}

///
// {
//   "id": "1",
//   "picture": "",
//   "title": "Camelbak Co.Form",
//   "category": "Form",
//   "company": "Camelbak Co.",
//   "htmlContent": "Form-html",
//   "cssContent": "Form-css",
//   "jsContent": "Form-js",
//   "userForeignKey": 87,
//   "user": null
// },
// // get request:
// {
//     "id": 4,
//     "picture": "Form-Picture",
//     "company": "Camelbak Co.",
//     "title": "Camelbak Co.Form",
//     "category": "Form",
//     "htmlContent": "Form-html",
//     "cssContent": "Form-css",
//     "jsContent": "Form-js",
//     "created_at": "2019-12-20T02:52:05.601123",
//     "updated_at": "2020-01-09T00:00:04.594627",
//     "userForeignKey": 27,
//     "user": null
// }