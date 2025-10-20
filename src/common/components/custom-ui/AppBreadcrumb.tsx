'use client';

import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@shadcnui/breadcrumb';
import Link from 'next/link';
import { Fragment } from 'react';

export type BreadcrumbItemType = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

type Props = {
  items: BreadcrumbItemType[];
  /** clase extra para personalizar estilos */
  className?: string;
  /** clase específica para el item actual (opcional) */
  currentClassName?: string;
};

export function AppBreadcrumb({ items, className, currentClassName }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList className={cn('sm:gap-1.5', className)}>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : item.isCurrent ? (
                <BreadcrumbPage className={cn(currentClassName)}>{item.label}</BreadcrumbPage>
              ) : (
                <span>{item.label}</span>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
