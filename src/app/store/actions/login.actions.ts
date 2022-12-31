import { UserLogin } from './../../models/users/user.model';
import { createAction, props } from "@ngrx/store";

export const loginAction = createAction("[user] Login" , props<{"user":UserLogin}>())