import { Network } from 'react-shared-utils';

export const login = async credentials => Network.post('login', credentials);
