import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentDataService } from 'src/services/component-data.service';
import { NotificationService } from 'src/services/notification.service';
import { ComponentDataTS } from 'src/models/component.model';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})

export class CreateComponentComponent implements OnInit {

  constructor(
    private service: ComponentDataService,
    private notificationService: NotificationService) { }
  component$: ComponentDataTS[];
  uniqCategories;
  uniqCompanies;

  ngOnInit() {
    this.getAllComponents();
  }

  onClear() {
    this.service.form.reset();
    this.service.initFormGroup();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.CompId == 0)
      this.postComponent(form);
    else
      this.updateComponent(form);
  }

  postComponents(form: NgForm) {
    this.service.postComponent().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateComponents(form: NgForm) {

  }

  getAllComponents(): void {
    this.service.getAllComponents()
      .subscribe(res => {
        this.component$ = res;
        console.log(res);
        this.getUniqueCategories(this.component$);
        this.getUniqueCompanies(this.component$);
      });
  };

  getUniqueCategories(array: any) {
    const unique = [...new Set(array.map(item => item.category))];
    console.log(unique)
    this.uniqCategories = unique;
  }

  getUniqueCompanies(array: any) {
    const unique = [...new Set(array.map(item => item.company))];
    console.log(unique)
    this.uniqCompanies = unique;
  }
}
