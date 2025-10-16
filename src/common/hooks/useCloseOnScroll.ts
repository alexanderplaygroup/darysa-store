import { useUIStore } from '@/common/store/useUIStore';
import { useEffect } from 'react';

/**
 * Cierra automáticamente una UI (como megaMenu, cart, etc.)
 * al detectar scroll en la ventana.
 *
 * @param key - Clave del UI a cerrar ('megaMenu', 'cart', 'search', etc.)
 */
export function useCloseOnScroll(key: 'megaMenu' | 'cart' | 'search') {
  const { closeUI } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      closeUI(key);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [closeUI, key]);
}
