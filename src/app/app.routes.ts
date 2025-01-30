import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ForComponent } from './for/for.component';

export const routes: Routes = [
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
        component: DataBindingComponent
    },
    {
        path: 'Control',
        component: ControlFlowComponent

    },
    {
        path: 'For',
        component: ForComponent
    }
];
