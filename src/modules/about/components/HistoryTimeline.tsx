'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { ScrollArea } from '@/common/components/shadcn-ui/scroll-area';
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
        className="grid flex-none grid-cols-[0.4fr_1.6fr] items-stretch justify-start gap-10"
      >
        {/* Year selector */}

        <ScrollArea className="relative h-[340px] w-full pr-4">
          {/* <div
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-4"
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)', // fondo blanco semitransparente
              boxShadow: '0 -8px 12px -2px rgba(255,255,255,0.3)', // sombra blanca sincronizada
            }}
          /> */}

          <TabsList className="flex h-fit w-full flex-col gap-5 bg-transparent p-0">
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
        </ScrollArea>

        {/* Timeline content */}
        {items.map((item) => (
          <TabsContent key={item.year} value={item.year}>
            <div className="grid grid-cols-[0.5fr_1.5fr] items-center gap-10">
              <div className="relative aspect-3/4 h-full w-full">
                <AppImage src="" alt="" fill sizes="300px" />
              </div>
              <Text variant="small" className="text-darysa-gris-800 leading-loose">
                {item.description}
              </Text>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
