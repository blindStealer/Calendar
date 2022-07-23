import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setAuth: (bool: boolean): SetAuthAction => {
        return {
            type: AuthActionEnum.SET_AUTH,
            payload: bool
        }
    },
    setUser: (user: IUser): SetUserAction => {
        return {
            type: AuthActionEnum.SET_USER,
            payload: user
        }
    },
    setError: (payload: string): SetErrorAction => {
        return {
            type: AuthActionEnum.SET_ERROR,
            payload
        }
    },
    setIsLoading: (payload: boolean): SetIsLoadingAction => {
        return {
            type: AuthActionEnum.SET_IS_LOADING,
            payload
        }
    },


    login: (username: string, password: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true));
                const response = await axios.get<IUser[]>('./users.json')
                const user = response.data.find((user) => {
                    return user.username === username && user.password === password
                })

                if (user) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', user.username)
                    dispatch(AuthActionCreators.setAuth(true))
                    dispatch(AuthActionCreators.setUser(user))
                } else {
                        dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
                }


            } catch (e) {
                dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
            }

            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },

    logout: () => {
        return (dispatch: AppDispatch) => {

            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))

        }
    }

}

