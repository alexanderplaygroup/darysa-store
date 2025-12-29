'use client';
import Script from 'next/script';

export function GoogleScriptLoader() {
  return (
    <Script
      src="https://accounts.google.com/gsi/client"
      strategy="afterInteractive"
      data-enable-fedcm="false"
      onLoad={() => {
        window.__googleScriptLoaded = true;
        console.log('✅ Google Identity script cargado');
      }}
    />
  );
}
