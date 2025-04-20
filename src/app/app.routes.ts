import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ForComponent } from './for/for.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ContainerComponent } from './container/container.component';
import { ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authenticationGuard } from './services/authentication.guard';

export const routes: Routes = [

    //default route
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full'
    },
    {
        path: 'Login',  
        component: LoginComponent
    },
    {
        path: 'layout',
        component: LayoutComponent,
        children: [       
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'empList',
        component: EmployeeListComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent,
        
    },
    {
        path: 'Control',
        component: ControlFlowComponent


    },
    {
        path: 'For',
        component: ForComponent
    },
    { 
        path: 'Pipe',
        component: PipeComponent
    },
    { 
        path: 'templateFrom',
        component: TemplateComponent,
        canActivate: [authenticationGuard]
    },
    { 
        path: 'ReactiveForm',
        component: ReactiveComponent
    },
    { 
        path: 'getApi',
        component: GetApiComponent,
       
    },
    { 
        path: 'postApi',
        component: PostApiComponent
    },
    { 
        path: 'editApi',
        component: PostApiComponent
    },
    {
        path: 'ng-template',
        component: NgTemplateComponent
    },
    {
        path: 'ng-container',
        component: ContainerComponent
    }
    ]
}
];