import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Charts = () => {
  // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.
  const data = [
    {
      id: 'japan',
      color: 'hsl(327, 70%, 50%)',
      data: [
        { x: 'plane', y: 160 },
        { x: 'helicopter', y: 285 },
        { x: 'boat', y: 207 },
        { x: 'train', y: 101 },
        { x: 'subway', y: 269 },
        { x: 'bus', y: 233 },
        { x: 'car', y: 106 },
        { x: 'moto', y: 94 },
        { x: 'bicycle', y: 291 },
        { x: 'horse', y: 293 },
        { x: 'skateboard', y: 158 },
        { x: 'others', y: 190 }
      ]
    }, {
      id: 'france',
      color: 'hsl(320, 70%, 50%)',
      data: [
        { x: 'plane', y: 237 },
        { x: 'helicopter', y: 57 },
        { x: 'boat', y: 268 },
        { x: 'train', y: 21 },
        { x: 'subway', y: 190 },
        { x: 'bus', y: 56 },
        { x: 'car', y: 211 },
        { x: 'moto', y: 208 },
        { x: 'bicycle', y: 246 },
        { x: 'horse', y: 248 },
        { x: 'skateboard', y: 19 },
        { x: 'others', y: 143 }
      ]
    }, {
      id: 'us',
      color: 'hsl(268, 70%, 50%)',
      data: [
        { x: 'plane', y: 255 },
        { x: 'helicopter', y: 130 },
        { x: 'boat', y: 48 },
        { x: 'train', y: 177 },
        { x: 'subway', y: 114 },
        { x: 'bus', y: 216 },
        { x: 'car', y: 157 },
        { x: 'moto', y: 221 },
        { x: 'bicycle', y: 217 },
        { x: 'horse', y: 279 },
        { x: 'skateboard', y: 54 },
        { x: 'others', y: 20 }
      ]
    }, {
      id: 'germany',
      color: 'hsl(135, 70%, 50%)',
      data: [
        { x: 'plane', y: 251 },
        { x: 'helicopter', y: 181 },
        { x: 'boat', y: 293 },
        { x: 'train', y: 61 },
        { x: 'subway', y: 31 },
        { x: 'bus', y: 168 },
        { x: 'car', y: 62 },
        { x: 'moto', y: 80 },
        { x: 'bicycle', y: 92 },
        { x: 'horse', y: 290 },
        { x: 'skateboard', y: 255 },
        { x: 'others', y: 76 }
      ]
    }, {
      id: 'norway',
      color: 'hsl(225, 70%, 50%)',
      data: [
        { x: 'plane', y: 2 },
        { x: 'helicopter', y: 212 },
        { x: 'boat', y: 79 },
        { x: 'train', y: 295 },
        { x: 'subway', y: 19 },
        { x: 'bus', y: 177 },
        { x: 'car', y: 172 },
        { x: 'moto', y: 112 },
        { x: 'bicycle', y: 4 },
        { x: 'horse', y: 190 },
        { x: 'skateboard', y: 113 },
        { x: 'others', y: 135 }
      ]
    }
  ];

  return (
    <div style={{ height: '700px' }}>
      <ResponsiveLine
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        axisRight={null}
        axisTop={null}
        colors={{ scheme: 'nivo' }}
        data={data}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: { itemBackground: 'rgba(0, 0, 0, .03)', itemOpacity: 1 }
              }
            ]
          }
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={2}
        pointColor={{ theme: 'background' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        pointSize={10}
        useMesh
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
      />
    </div>
  );
};

export default Charts;
