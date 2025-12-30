'use client';

import { GOOGLE_CLIENT_ID } from '@/config/env.config';
import { useEffect, useState } from 'react';

type Props = {
  onSuccess: (token: string) => void;
  isAuthenticated?: boolean;
};

export function useGoogleAuth({ onSuccess, isAuthenticated = false }: Props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (window.google?.accounts?.id) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !window.google) return;

    if (isAuthenticated) {
      window.google.accounts.id.cancel();
      return;
    }

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response: any) => {
        if (response.credential) {
          // console.log('ID Token recibido:', response.credential);
          window.google.accounts.id.cancel();
          onSuccess(response.credential);
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true,
    });

    window.google.accounts.id.prompt();
  }, [scriptLoaded, onSuccess, isAuthenticated]);

  const renderGoogleButton = (elementId: string) => {
    if (!window.google || !scriptLoaded) return;
    const element = document.getElementById(elementId);
    if (element) {
      window.google.accounts.id.renderButton(element, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        width: 250, // ✅ usa px, no %, Google da warning con %
        logo_alignment: 'center',
      });
    }
  };

  return { scriptLoaded, renderGoogleButton };
}
