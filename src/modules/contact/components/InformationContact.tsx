import { FacebookIcon } from '@/common/components/icons/FacebookIcon';
import { InstagramIcon } from '@/common/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/components/icons/LinkedInIcon';
import { TikTokIcon } from '@/common/components/icons/TikTokIcon';
import { YouTubeIcon } from '@/common/components/icons/YouTubeIcon';
const InformationContact = () => {
  return (
    <div className="space-y-6 px-10 py-8">
      <div className="flex items-center justify-between">
        <h3 className="text-darysa-verde-oscuro text-3xl font-black">Información de Contacto</h3>{' '}
        <div className="flex items-center gap-6">
          <FacebookIcon size={30} className="text-darysa-verde-oscuro" />
          <LinkedInIcon size={28} className="text-darysa-verde-oscuro" />
          <InstagramIcon size={30} className="text-darysa-verde-oscuro" />
          <TikTokIcon size={30} className="text-darysa-verde-oscuro" />
          <YouTubeIcon size={30} className="text-darysa-verde-oscuro" />
        </div>
      </div>
      <dl className="flex flex-col justify-between gap-6 md:flex-row">
        <div>
          <dt className="text-darysa-gris-oscuro text-2xl font-bold">Oficina Central</dt>
          <dd className="text-darysa-gris-oscuro text-sm">
            Granja 1 - Alt. Km.30 Antigua Panamericana Sur, Lurín. Lima-Perú
          </dd>
        </div>
        <div>
          <dt className="text-darysa-gris-oscuro text-2xl font-bold">Horario de Atención</dt>
          <dd className="text-darysa-gris-oscuro text-sm">
            L-V: 8:00 am - 5:00 pm S: 8:00 am - 12:00 pm
          </dd>
        </div>
        <div>
          <dt className="text-darysa-gris-oscuro text-2xl font-bold">Correo</dt>
          <dd className="text-darysa-gris-oscuro text-sm">
            webmaster@daryza.com / comprahogar@daryza.com
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default InformationContact;
