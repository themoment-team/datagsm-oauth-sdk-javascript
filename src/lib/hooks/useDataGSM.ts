import { useDataGSMConfig } from '../store/OauthProvider';
import { generateAuthUrl } from '../utils/generateAuthUrl';

export const useDataGSM = () => {
  const config = useDataGSMConfig();

  const login = () => {
    const authUrl = generateAuthUrl(config);

    window.location.href = authUrl;
  };
  return {
    login,
    config,
  };
};
