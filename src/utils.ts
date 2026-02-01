import type { OAuthConfig } from './types';

export function buildOAuthUrl(baseUrl: string, config: OAuthConfig): string {
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
  });

  return `${baseUrl}?${params.toString()}`;
}

export function navigateToUrl(url: string): void {
  window.location.href = url;
}
