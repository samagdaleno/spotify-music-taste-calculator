import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { ToolboxComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// Importing necessary types for TypeScript
import { EChartsOption } from 'echarts/types/dist/shared';
import TrackDetails from '../../../interfaces/spotify/trackDetails';import { TooltipComponent } from 'echarts/components';


echarts.use([
    ToolboxComponent,TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

export default function NightingaleChart({ trackDetails }: { trackDetails: TrackDetails }) {
    useEffect(() => {
        console.log(trackDetails);
        const chartDom = document.getElementById('main') as HTMLDivElement;
        const myChart = echarts.init(chartDom);

        const option: EChartsOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 150],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: trackDetails.energy, name: 'Danceability' },
                        { value: trackDetails.energy, name: 'Energy' },
                        { value: trackDetails.valence, name: 'Happiness' }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);

        // Cleanup function to dispose of the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return (
        <div id="main" style={{ width: '100%', height: '100%' }}></div>
    );
}
