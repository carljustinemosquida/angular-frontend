import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule,
         MatIconModule, 
         MatListModule, 
         MatGridListModule, 
         MatCardModule, 
         MatMenuModule, 
         MatFormFieldModule, 
         MatInputModule,
         MatPaginatorModule,
         MatRadioModule,
         MatTableModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSelectModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboardComponents/dashboard-home/dashboard-home.component';
import { VoterChartsComponent } from './dashboardComponents/voter-statistics/voter-charts.component';
import { TallyboardComponent } from './dashboardComponents/tallyboard/tallyboard.component';
import { UploadDatabaseComponent } from './dashboardComponents/upload-database/upload-database.component';
import { ActivateComponent } from './dashboardComponents/activate/activate.component';
import { BallotComponent } from './ballot/ballot.component';
import { NominateComponent } from './dashboardComponents/nominate/nominate.component';
import { EditpollComponent } from './dashboardComponents/editpoll/editpoll.component';
import { UpdateNomineeComponent } from './dashboardComponents/update-nominee/update-nominee.component';
import { ChangePassComponent } from './dashboardComponents/change-pass/change-pass.component';
import { TallyRowComponent } from './dashboardComponents/tallyboard/tally-row/tally-row.component';
import { VoterPieChartComponent } from './dashboardComponents/voter-statistics/voter-pie-chart/voter-pie-chart.component';
import { ElectionComponent } from './dashboardComponents/election/election.component';

import {BallotfetchService} from './ballotfetch.service';
import {AuthService} from './auth.service';
import {NominateService} from './nominate.service';
import {HomeService} from './home.service';
import {ElectionService} from './election.service';
import {AuthGuard} from './guards/auth.guard';
import {Auth2Guard} from './guards/auth2.guard';
import {Auth3Guard} from './guards/auth3.guard';


const appRoute: Routes = [
  {path:'', component:HomeComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'dashboard', 
   component:DashboardComponent, children: [    
      {path: '', component: DashboardHomeComponent},
      {path: 'tallyboard', component:TallyboardComponent, canActivate:[Auth2Guard]},
      {path: 'upload', component: UploadDatabaseComponent, canActivate:[Auth2Guard,Auth3Guard]},
      {path: 'activate', component: ActivateComponent, canActivate:[Auth2Guard]},
      {path:'editpoll', component: EditpollComponent, canActivate:[Auth2Guard,Auth3Guard]},
      {path:'nominate', component: NominateComponent, canActivate:[Auth2Guard,Auth3Guard]},
      {path:'update-nominee', component: UpdateNomineeComponent, canActivate:[Auth2Guard,Auth3Guard]},
      {path: 'change-pass', component: ChangePassComponent}, 
      {path:'election', component: ElectionComponent}
    ], canActivate:[AuthGuard]
  },
  {path:'ballot', component:BallotComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardHomeComponent,
    VoterChartsComponent,
    TallyboardComponent,
    UploadDatabaseComponent,
    ActivateComponent,
    BallotComponent,
    NominateComponent,
    EditpollComponent,
    UpdateNomineeComponent,
    ChangePassComponent,
    TallyRowComponent,
    VoterPieChartComponent,
    ElectionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    RouterModule.forRoot(appRoute),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule ,
    MatPaginatorModule,
    MatTableModule,
    NgxChartsModule,
    MatRadioModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [BallotfetchService,AuthService,NominateService, HomeService, ElectionService, AuthGuard, Auth2Guard, Auth3Guard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
