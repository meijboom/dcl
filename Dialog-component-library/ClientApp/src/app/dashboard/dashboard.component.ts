import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentDataTS } from 'src/models/component.model';
import { ComponentDataService } from 'src/services/component-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private componentDataService: ComponentDataService) { }

  // this exports the ComponentData to be used in HTML
  componentsDataTS$: ComponentDataTS[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    return this.getComponents();
  }


  getComponents(): void {
    this.componentDataService.getComponents(this.page, this.limit)
    .subscribe(res => {
      this.componentsDataTS$ = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    });
  }

  goToPrevious(): void {
    this.page--;
    this.getComponents();
  }
  goToNext(): void {
    this.page++;
    this.getComponents();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getComponents();
  }
}
