import { API_URL } from '@env';
import { ApiPromise, WsProvider } from '@polkadot/api';

const wsProvider = new WsProvider(API_URL);
const apiClient = new ApiPromise({ provider: wsProvider });

export default apiClient;
