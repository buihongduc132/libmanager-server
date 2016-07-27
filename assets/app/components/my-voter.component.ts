import { Component,
    EventEmitter,
Input,
Output } from '@angular/core';

import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-voter',
    templateUrl: 'app/templates/my-voter.component.html'
})

export class MyVoterComponent {
    @Input() name: string;
    @Output() onVoted = new EventEmitter<boolean>();

    voted = false;

    vote(agree: boolean) {
        this.onVoted.emit(agree);
        this.voted = true;
    }
}