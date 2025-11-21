import { Mail, PhoneCall, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { AppImage } from '../../custom-ui/AppImage';
import { Container } from '../../custom-ui/Container';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';
import { TikTokIcon } from '../../icons/TikTokIcon';
import { YouTubeIcon } from '../../icons/YouTubeIcon';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Información',
      links: [
        { name: 'Acerca de Nosotros', href: '/nosotros' },
        { name: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
        { name: 'Trabaja con Nosotros', href: '/trabajos' },
        { name: 'Mi Cuenta', href: '#cookies' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { name: 'Contacto', href: '/contacto' },
        { name: 'Libro de Reclamaciones', href: '/libro-de-reclamaciones' },
        { name: 'Servicio al Cliente', href: '/contacto/servicio-cliente' },
        { name: 'Política Anticorrupción y Antisoborno', href: '/politica-de-privacidad' },
      ],
    },
  ];

  const paymentMethods = [
    { src: '/pays/nuevos/amex.png', alt: 'Apple Pay' },
    { src: '/pays/nuevos/diners.png', alt: 'Visa' },
    { src: '/pays/nuevos/mastercard.png', alt: 'Discover' },
    { src: '/pays/nuevos/plin.png', alt: 'Mastercard' },
    { src: '/pays/nuevos/visa.png', alt: 'Cart' },
    { src: '/pays/nuevos/yape.png', alt: 'Cart' },
  ];

  return (
    <footer className="bg-darysa-gris-800 hidden md:block">
      <Container className="mb-0 pb-4">
        <div className="my-10 grid grid-cols-1 gap-14 lg:grid-cols-[0.5fr_1.5fr] lg:gap-10 xl:gap-4">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-8 lg:gap-8">
            <Link href="/" className="w-fit">
              <AppImage
                src="/logo-dark.svg"
                alt="Darysa"
                width={183}
                height={40}
                className="object-cover"
              />
            </Link>

            <dl className="text-darysa-gris-300 space-y-2.5 text-sm">
              <dt className="sr-only">Teléfono:</dt>
              <dd className="flex items-center gap-2">
                <PhoneCall className="size-5" />
                (01) 315-3600
              </dd>
              <dd className="flex items-center gap-2">
                <Smartphone className="size-5" />
                +51 967 767 831
              </dd>
              <dt className="sr-only">Email:</dt>
              <dd className="flex items-center gap-2">
                <Mail className="size-5" /> webmaster@daryza.com
              </dd>
            </dl>
            <div className="flex w-full items-center justify-start gap-6 xl:hidden xl:w-fit">
              <FacebookIcon size={30} className="text-white" />
              <LinkedInIcon size={28} className="text-white" />
              <InstagramIcon size={30} className="text-white" />
              <TikTokIcon size={30} className="text-white" />
              <YouTubeIcon size={30} className="text-white" />
            </div>
          </div>

          <div className="grid w-full grid-cols-[auto_auto_auto] items-start justify-start gap-12 lg:justify-between lg:gap-5 xl:gap-10">
            <section aria-labelledby="office-info">
              <h3 id="office-info" className="mb-3.5 text-base font-bold text-white">
                Oficina Central
              </h3>
              <address className="text-darysa-gris-300 mb-4 space-y-0.5 text-sm not-italic">
                <p>Granja 1 - Alt Km. 30</p>
                <p>Antigua Panamericana Sur, Lurín</p>
              </address>

              <p className="mb-2.5 text-base font-semibold text-white">Horario de Atención</p>
              <dl className="text-darysa-gris-300 space-y-0.5 text-sm">
                <div className="flex items-center gap-2">
                  <dt>Lunes-Viernes:</dt>
                  <dd>8:00 AM - 5:00 PM</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt>Sábado:</dt>
                  <dd>8:00 AM - 12:00 PM</dd>
                </div>
              </dl>
            </section>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <section key={index}>
                <h3 className="mb-3.5 text-base font-bold text-white">{section.title}</h3>
                <ul className="w-full space-y-3.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="w-full">
                      <Link
                        href={link.href}
                        className="text-darysa-gris-300 w-full text-end text-sm transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row items-center justify-between gap-6 border-t border-white/10 pt-4 xl:gap-0">
          <div className="hidden w-full items-center justify-center gap-6 xl:flex xl:w-fit">
            <a
              href="https://www.facebook.com/DaryzaPeru/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={30} className="text-white" />
            </a>

            <a
              href="https://pe.linkedin.com/company/daryza-s-a-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={28} className="text-white" />
            </a>

            <a
              href="https://www.instagram.com/daryza_peru/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={30} className="text-white" />
            </a>

            <a href="https://www.tiktok.com/@daryza_peru" target="_blank" rel="noopener noreferrer">
              <TikTokIcon size={30} className="text-white" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC7c3g8q4QvOTrlUIwnAn3jQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon size={30} className="text-white" />
            </a>
          </div>

          <div className="text-darysa-gris-300 text-xs font-semibold lg:text-sm">
            © 2012-2024. Daryza S.A.C RUC 20144109458 Todos los derechos reservados
          </div>

          {/* Payment Methods */}
          <div className="flex w-fit items-center justify-end gap-3.5">
            {paymentMethods.map((pay, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center overflow-hidden rounded-sm"
              >
                <AppImage
                  src={pay.src}
                  alt={pay.alt}
                  height={30}
                  width={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
