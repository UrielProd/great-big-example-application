import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroPopupComponent } from './hero-dialog.component';
import { HeroDeletePopupComponent } from './hero-delete-dialog.component';

export const heroRoute: Routes = [
    {
        path: 'hero',
        component: HeroComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'hero/:id',
        component: HeroDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const heroPopupRoute: Routes = [
    {
        path: 'hero-new',
        component: HeroPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'hero/:id/edit',
        component: HeroPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'hero/:id/delete',
        component: HeroDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.hero.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
