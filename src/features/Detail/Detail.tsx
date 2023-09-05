'use client';
import React from 'react';
import { DetailBanner } from './components/DetailBanner';
import { Thumbnail } from './components/Thumbnail';
import ButtonPlay from './components/ButtonPlay';
import { animeTypes } from '@/types';
import { Info } from './components/Info';
import { Rating } from './components/Rating';
import { TabDetail } from './components/TabDetail';

export const Detail = ({ data }: { data: Partial<animeTypes> }) => {
  return (
    <div className="relative min-h-screen">
      <DetailBanner src={`${data.thumbnail}`} />
      <div className="absolute top-0 w-full flex items-end justify-between translate-y-[38%] z-50 container">
        <Thumbnail src={`${data.thumbnail}`} />
        {data.episodeLists ? (
          <ButtonPlay href={'/stream/' + data.episodeLists[0].slug} />
        ) : null}
      </div>
      <div className="absolute w-full h-full bg-background rounded-t-3xl inset-x-0 -translate-y-[40px]"></div>
      <div className="relative pt-[20px]">
        <div className="container flex items-center gap-[50px] justify-between">
          <h2 className="text-white text-paragraph font-semibold">
            {data.title}
          </h2>
          <Rating rating={data.rating} />
        </div>
        <Info data={data} />
        <TabDetail data={data} />
      </div>
    </div>
  );
};
