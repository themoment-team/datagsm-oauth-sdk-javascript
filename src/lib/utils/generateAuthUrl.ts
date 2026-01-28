import { DataGSMConfig } from '../types/types';
import serverUrl from './serverUrl';

export const generateAuthUrl = (config: DataGSMConfig): string => {
  const { clientId, redirectUri } = config;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
  });

  return `${serverUrl}?${params.toString()}`;
};
