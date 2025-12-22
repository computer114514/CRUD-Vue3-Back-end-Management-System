import {graphic} from "echarts/core"
//这玩意用来制作渐变色。
export const dashOpt1={
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    grid: {
        top: '2%',
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            type: 'line',
            areaStyle: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 150, 136,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 150, 136,0.2)',
                    },
                ]),
            },
            smooth: true,
            data: [120, 132, 301, 134, 90, 230, 210],
        },
        {
            type: 'line',
            smooth: true,
            data: [220, 122, 191, 234, 190, 130, 310],
        },
    ],
};
