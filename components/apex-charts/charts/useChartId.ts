import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

export function useChartId() {
  const { current: chartId } = useRef(uuid());

  return chartId;
}
