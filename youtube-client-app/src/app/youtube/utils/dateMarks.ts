export const nowInSeconds = Date.parse(String(new Date()));
export const dayInSeconds = 24 * 60 * 60 * 1000;
export const upto7Days = nowInSeconds - (dayInSeconds * 7);
export const upto1Month = nowInSeconds - (dayInSeconds * 30);
export const upto6Month = nowInSeconds - (dayInSeconds * 30 * 6);

export enum DateMarks {
  upTo7 = upto7Days,
  upToMonth = upto1Month,
  upTo6Month = upto6Month,
}