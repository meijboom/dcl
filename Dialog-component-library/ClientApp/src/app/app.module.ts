import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create-component', component: CreateComponentComponent },
      { path: 'show-component', component: ShowComponentComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [
      ComponentDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
