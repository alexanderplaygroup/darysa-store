'use client';

import { GOOGLE_CLIENT_ID } from '@/config/env.config';
import { useEffect, useState } from 'react';

type Props = {
  onSuccess: (token: string) => void;
};

export function useGoogleAuth({ onSuccess }: Props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Cargar el script de Google si no existe
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

    return () => {
      // Opcional: limpiar script al desmontar
      // document.body.removeChild(script);
    };
  }, []);

  // 2. Inicializar Google Identity Services
  useEffect(() => {
    if (!scriptLoaded || !window.google) return;

    // Configuración global
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      // Esta función recibe el ID TOKEN directamente
      callback: (response: any) => {
        if (response.credential) {
          console.log('ID Token recibido:', response.credential);
          onSuccess(response.credential);
        }
      },
      auto_select: false, // true si quieres login automático sin click
      cancel_on_tap_outside: true,
    });

    // A: Mostrar One Tap (Popup flotante)
    window.google.accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed()) {
        console.log('One Tap no se mostró:', notification.getNotDisplayedReason());
      }
    });
  }, [scriptLoaded, onSuccess]);

  // 3. Función para pintar el botón en un DIV específico
  const renderGoogleButton = (elementId: string) => {
    if (!window.google || !scriptLoaded) return;

    const element = document.getElementById(elementId);
    if (element) {
      window.google.accounts.id.renderButton(element, {
        type: 'standard', // 'standard' | 'icon'
        theme: 'none', // 'outline' | 'filled_blue' | 'filled_black'
        size: 'large', // 'large' | 'medium' | 'small'
        text: 'signin_with', // Texto del botón
        shape: 'rectangular', // 'rectangular' | 'pill' | 'circle'
        width: '100%', // Ancho dinámico (aunque Google tiene max-width)
        logo_alignment: 'center',
      });
    }
  };

  return {
    scriptLoaded,
    renderGoogleButton,
  };
}
