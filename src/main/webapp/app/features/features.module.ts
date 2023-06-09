import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FeaturesRouting } from './features.routing';
import { FeaturesService } from './features.service';
import { CoreModule } from '../core/core.module';
import { FeaturesComponent } from './features.component';
import { VersionService } from '../shared';

@NgModule({
    declarations: [
        FeaturesComponent
    ],
    imports: [
        // HttpClientModule,
        // CoreModule,
        CommonModule,
        FeaturesRouting,
        FlexLayoutModule
    ],
    providers: [
        VersionService,
        FeaturesService
        // SocketService,
        // AuthGuard
    ]
})

export class FeaturesModule {
    constructor() { }
}
