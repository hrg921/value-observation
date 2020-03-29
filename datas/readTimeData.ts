import moment from 'moment';

import { LineChartData } from '../components/charts';

interface ReadTimeDataElement {
  from: Date;
  elapsedMinutes: number;
}

type ReadTimeData = ReadTimeDataElement[];

export const readTimeData: ReadTimeData = [
  { from: new Date("2020-03-23T16:45:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-24T21:00:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-24T21:30:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-25T15:30:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-25T21:00:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-28T13:00:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-28T13:00:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-28T15:15:00"), elapsedMinutes: 25 },
  { from: new Date("2020-03-28T17:15:00"), elapsedMinutes: 25 }
];
export const readTimeLineChartData: LineChartData = readTimeData.reduce(
  (prev, next) => {
    const weekOfYearString = `${moment(next.from).year()} - ${moment(
      next.from
    ).isoWeeksInYear()}`;
    const filteredByWeekOfYear = prev.filter(p => p.x === weekOfYearString);
    const readTimeLineChartDataExceptForWeekOfYear = prev.filter(
      p => p.x !== weekOfYearString
    );
    const isWeekDataExist = filteredByWeekOfYear.length !== 0;

    if (!isWeekDataExist) {
      return [
        ...prev,
        {
          x: weekOfYearString,
          y: next.elapsedMinutes
        }
      ];
    }

    return [
      ...readTimeLineChartDataExceptForWeekOfYear,
      {
        x: filteredByWeekOfYear[0].x,
        y: filteredByWeekOfYear[0].y + next.elapsedMinutes
      }
    ];
  },
  [] as LineChartData
);
