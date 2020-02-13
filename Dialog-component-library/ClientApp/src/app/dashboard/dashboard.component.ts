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
  component$: ComponentDataTS[];
  allComponent$: ComponentDataTS[];
  total = 0;
  page = 1;
  limit = 8;
  loading = false;

  ngOnInit() {
    return this.initComponentVariables();
  }

  initComponentVariables() {
    this.getPaginatedComponents();
    this.getAllComponents();
  }

  getPaginatedComponents(): void {
    this.componentDataService.getPaginatedComponents(this.page, this.limit)
    .subscribe(res => {
      this.component$ = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    });
  }

  getAllComponents(): void {
    this.componentDataService.getAllComponents()
    .subscribe(res => {
      this.allComponent$ = res;
    });
  }

  goToPrevious(): void {
    this.page--;
    this.getPaginatedComponents();
  }
  goToNext(): void {
    this.page++;
    this.getPaginatedComponents();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getPaginatedComponents();
  }
}
