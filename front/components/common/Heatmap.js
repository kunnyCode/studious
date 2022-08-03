import { useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

export default function Heatmap({ gittimes }) {
  useEffect(() => {
    console.log(gittimes);
  }, []);
  var result = [];
  gittimes.length == 0
    ? result.push({
        date: 0,
        count: 0,
      })
    : gittimes.map((gittime) => {
        result.push({
          date: gittime[0],
          count: gittime[1],
        });
      });

  return (
    <CalendarHeatmap
      startDate={new Date('2022-1-01')}
      endDate={new Date('2022-12-30')}
      showMonthLabels={false}
      showOutOfRangeDays={true}
      gutterSize={3}
      values={result}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-github-${value.count}`;
      }}
    ></CalendarHeatmap>
  );
}
