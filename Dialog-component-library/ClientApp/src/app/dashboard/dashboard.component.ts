import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentDataService } from 'src/services/component-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _componentData: ComponentDataService) { }

  components: Component[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    this.getComponents();
  }

  getComponents(): void {
    this._components.getComponents(this.page, this.limit)
    .subscribe(res => {
      this.components = res['page']['data'];
      this.total = res['page']['data'];
    })
  }

  goToPrevious(): void {
    console.log('Button prev works from child component');
    this.page--;
    this.getComponents();
  }
  goToNext(): void {
    console.log('Button next works from child component');
    this.page++;
    this.getComponents();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getComponents();
  }
}
