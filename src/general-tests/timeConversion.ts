export const timeConversion = (s: string): string => {
  if (typeof s !== 'string') throw new Error('Invalid input');
  if (s.length < 10) throw new Error('Invalid input');
  const [first, second, third] = s.split(':');
  const hour = parseInt(first, 10);
  const minutes = parseInt(second, 10);
  const seconds = parseInt(third.slice(0, 2), 10);
  const amOrPm = third.includes('PM') ? 'PM' : 'AM';
  if (hour < 1 || hour > 12) throw new Error('Invalid input');
  if (minutes < 0 || minutes > 59) throw new Error('Invalid input');

  const processHour = (hour: number, amOrPm: string): string => {
    if (hour === 12) return '00';
    if (amOrPm === 'PM') return (hour + 12).toString();
    return hour.toString().length === 1 ? `0${hour}` : hour.toString();
  };

  const finalResult = `${processHour(hour, amOrPm)}:${
    minutes.toString().length === 1 ? `0${minutes}` : minutes
  }:${seconds.toString().length === 1 ? `0${seconds}` : seconds}`;

  return finalResult;
};
