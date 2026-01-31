import { type ReactNode, useMemo, useCallback } from 'react';
import { OAuthContext } from './context';
import { DATAGSM_OAUTH_URL } from './constants';
import { buildOAuthUrl, navigateToUrl } from './utils';
import type { OAuthConfig, OAuthContextValue } from './types';

export interface OAuthProviderProps extends OAuthConfig {
  children: ReactNode;
}

export function OAuthProvider({ clientId, redirectUri, children }: OAuthProviderProps) {
  const login = useCallback(() => {
    const url = buildOAuthUrl(DATAGSM_OAUTH_URL, { clientId, redirectUri });
    navigateToUrl(url);
  }, [clientId, redirectUri]);

  const value: OAuthContextValue = useMemo(
    () => ({
      clientId,
      redirectUri,
      login,
    }),
    [clientId, redirectUri, login],
  );

  return <OAuthContext.Provider value={value}>{children}</OAuthContext.Provider>;
}
