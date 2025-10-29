import Link from 'next/link';
import { AppImage } from '../../custom-ui/AppImage';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';
import { TikTokIcon } from '../../icons/TikTokIcon';
import { YouTubeIcon } from '../../icons/YouTubeIcon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../shadcn-ui/accordion';

export default function Footermobile() {
  const paymentMethods = [
    { src: '/pays/Method=ApplePay.png', alt: 'Apple Pay' },
    { src: '/pays/Method=Visa.png', alt: 'Visa' },
    { src: '/pays/Method=Discover.png', alt: 'Discover' },
    { src: '/pays/Method=Mastercard.png', alt: 'Mastercard' },
    { src: '/pays/Cart.png', alt: 'Cart' },
  ];
  return (
    <footer className="bg-darysa-gris-800 block pt-7 md:hidden">
      <Link href="/" className="mb-6 flex items-center justify-center">
        <AppImage src="/logo-dark.svg" alt="Darysa" width={172} height={40} />
      </Link>
      <Accordion type="multiple" className="space-y-1">
        <AccordionItem
          value="contacto"
          className="border-darysa-gris-400 data-[state=open]:border-none"
        >
          <AccordionTrigger className="px-4 text-sm text-white hover:no-underline">
            Contacto
          </AccordionTrigger>
          <AccordionContent className="bg-darysa-gris-630 space-y-4 pt-4 text-sm text-gray-300">
            <p className="px-4">Correo: contacto@daryza.com</p>
            <div className="bg-darysa-gris-800 h-px w-full" />

            <p className="px-4">Teléfono: (01) 123-4567</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="oficina"
          className="border-darysa-gris-400 data-[state=open]:border-none"
        >
          <AccordionTrigger className="px-4 text-sm text-white hover:no-underline">
            Oficina Central
          </AccordionTrigger>
          <AccordionContent className="bg-darysa-gris-630 space-y-4 pt-4 text-sm text-gray-300">
            <p className="px-4">Granja 1 - Alt Km. 30 Antigua Panamericana Sur, Lurín</p>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <p className="px-4">Lunes-Viernes: 8:00 AM - 5:15 AM</p>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <p className="px-4">Sábado: 8:00 AM - 12:15 AM</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="informacion"
          className="border-darysa-gris-400 data-[state=open]:border-none"
        >
          <AccordionTrigger className="px-4 text-sm text-white hover:no-underline">
            Información
          </AccordionTrigger>
          <AccordionContent className="bg-darysa-gris-630 flex flex-col gap-4 pt-4 text-sm text-gray-300">
            <Link href="/nosotros" className="px-4">
              Acerca de Nosotros
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/terminos-y-condiciones" className="px-4">
              Términos y Condiciones
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/trabajos" className="px-4">
              Trabaja con Nosotros
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/pedidos" className="px-4">
              Mi Cuenta
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="ayuda"
          className="border-darysa-gris-400 data-[state=open]:border-none"
        >
          <AccordionTrigger className="px-4 text-sm text-white hover:no-underline">
            Ayuda
          </AccordionTrigger>
          <AccordionContent className="bg-darysa-gris-630 flex flex-col gap-4 pt-4 text-sm text-gray-300">
            <Link href="/contacto" className="px-4">
              Contacto
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/libro-de-reclamaciones" className="px-4">
              Libro de Reclamaciones
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/contacto/servicio-cliente" className="px-4">
              Servicio al Cliente
            </Link>
            <div className="bg-darysa-gris-800 h-px w-full" />
            <Link href="/politica-de-privacidad" className="px-4">
              Política Anticorrupción y Antisoborno
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-7 mb-9 flex items-center justify-center gap-7">
        <FacebookIcon size={36} className="text-white" />
        <LinkedInIcon size={34} className="text-white" />
        <InstagramIcon size={36} className="text-white" />
        <TikTokIcon size={36} className="text-white" />
        <YouTubeIcon size={36} className="text-white" />
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5">
        <p className="text-darysa-gris-750 text-sm">Métodos de Pago Seguro</p>
        <div className="mb-7 flex items-center justify-center gap-2">
          {paymentMethods.map((pay, idx) => (
            <div key={idx} className="relative flex h-8 w-[50px] items-center justify-center">
              <AppImage src={pay.src} alt={pay.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-darysa-gris-1100 py-4 text-white">
        <p className="text-center text-xs text-white/50">
          © 2012-2024. Daryza S.A.C RUC 20144109458 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
