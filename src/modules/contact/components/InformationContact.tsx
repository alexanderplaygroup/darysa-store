import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { FacebookIcon } from '@/common/components/icons/FacebookIcon';
import { InstagramIcon } from '@/common/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/components/icons/LinkedInIcon';
import { TikTokIcon } from '@/common/components/icons/TikTokIcon';
import { YouTubeIcon } from '@/common/components/icons/YouTubeIcon';

const InformationContact = () => {
  return (
    <div className="space-y-7.5 overflow-hidden rounded-lg bg-white shadow-lg lg:space-y-4 lg:p-8">
      <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Heading
          as="h1"
          variant="subheading"
          className="text-darysa-verde-oscuro font-black md:text-2xl"
        >
          Información de Contacto
        </Heading>
        <div className="flex items-center gap-6">
          <FacebookIcon size={30} className="text-darysa-verde-oscuro" />
          <LinkedInIcon size={28} className="text-darysa-verde-oscuro" />
          <InstagramIcon size={30} className="text-darysa-verde-oscuro" />
          <TikTokIcon size={30} className="text-darysa-verde-oscuro" />
          <YouTubeIcon size={30} className="text-darysa-verde-oscuro" />
        </div>
      </div>
      <dl className="grid grid-cols-1 items-center justify-between gap-6 lg:grid-cols-[auto_auto_auto]">
        <div className="space-y-1">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-800 md:text-lg">
            Oficina Central
          </Heading>
          <Text as="dd" variant="small" className="text-darysa-gris-800">
            Granja 1 - Alt. Km.30 Antigua Panamericana Sur, Lurín. Lima-Perú
          </Text>
        </div>
        <div className="space-y-1">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-800 md:text-lg">
            Horario de Atención
          </Heading>
          <Text
            as="dd"
            variant="small"
            className="text-darysa-gris-800 flex flex-wrap gap-x-4 gap-y-0"
          >
            Lunes a Viernes: 8:00 AM - 5:00 PM <span>Sábado: 8:00 AM - 12:00 PM</span>
          </Text>
        </div>
        <div className="space-y-1">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-800 md:text-lg">
            Correo{' '}
          </Heading>

          <Text as="dd" variant="small" className="text-darysa-gris-800">
            webmaster@daryza.com / comprahogar@daryza.com
          </Text>
        </div>
      </dl>
    </div>
  );
};

export default InformationContact;
