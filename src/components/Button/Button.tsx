import React, { FunctionComponent } from 'react';

interface ButtonProps {
  height?: string;
  width?: string;
  bg?: string;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  height,
  width,
  bg,
  color,
  children,
  type,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      style={{
        height: `${height}`,
        width: `${width}`,
        backgroundColor: `${bg}`,
        color: `${color}`,
        borderRadius: '5px',
        padding: '0 15px',
        border: 'none',
        cursor: 'pointer',
      }}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
