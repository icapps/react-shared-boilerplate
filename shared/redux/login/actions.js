import { LoginService } from 'react-shared-services';

import * as types from './types';

export const login = credentials => ({ type: types.LOGIN, payload: LoginService.login(credentials) });
