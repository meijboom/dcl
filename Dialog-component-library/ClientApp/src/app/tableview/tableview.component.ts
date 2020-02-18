import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ComponentDataService } from 'src/services/component-data.service';
import { IComponentData } from 'src/assets/shared components/componentData';
import { ComponentDataTS } from 'src/models/component.model';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})

export class TableviewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'category', 'company'];

  public componentDataArray: ComponentDataTS[];
  dataSource: MatTableDataSource<componentDataArray>;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private componentDataService: ComponentDataService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // const compos = this.componentDataArray;

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(compos);
  }

  ngOnInit() {
    this.getAllComponents();
    this.dataSource = new MatTableDataSource(this.componentDataArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllComponents(): void {
    this.componentDataService.getAllComponents()
    .subscribe(res => {
      this.componentDataArray = res;
      console.log(res);
      console.log(this.componentDataArray);
    });
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): ComponentDataTS {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

