import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgPipesModule } from 'ngx-pipes';

import { BerniePage } from './bernie.page';
import { ClaimComponent } from './claim/claim.component';
import { RebuttalComponent } from './rebuttal/rebuttal.component';
import { RESTService } from '../../core/services/rest.service';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { BernieRouting } from './bernie.routing';
import { ClaimEffects } from '../../core/store/claim/claim.effects';
import { RebuttalEffects } from '../../core/store/rebuttal/rebuttal.effects';
import { ClaimRebuttalEffects } from '../../core/store/claim-rebuttal/claim-rebuttal.effects';

@NgModule({
    imports: [
        SortablejsModule,
        GreatBigExampleApplicationSharedModule,
        BernieRouting,
        ReactiveFormsModule,
        EffectsModule.forRoot([ClaimEffects, RebuttalEffects, ClaimRebuttalEffects]),
        NgPipesModule
    ],
    declarations: [
        BerniePage,
        ClaimComponent,
        RebuttalComponent
    ],
    providers: [
        RESTService
    ]
})
export class BernieModule { }
