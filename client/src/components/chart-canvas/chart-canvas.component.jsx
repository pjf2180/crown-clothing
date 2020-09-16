import React from 'react';
import { Chart } from 'chart.js';
import { useEffect } from 'react';

export default function ChartCanvas({ chartId }) {
    let chart;
    let config = {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: '',
                data: [5326, 6785, 5453, 5873, 2432, 3654],
                backgroundColor: 'rgba(52, 170, 68,0.2)',
                borderColor: 'rgba(52, 170, 68,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },

                }],
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }

                    }
                ]
            }
        }
    }
    useEffect(() => {
        chart = new Chart(document.getElementById(chartId), config);
    }, [chartId])

    return (
        <canvas id={`${chartId}`} width="400" height="200"></canvas>
    )
}
