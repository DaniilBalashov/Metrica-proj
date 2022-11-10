import React from 'react';
import QRCode from 'react-qr-code';

export default function Result() {
  return (
    <div>
      <QRCode value="http://localhost:3000/" />
    </div>
  );
}
