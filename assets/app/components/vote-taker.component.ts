import {
    Component
} from '@angular/core';

import { 
    MyVoterComponent
} from './my-voter.component'

@Component({
    selector: 'vote-taker',
    templateUrl: 'app/templates/vote-taker.component.html',
    directives: [MyVoterComponent]
})

export class VoteTakerComponent {
    agreed = 0;
    disagreed = 0;

    voters = [
        'a',
        'b',
        'c'
    ]

    onVoted(agree: boolean) {
        agree ?
        this.agreed ++ :
        this.disagreed++;
    }
}