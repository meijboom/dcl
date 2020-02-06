import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsComponent } from './dashboard/components/components.component';
import { CreateComponentComponent } from './dashboard/components/create-component/create-component.component';
import { ShowComponentComponent } from './dashboard/components/show-component/show-component.component';
import { EditComponentComponent } from './dashboard/components/edit-component/edit-component.component';
import { VideocompoComponent } from './dashboard/components/videocompo/videocompo.component';
import { PaginationComponent } from './dashboard/components/pagination/pagination.component';


// Services
import { ServerService } from '../services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DashboardComponent,
    SidebarComponent,
    ComponentsComponent,
    CreateComponentComponent,
    ShowComponentComponent,
    EditComponentComponent,
    VideocompoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  providers: [
      ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
