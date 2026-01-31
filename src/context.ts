import { createContext } from 'react';
import type { OAuthContextValue } from './types';

export const OAuthContext = createContext<OAuthContextValue | null>(null);
