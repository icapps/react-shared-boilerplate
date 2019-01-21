import config from 'react-native-config';

const { BASE_API_URL } = config;
const IS_DEBUG = config.IS_DEBUG === 'true';

export { BASE_API_URL, IS_DEBUG };
