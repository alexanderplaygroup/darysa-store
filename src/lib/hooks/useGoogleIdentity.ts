'use client';

import { GOOGLE_CLIENT_ID } from '@/config/env.config';
import { useEffect, useRef, useState } from 'react';

export function useGoogleIdentity(onSuccess: (credential: string) => void) {
  const [ready, setReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    const checkScript = () => {
      if (!window.__googleScriptLoaded) return false;
      if (!window.google) return false;
      return true;
    };

    const interval = setInterval(() => {
      if (checkScript() && !initialized.current) {
        if (!GOOGLE_CLIENT_ID) {
          console.error('❌ GOOGLE_CLIENT_ID undefined');
          return;
        }

        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response: any) => {
            if (!response?.credential) return;
            onSuccess(response.credential);
          },
        });

        initialized.current = true;
        setReady(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onSuccess]);

  const prompt = () => {
    if (!initialized.current) {
      console.warn('⚠️ Google Identity no inicializado');
      return;
    }
    window.google.accounts.id.prompt();
  };

  return { prompt, ready };
}
