import * as React from 'react';

import Icon from 'components/Icon'

import './index.css'
import { JSX } from 'react/jsx-runtime';

interface ButtonProps {
  icon?: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ icon, label, onClick }) => {
  const getContent = (): string | JSX.Element => {
    if (icon) {
      return <Icon name={icon} />
    } else {
      return label
    }
  }

  return (
    <button
      className='btn'
      onClick={onClick}>{getContent()}
    </button>
  );
};

export default Button;
