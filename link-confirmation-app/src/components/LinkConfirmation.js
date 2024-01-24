// src/components/LinkConfirmation.js
import React, { useEffect } from 'react';

const LinkConfirmation = () => {
  useEffect(() => {
    const openLink = () => {
      const url = window.location.href;
      const confirmOpen = window.confirm('Are you sure you want to open the link?\n\n' + url);

      if (confirmOpen) {
        window.open(url, '_blank');
      }
    };

    document.getElementById('openLink').addEventListener('click', openLink);

    return () => {
      document.getElementById('openLink').removeEventListener('click', openLink);
    };
  }, []);

  return (
    <div>
      <button id="openLink">Open Link</button>
    </div>
  );
};

export default LinkConfirmation;
