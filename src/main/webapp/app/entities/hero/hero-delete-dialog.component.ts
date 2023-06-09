import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Hero } from './hero.model';
import { HeroPopupService } from './hero-popup.service';
import { HeroService } from './hero.service';

@Component({
    selector: 'jhi-hero-delete-dialog',
    templateUrl: './hero-delete-dialog.component.html'
})
export class HeroDeleteDialogComponent {

    hero: Hero;

    constructor(
        private heroService: HeroService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.heroService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'heroListModification',
                content: 'Deleted an hero'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-hero-delete-popup',
    template: ''
})
export class HeroDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private heroPopupService: HeroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.heroPopupService
                .open(HeroDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
