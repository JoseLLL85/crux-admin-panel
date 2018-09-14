import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/ErrorPage/error.component';
import { MainPanelComponent } from './components/MainPanel/main-panel.component';
import { HttpModule } from '@angular/http';
import { MsalService } from './services/msal.service';
//importing app.routing.ts
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    FormsModule,

  ],
  providers: [
    appRoutingProviders,
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
