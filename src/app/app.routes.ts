import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
export const AppRoutes = RouterModule.forRoot(routes);
