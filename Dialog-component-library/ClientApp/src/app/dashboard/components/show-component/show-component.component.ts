import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentDataTS } from 'src/models/component.model';
import { ComponentDataService } from 'src/services/component-data.service';

@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.scss']
})
export class ShowComponentComponent implements OnInit {

  constructor(private componentDataService: ComponentDataService)  { }

  // this exports the ComponentData to be used in HTML
  component$: ComponentDataTS[];

  id = 2;

  ngOnInit() {
    return this.getComponentsById();
  }

  getComponentsById(): void {
    this.componentDataService.getComponentsById(this.id)
    .subscribe(res => {
      this.component$ = res;
      console.log(this.component$);
    });
  }
}
