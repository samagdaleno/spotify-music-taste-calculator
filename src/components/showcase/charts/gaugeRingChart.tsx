import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import TrackDetails from '../../../interfaces/spotify/trackDetails';

export default function GaugeRingChart({ trackDetails }: { trackDetails: TrackDetails}) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const gaugeData = [
        {
          value: trackDetails.energy,
          name: 'Energy',
          title: {
            offsetCenter: ['0%', '-30%'],
            link:"https://www.youtube.com/watch?v=2HQaBWziYvY"
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
          },
          itemStyle: {
            color: '#475D36',
          },
        },
        {
          value: trackDetails.danceability,
          name: 'Danceability',
          title: {
            offsetCenter: ['0%', '0%'],
            bottom: '400px'
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '10%']
          },
          itemStyle: {
            color: '#222D2F', 
          },
        },
        {
          value: trackDetails.valence,
          name: 'Happiness',
          title: {
            offsetCenter: ['0%', '30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
          },
          itemStyle: {
            color: '#7B6420', 
          },
        }
      ];

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} : {b}',
        },
        animationDuration: 1500,
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 2,
                borderColor: '#E6EBF8'
              }
            },
            axisLine: {
              lineStyle: {
                width: 30
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              fontSize: 10,
              itemGap: 100 ,
            },
            detail: {
              width: 40,
              height: 5,
              fontSize: 10,
              color: 'inherit',
              borderColor: 'inherit',
              borderRadius: 20,
              borderWidth: .5,
              formatter: '{value}%'
            }
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [trackDetails]);

  return <div ref={chartRef} style={{ width: '100%', height: '350px' }} />;
}

