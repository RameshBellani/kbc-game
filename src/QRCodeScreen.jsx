import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeScreen = () => {
  return (
    <div className="qr-section">
      <p>Scan the QR code to join the game:</p>
      <QRCodeCanvas value={window.location.href} size={200} />
    </div>
  );
};

export default QRCodeScreen;
