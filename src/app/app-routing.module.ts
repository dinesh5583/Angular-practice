import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent2 } from './Observables-Example/home/home.component';
import { UserComponent2 } from './Observables-Example/user/user.component';
import { ErrorPageComponent } from './Router-Example/error-page/error-page.component';
import { HomeComponent } from './Router-Example/home/home.component';
import { PageNotFoundComponent } from './Router-Example/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './Router-Example/servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './Router-Example/servers/edit-server/edit-server.component';
import { serverResolver } from './Router-Example/servers/server/server-resolver.service';
import { ServerComponent } from './Router-Example/servers/server/server.component';
import { ServersComponent } from './Router-Example/servers/servers.component';
import { UserComponent } from './Router-Example/users/user/user.component';
import { UsersComponent } from './Router-Example/users/users.component';

const routes: Routes = [
  //Router Example

  // { path: '', component: HomeComponent },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   children: [{ path: ':id/:name', component: UserComponent }],
  // },
  // {
  //   path: 'servers',
  //   // canActivate:[AuthGuard],
  //   canActivateChild:[AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //     { path: ':id', component: ServerComponent,resolve:{server:serverResolver} },
  //     { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] },
  //   ],
  // },
  // {path:'not-found', component:PageNotFoundComponent},
  // {path:'not-found', component:ErrorPageComponent, data:{message:'Page Not Found'}},
  // {path:'**', redirectTo:'/not-found'}

  //Observable Example
  {
    path: '',
    component: HomeComponent2,
  },
  { path: 'user/:id', component: UserComponent2 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
