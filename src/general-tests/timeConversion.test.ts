import { timeConversion } from './timeConversion';

describe('timeConversion', () => {
  it.concurrent('timeConversion should exists', () => {
    expect(timeConversion).toBeDefined();
  });
  it.concurrent('should be a function', () => {
    expect(typeof timeConversion).toBe('function');
  });

  it.concurrent(
    'should generate the right output if is passed AM or PM',
    () => {
      expect(timeConversion('07:05:45PM')).toBe('19:05:45');
    }
  );
});
it.concurrent(
  'should generate the right output if is passed AM and hour is 12',
  () => {
    expect(timeConversion('12:01:00AM')).toBe('00:01:00');
  }
);
