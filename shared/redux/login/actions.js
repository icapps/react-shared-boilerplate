import { LoginService } from '../../services';

import * as types from './types';

export const login = credentials => ({ type: types.LOGIN, payload: LoginService.login(credentials) });
