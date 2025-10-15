import { Mail, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { AppImage } from '../custom-ui/AppImage';
import { Container } from '../custom-ui/Container';
import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { TikTokIcon } from '../icons/TikTokIcon';
import { YouTubeIcon } from '../icons/YouTubeIcon';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Información',
      links: [
        { name: 'Acerca de Nosotros', href: '#mentions' },
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
        { name: 'Política Anticorrupción y Antisoborno', href: 'politica-de-privacidad' },
      ],
    },
  ];

  const paymentMethods = [
    { src: '/pays/Method=ApplePay.png', alt: 'Apple Pay' },
    { src: '/pays/Method=Visa.png', alt: 'Visa' },
    { src: '/pays/Method=Discover.png', alt: 'Discover' },
    { src: '/pays/Method=Mastercard.png', alt: 'Mastercard' },
    { src: '/pays/Cart.png', alt: 'Cart' },
  ];

  return (
    <footer className="bg-darysa-gris-oscuro">
      <Container className="mb-0 pb-6">
        <div className="my-14 grid grid-cols-[0.7fr_1.3fr]">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-10">
            <Link href="/" className="w-fit">
              <AppImage
                src="/logo-dark.svg"
                alt="Darysa"
                width={247}
                height={54}
                className="object-cover"
              />
            </Link>

            <dl className="text-darysa-gris-claro space-y-2.5 text-sm">
              <dt className="sr-only">Teléfono:</dt>
              <dd className="flex items-center gap-2">
                <PhoneCall className="size-5" />
                +51 (01) 315 3600
              </dd>
              <dt className="sr-only">Email:</dt>
              <dd className="flex items-center gap-2">
                <Mail className="size-5" /> webmaster@daryza.com
              </dd>
            </dl>
          </div>

          <div className="flex w-full items-start justify-between gap-10">
            <section aria-labelledby="office-info">
              <h3 id="office-info" className="mb-3.5 text-base font-bold text-white">
                Oficina Central
              </h3>
              <address className="text-darysa-gris-claro mb-4 space-y-0.5 text-sm not-italic">
                <p>Granja 1 - Alt Km. 30</p>
                <p>Antigua Panamericana Sur, Lurín</p>
              </address>

              <p className="mb-2.5 text-base font-semibold text-white">Horario de Atención</p>
              <dl className="text-darysa-gris-claro space-y-0.5 text-sm">
                <div className="flex items-center gap-2">
                  <dt>Lunes-Viernes:</dt>
                  <dd>8:00 AM – 5:15 PM</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt>Sábado:</dt>
                  <dd>8:00 AM – 12:15 PM</dd>
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
                        className="text-darysa-gris-claro w-full text-end text-sm transition-colors hover:text-white"
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
        <div className="grid grid-cols-[0.7fr_1.3fr] border-t border-white/10 pt-6">
          {/* <div className="flex w-fit items-center gap-6">
            {socialIcons.map((icon, idx) => (
              <div key={idx} className="h-[32px] min-w-[32px]">
                <AppImage
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-auto rounded-sm object-contain"
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div> */}
          <div className="flex w-fit items-center gap-6">
            <FacebookIcon size={30} className="text-white" />
            <LinkedInIcon size={28} className="text-white" />
            <InstagramIcon size={30} className="text-white" />
            <TikTokIcon size={30} className="text-white" />
            <YouTubeIcon size={30} className="text-white" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-darysa-gris-claro text-sm font-semibold">
              © 2012-2024. Daryza S.A.C RUC 20144109458 Todos los derechos reservados
            </div>

            {/* Payment Methods */}
            <div className="flex w-fit items-center justify-end gap-2">
              {paymentMethods.map((pay, idx) => (
                <div key={idx} className="h-[30px] min-w-[45px]">
                  <AppImage
                    src={pay.src}
                    alt={pay.alt}
                    className="w-auto rounded-sm object-contain"
                    width={50}
                    height={30}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
