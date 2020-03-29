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
