'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { ScrollArea, ScrollBar } from '@/common/components/shadcn-ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcnui/tabs';
import { useState } from 'react';

interface TimelineItem {
  year: string;

  description: string;
}

interface HistoryTimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
}

export function HistoryTimeline({
  items,
  title = 'Nuestra History',
  subtitle = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda maiores voluptates...',
}: HistoryTimelineProps) {
  const [selectedYear, setSelectedYear] = useState<string>(items[0]?.year || '');

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-12 text-center">
        <Heading variant="heading" className="mb-2">
          {title}
        </Heading>
        <Text variant="small" className="text-darysa-gris-800 mx-auto max-w-[821px]">
          {subtitle}
        </Text>
      </div>

      {/* Tabs for Years */}
      <Tabs
        value={selectedYear}
        onValueChange={setSelectedYear}
        className="grid flex-none grid-cols-1 items-stretch justify-start gap-4 lg:grid-cols-[0.4fr_1.6fr] lg:gap-2"
      >
        {/* Year selector */}

        <ScrollArea className="relative w-full pb-5 lg:h-[340px] lg:pr-4">
          <TabsList className="flex h-fit w-full flex-row gap-5 bg-transparent p-0 lg:flex-col">
            {items.map((item) => (
              <TabsTrigger
                key={item.year}
                value={item.year}
                onClick={() => setSelectedYear(item.year)}
                className="data-[state=active]:bg-darysa-green-500 text-darysa-green-500 border-darysa-green-500 w-full rounded-lg border bg-transparent py-3 font-bold data-[state=active]:text-white"
              >
                {item.year}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Scroll horizontal en móvil */}
          <ScrollBar orientation="horizontal" className="lg:hidden" />
          {/* Scroll vertical en escritorio */}
          <ScrollBar orientation="vertical" className="hidden lg:flex" />
        </ScrollArea>

        {/* Timeline content */}
        {items.map((item) => (
          <TabsContent key={item.year} value={item.year}>
            <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:gap-6">
              <div className="relative mx-auto aspect-3/4 w-full max-w-[300px]">
                <AppImage src="" alt="" fill sizes="300px" />
              </div>
              <Text
                variant="small"
                className="text-darysa-gris-800 max-w-[600px] text-center leading-loose max-lg:mx-auto lg:max-w-full lg:text-start"
              >
                {item.description}
              </Text>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
