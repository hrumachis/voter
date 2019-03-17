import { Component, OnInit } from '@angular/core';

// Suggestion array's element
class Suggestion {
    text: string;
    counter: number = 0;

    constructor( text: string ) {
        this.text = text;
    }
}

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
    suggestions: Array<Suggestion> = []; // suggestions list
    formAddValue: string = ""; // Suggestion input modal
    maxLength: number = 128;
    minLength: number = 2;
    formActionDisabled: boolean = true; // Submit form state
    userVoted: boolean = false;
    userVotedTarget: number; // Voted suggestion index

    constructor() { }
    ngOnInit() { }

    vote ( i: number ) : number {
        if ( this.userVoted && this.userVotedTarget != i ) return 0;
        
        if ( this.userVoted ) {
            this.suggestions[ i ].counter--;
            this.userVoted = false;
        } else {
            this.suggestions[ i ].counter++;
            this.userVoted = true;
            this.userVotedTarget = i;
        }
    }

    submit() : number {
        if ( this.formActionDisabled ) return 0;
        
        this.suggestions.push( new Suggestion( this.formAddValue ) );
        this.formAddValue = "";
        this.formActionDisabled = true;
    }
    
    onKeydown( value: string) : number {
        // Remove empty space symbols
        let testValue: string = value.replace( / /g, "" );
        this.formActionDisabled = true; 

        // Dependencies
        if ( !testValue || testValue.length < this.minLength ) return 0;
        if ( !testValue.match(/[A-Za-z0-9]/i) ) return 0;
        if ( this.suggestions.filter( v => v.text == value ).length > 0 ) return 0;

        this.formActionDisabled = false;
    }
}
