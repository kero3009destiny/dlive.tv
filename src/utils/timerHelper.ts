export function countDown(endTime: number, type: string): object {
  const currTime = Math.trunc(Date.now() / 1000);
  const diffTime = endTime - currTime;
  const d = Math.floor(diffTime / 24 / 3600);
  let h = Math.floor((diffTime / 3600) % 24);
  if (type === 'HM') {
    h = Math.floor(diffTime / 3600);
  }
  const m = Math.floor((diffTime / 60) % 60);
  const s = Math.floor(diffTime % 60);

  let day: string = d + '';
  let hour: string = h + '';
  let min: string = m + '';
  let sec: string = s + '';

  if (diffTime <= 0) {
    day = '0';
    hour = '00';
    min = '00';
    sec = '00';
  }

  if (h < 10 && h >= 0) {
    hour = '0' + h;
  }
  if (m < 10 && m >= 0) {
    min = '0' + m;
  }
  if (s < 10 && s >= 0) {
    sec = '0' + s;
  }

  switch (type) {
    case 'DHM':
      return {
        day,
        hour,
        min
      };
    case 'D':
      return {
        day
      };
    case 'HM':
      return {
        hour,
        min
      };
    case 'MS':
      return {
        min,
        sec
      };
    default:
      return {};
  }
}
