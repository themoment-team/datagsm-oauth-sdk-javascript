import { useContext } from 'react';
import { OAuthContext } from './context';

export function useOAuth() {
  const context = useContext(OAuthContext);

  if (!context) {
    throw new Error('useOAuth must be used within OAuthProvider');
  }

  return context;
}
