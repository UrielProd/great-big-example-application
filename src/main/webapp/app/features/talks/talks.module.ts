import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TalksPage } from './talks.page';
import { WatchButtonComponent } from './watch-button/watch-button.component';
import { TalksAndFiltersPage } from './talks-and-filters/talks-and-filters.page';
import { TalksComponent } from './talks.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { TalkComponent } from './talk/talk.component';
import { RateButtonComponent } from './rate-button/rate-button.component';
import { FormatRatingPipe } from './format-rating/format-rating.pipe';
import { FiltersComponent } from './filters/filters.component';
import { WatchService } from './services/watch.service';
import { TalkEffects } from '../../core/store/talk/talk.effects';
import { LayoutEffects } from '../../core/store/layout/layout.effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TalksRouting } from './talks.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        // NoopAnimationsModule,

        TalksRouting,

        EffectsModule.forRoot([
            TalkEffects,
            LayoutEffects
        ])
    ],
    declarations: [
        TalksPage,
        WatchButtonComponent,
        TalksAndFiltersPage,
        TalksComponent,
        TalkDetailsComponent,
        TalkComponent,
        RateButtonComponent,
        FormatRatingPipe,
        FiltersComponent
    ],

    providers: [
        WatchService,
        TalkEffects
    ]
})
export class TalksModule { }
