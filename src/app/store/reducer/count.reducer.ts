import { createReducer, on } from '@ngrx/store';
import { Increment } from '../actions/count.acitons';


 export const countReducer = createReducer(
    0,
    on(Increment,(state)=>state+1)
 )