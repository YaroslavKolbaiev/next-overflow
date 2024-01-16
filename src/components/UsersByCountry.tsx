'use client';

import { UsersByCountry } from '@/types';
import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import worldCountries from '@/constants/world_countries.json';

const UsersByCountryChart = ({ users }: { users: UsersByCountry[] }) => {
  return (
    <div
      className="background-light900_dark200
        relative
        col-span-6
        rounded-md
        xl:col-span-3
      "
    >
      <h1
        className="text-dark500_light500
          absolute
          left-4
          top-4
          z-10
          font-semibold
        "
      >
        Users by Country
      </h1>
      <ResponsiveChoropleth
        data={users}
        features={worldCountries.features}
        colors="nivo"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 100]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={100}
        projectionTranslation={[0.5, 0.45]}
        projectionRotation={[0, 0, 0]}
        borderWidth={0.5}
        borderColor="#ffffff"
        legends={[
          {
            anchor: 'left',
            direction: 'column',
            justify: false,
            translateX: 40,
            translateY: 50,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#A9A9A9',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default UsersByCountryChart;
