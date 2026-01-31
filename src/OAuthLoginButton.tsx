import { type ButtonHTMLAttributes } from 'react';
import { useOAuth } from './hooks';

export interface OAuthLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function OAuthLoginButton({
  children = 'Data GSM 로그인',
  onClick,
  ...props
}: OAuthLoginButtonProps) {
  const { login } = useOAuth();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (!e.defaultPrevented) {
      login();
    }
  };

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
