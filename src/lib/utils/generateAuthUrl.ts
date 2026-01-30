import { DataGSMConfig } from '../types/types';
import CLIENT_URL from './clientUrl';

export const generateAuthUrl = (config: DataGSMConfig): string => {
  const { clientId, redirectUri } = config;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
  });

  return `${CLIENT_URL}/signin?${params.toString()}`;
};
