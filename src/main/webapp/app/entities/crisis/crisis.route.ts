import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { CrisisComponent } from './crisis.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisPopupComponent } from './crisis-dialog.component';
import { CrisisDeletePopupComponent } from './crisis-delete-dialog.component';

export const crisisRoute: Routes = [
    {
        path: 'crisis',
        component: CrisisComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'crisis/:id',
        component: CrisisDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const crisisPopupRoute: Routes = [
    {
        path: 'crisis-new',
        component: CrisisPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'crisis/:id/edit',
        component: CrisisPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'crisis/:id/delete',
        component: CrisisDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
