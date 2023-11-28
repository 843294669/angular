import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    {
        path: 'parent-component/:title',
        component: ParentComponent
    },
    { 
        path: 'child-component',
        component: ChildComponent
     }
];
