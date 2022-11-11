import React from 'react';
import QRCode from 'react-qr-code';

export default function Result({ id }) {
  return (
    <div>
      <QRCode value={`https://termica.herokuapp.com/result/${id}/result`} />
    </div>
  );
}
