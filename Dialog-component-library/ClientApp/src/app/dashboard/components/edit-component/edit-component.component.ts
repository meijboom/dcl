import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ComponentDataTS } from 'src/models/component.model';
import { ComponentDataService } from 'src/services/component-data.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

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
