'use client';

import { GOOGLE_CLIENT_ID } from '@/config/env.config';
import { useEffect, useState } from 'react';

type Props = {
  onSuccess: (token: string) => void;
  isAuthenticated?: boolean; // Nuevo parámetro opcional
};

export function useGoogleAuth({ onSuccess, isAuthenticated = false }: Props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Cargar el script
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

  // 2. Inicializar y Mostrar (solo si NO está autenticado)
  useEffect(() => {
    if (!scriptLoaded || !window.google) return;

    // Si el usuario ya está logueado, cancelamos cualquier prompt abierto y salimos
    if (isAuthenticated) {
      window.google.accounts.id.cancel();
      return;
    }

    // Inicializar configuración
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response: any) => {
        if (response.credential) {
          console.log('ID Token recibido:', response.credential);
          // Cerramos el prompt visualmente apenas recibimos el token
          window.google.accounts.id.cancel();
          onSuccess(response.credential);
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true,
    });

    // Mostrar One Tap
    window.google.accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed()) {
        console.log('One Tap no se mostró:', notification.getNotDisplayedReason());
      }
    });
  }, [scriptLoaded, onSuccess, isAuthenticated]); // Agregamos isAuthenticated a las dependencias

  // 3. Render Button (Sin cambios, pero validamos script)
  const renderGoogleButton = (elementId: string) => {
    if (!window.google || !scriptLoaded) return;
    const element = document.getElementById(elementId);
    if (element) {
      window.google.accounts.id.renderButton(element, {
        type: 'standard',
        theme: 'outline', // Cambié 'none' a 'outline' porque 'none' no es válido estándar, pero usa el que prefieras
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        width: '100%',
        logo_alignment: 'center',
      });
    }
  };

  return { scriptLoaded, renderGoogleButton };
}
