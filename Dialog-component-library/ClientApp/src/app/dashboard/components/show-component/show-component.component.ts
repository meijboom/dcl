import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentDataTS } from 'src/models/component.model';
import { ComponentDataService } from 'src/services/component-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-component',
  templateUrl: './show-component.component.html',
  styleUrls: ['./show-component.component.scss']
})
export class ShowComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private componentDataService: ComponentDataService) { }

  component$: ComponentDataTS[];
  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
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
