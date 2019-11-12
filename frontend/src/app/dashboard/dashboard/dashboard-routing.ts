import { NgModule} from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { EditorComponent } from 'src/app/editor/editor.component';

const routes :Routes = [
    {
        path:'',component:DashboardComponent,pathMatch:'full'

    },
    {
        path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]
    },
    {
        path:"editor",component:EditorComponent,canActivate:[AuthGuard]
    },
    {
        path:"**",component:PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule{}