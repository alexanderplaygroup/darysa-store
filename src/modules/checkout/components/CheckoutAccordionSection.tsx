'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@shadcnui/accordion';
import { CheckCircle } from 'lucide-react';

type CheckoutAccordionSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  summaryView: React.ReactNode;
  onEdit?: () => void;
  isCompleted?: boolean;
  isEditing?: boolean;
};

export function CheckoutAccordionSection({
  id,
  title,
  children,
  summaryView,
  onEdit,
  isCompleted = false,
  isEditing = false,
}: CheckoutAccordionSectionProps) {
  const showCompletedView = isCompleted && !isEditing;

  return (
    <AccordionItem
      value={id}
      className="bg-darysa-green-500 group data-[state=open]:border-darysa-green-500 rounded-2xl border border-gray-200 py-2 last:border-b data-[state=open]:bg-transparent"
    >
      <AccordionTrigger
        showIcon={!showCompletedView}
        iconClassName="group-data-[state=open]:text-darysa-green-500 size-6" // 👈 aquí tus clases personalizadas
        className="group-data-[state=open]:text-darysa-green-500 items-center px-6 text-white hover:no-underline"
      >
        <div className="flex items-center gap-6 text-xl font-bold">
          <span className="group-data-[state=open]:bg-darysa-green-500 text-darysa-green-500 flex size-9 items-center justify-center rounded-full border bg-white text-xl font-bold group-data-[state=open]:text-white">
            {showCompletedView ? <CheckCircle className="size-5" /> : id}
          </span>
          {title}
        </div>

        {showCompletedView && (
          <span
            role="button"
            tabIndex={0}
            className="text-darysa-green-500 text-sm font-normal hover:underline hover:underline-offset-2"
            onClick={(e) => {
              e.stopPropagation(); // evita que se abra/cierre el accordion
              onEdit?.(); // llama la función onEdit si existe
            }}
          >
            Editar información
          </span>
        )}
      </AccordionTrigger>

      <AccordionContent className="px-6 pt-2">
        {showCompletedView ? summaryView : children}
      </AccordionContent>
    </AccordionItem>
  );
}
