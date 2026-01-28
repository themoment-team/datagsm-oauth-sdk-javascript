import React, { ButtonHTMLAttributes } from 'react';
import { useDataGSM } from '../hooks/useDataGSM';
import DatabaseIcon from '../assets/databaseIcon';

export interface DataGSMLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: 'sm' | 'default' | 'lg';
}

export const DataGSMLoginButton = ({
  label = 'GSM으로 로그인',
  size = 'default',
  style,
  ...props
}: DataGSMLoginButtonProps) => {
  const { login } = useDataGSM();

  const handleLogin = () => {
    login();
  };

  const sizeStyles: Record<'sm' | 'default' | 'lg', React.CSSProperties> = {
    sm: {
      height: '2rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      gap: '0.375rem',
    },
    default: {
      height: '2.25rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      gap: '0.5rem',
    },
    lg: {
      height: '2.5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      gap: '0.75rem',
    },
  };

  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontFamily: 'Pretendard',
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button onClick={handleLogin} style={defaultStyle} {...props}>
      <DatabaseIcon />
      {label}
    </button>
  );
};
