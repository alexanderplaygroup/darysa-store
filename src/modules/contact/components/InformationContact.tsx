import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { FacebookIcon } from '@/common/components/icons/FacebookIcon';
import { InstagramIcon } from '@/common/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/components/icons/LinkedInIcon';
import { TikTokIcon } from '@/common/components/icons/TikTokIcon';
import { YouTubeIcon } from '@/common/components/icons/YouTubeIcon';

const InformationContact = () => {
  return (
    <div className="space-y-6 px-10 py-8">
      <div className="flex items-center justify-between">
        <Heading
          as="h1"
          variant="heading"
          className="text-darysa-verde-oscuro font-black md:text-3xl"
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
      <dl className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="space-0.5">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-oscuro md:text-2xl">
            Oficina Central
          </Heading>
          <Text as="dd" variant="small" className="text-darysa-gris-oscuro">
            Granja 1 - Alt. Km.30 Antigua Panamericana Sur, Lurín. Lima-Perú
          </Text>
        </div>
        <div className="space-0.5">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-oscuro md:text-2xl">
            Horario de Atención
          </Heading>
          <Text as="dd" variant="small" className="text-darysa-gris-oscuro">
            L-V: 8:00 am - 5:00 pm S: 8:00 am - 12:00 pm
          </Text>
        </div>
        <div className="space-0.5">
          <Heading as="dt" variant="cardTitle" className="text-darysa-gris-oscuro md:text-2xl">
            Correo{' '}
          </Heading>

          <Text as="dd" variant="small" className="text-darysa-gris-oscuro">
            webmaster@daryza.com / comprahogar@daryza.com
          </Text>
        </div>
      </dl>
    </div>
  );
};

export default InformationContact;
