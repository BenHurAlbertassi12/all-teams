import React from 'react';

type AlertProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Alert;
