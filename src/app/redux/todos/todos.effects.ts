import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/store-devtools/src/reducer';

@Injectable()
export class TodosEffects{
    constructor(private actions$: Actions ){
    }
}