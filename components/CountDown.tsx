import moment from 'moment';
import React from 'react';
import ReactCountdown, { CountdownRenderProps } from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  milliseconds,
  total,
  completed,
  props
}: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
        {total} milliseconds <br />
        {days} days, {hours}:{minutes}:{seconds}:{milliseconds} <br />
        til {moment(props.date).year()}/{moment(props.date).month() + 1}/
        {moment(props.date).date()}
      </div>
    );
  }
};

type Props = {
  date: Date;
};

export const CountDown: React.FC<Props> = ({ date }) => (
  <ReactCountdown
    date={date}
    intervalDelay={0}
    precision={3}
    renderer={renderer}
  />
);
