import * as Login from './../actions/login.actions';
import { UserLogin } from './../../models/users/user.model';
import { createReducer, on } from "@ngrx/store";
// import { loginAction } from '../actions/login.actions';
import { state } from '@angular/animations';





export const initalState:UserLogin[]=[]

 export const LoginReducer = createReducer(
    initalState,
    on(Login.loginAction,(state,{user})=>{
        return [...state,user]
    })
 )