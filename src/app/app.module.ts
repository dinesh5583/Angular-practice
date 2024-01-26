import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child2ComponentComponent } from './parent-component/child2-component/child2-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveExampleComponent } from './custom-directive/directive-example/directive-example.component';
import { BasicHighlightDirective } from './custom-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './custom-directive/unless-structural-directive/unless.directive';
import { NgSwitchDirective } from './custom-directive/ng-switch/ng-switch.directive';
import { NewAccountComponent } from './Service-Example/new-account/new-account.component';
import { HomeComponent } from './Router-Example/home/home.component';
import { UsersComponent } from './Router-Example/users/users.component';
import { UserComponent } from './Router-Example/users/user/user.component';
import { ServersComponent } from './Router-Example/servers/servers.component';
import { ServerComponent } from './Router-Example/servers/server/server.component';
import { EditServerComponent } from './Router-Example/servers/edit-server/edit-server.component';
import { Routes } from '@angular/router';
import { ServersService } from './Router-Example/servers/servers.service';
import { PageNotFoundComponent } from './Router-Example/page-not-found/page-not-found.component';
import { AuthService } from './Router-Example/auth.service';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './Router-Example/error-page/error-page.component';
import { CanDeactivateGuard } from './Router-Example/servers/edit-server/can-deactivate-guard.service';
import { serverResolver } from './Router-Example/servers/server/server-resolver.service';
import { RootComponent } from './Observables-Example/root.component';
import { HomeComponent2 } from './Observables-Example/home/home.component';
import { UserComponent2 } from './Observables-Example/user/user.component';
import { RootFormsComponent } from './Forms-Example/root-forms.component';
import { TemplateDrivenComponent } from './Forms-Example/template-driven/template-driven.component';
import { ReactiveFormComponent } from './Forms-Example/reactive-form/reactive-form.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    Child2ComponentComponent,
    DirectiveExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    NgSwitchDirective,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RootComponent,
    HomeComponent2,
    UserComponent2,
    RootFormsComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ServersService, AuthService,AuthGuard, CanDeactivateGuard,serverResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
