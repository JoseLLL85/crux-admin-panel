import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//components
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/ErrorPage/error.component';
import { MainPanelComponent } from './components/MainPanel/main-panel.component';

const appRoutes: Routes=[

   //creating jsons by route
   //
   {path:'', component: LoginComponent},
   {path:'admin-panel',component: MainPanelComponent},
   {path:'**', component: ErrorComponent}

];


export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
