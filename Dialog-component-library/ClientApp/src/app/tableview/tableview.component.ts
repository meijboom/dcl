import {Component, OnInit, ViewChild} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ComponentDataService } from 'src/services/component-data.service';
import { ComponentDataTS } from 'src/models/component.model';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableviewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'category', 'company'];
  expandedElement: ComponentDataTS | null;
  dataSource: MatTableDataSource<ComponentDataTS>;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private getComponentDataFromBackend: ComponentDataService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.getAllComponents();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  animal: string;
  name: string;
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllComponents() {
    this.dataSource = new MatTableDataSource([]);
    this.getComponentDataFromBackend.getAllComponents()
    .subscribe(result => {
      this.dataSource.data = [...result];
      console.log(result);
      console.log(this.dataSource.data);
    });
  }
}
