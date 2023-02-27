import React from "react";
import Chart from "react-apexcharts";

const SampleData = {
	series: [56249, 48023, 10342, 10643, 30349],
	options: {
		stroke: {
			colors: ["#fff"],
		},
		fill: {
			opacity: 0.8,
		},
		labels: [
			"twilio.flex",
			"twilio.voice",
			"twilio.verify",
			"twilio.sms",
			"twilio.segment.connections",
		],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	},
};

export const PolarAreaApexChart = () => {
	return (
		<div id="chart">
			<Chart {...SampleData} type="polarArea" />
		</div>
	);
};
