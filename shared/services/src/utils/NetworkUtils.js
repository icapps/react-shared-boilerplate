import { Network } from 'react-shared-utils';

const setRootApiUrl = url => {
  Network.setHost(url);
};

export { setRootApiUrl };
