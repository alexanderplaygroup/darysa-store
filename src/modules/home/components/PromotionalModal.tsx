'use client';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/common/components/shadcn-ui/dialog';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PromotionalModalProps {
  modal: string;
}

export const PromotionalModal: React.FC<PromotionalModalProps> = ({ modal }) => {
  const [showModal, setShowModal] = useState(false);
  console.log('modal:', modal);
  useEffect(() => {
    // Mostrar el modal solo si no se ha mostrado en esta sesión
    if (!sessionStorage.getItem('promoModalShown')) {
      setShowModal(true);
      sessionStorage.setItem('promoModalShown', 'true');
    }
  }, []);

  return (
    <Dialog modal open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        showCloseButton={false}
        aria-description="Promoción especial"
        aria-describedby="Promoción especial"
        className="rounded-lg border-none p-0"
      >
        <DialogClose className="text-darysa-verde-oscuro absolute -top-4 -right-4 z-20 flex size-12 cursor-pointer items-center justify-center rounded-full border bg-white drop-shadow-lg">
          <X size={30} strokeWidth={3.5} />
        </DialogClose>

        <DialogHeader className="sr-only">
          <DialogTitle>Promoción especial </DialogTitle>
          <DialogDescription id="promotional-modal-description">
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="relative z-0 aspect-[144/103] w-full overflow-hidden rounded-lg">
          <AppImage src={modal} alt="Promotional Modal" fill sizes="500px" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
