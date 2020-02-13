import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsComponent } from './dashboard/components/components.component';
import { CreateComponentComponent } from './dashboard/components/create-component/create-component.component';
import { ShowComponentComponent } from './dashboard/components/show-component/show-component.component';
import { EditComponentComponent } from './dashboard/components/edit-component/edit-component.component';
import { PaginationComponent } from './dashboard/components/pagination/pagination.component';

// Services
import { ComponentDataService } from 'src/services/component-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

// Pipes
import { CategoryFilterPipe } from './dashboard/components/componentcategory-filter.pipe';
import { CompanyFilterPipe } from './dashboard/components/componentcompany-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    DashboardComponent,
    SidebarComponent,
    ComponentsComponent,
    CreateComponentComponent,
    ShowComponentComponent,
    EditComponentComponent,
    PaginationComponent,
    CategoryFilterPipe,
    CompanyFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create-component', component: CreateComponentComponent },
      { path: 'show-component/:id/edit', component: EditComponentComponent },
      { path: 'show-component/:id', component: ShowComponentComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]),
    BrowserAnimationsModule,
    // MATERIAL IMPORTS
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [
      ComponentDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
