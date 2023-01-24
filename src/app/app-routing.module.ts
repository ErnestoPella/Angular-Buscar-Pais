import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';


const routes: Routes =[
    {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'pais/:id',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo:'',
        pathMatch: 'full'
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}