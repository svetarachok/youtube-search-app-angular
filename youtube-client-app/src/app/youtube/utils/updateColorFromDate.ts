export const todayDateInSeconds = Date.parse(String(new Date()));
export const dayInSeconds = 24 * 60 * 60 * 1000;
export const upto7Days = todayDateInSeconds - (dayInSeconds * 7);
export const upto1Month = todayDateInSeconds - (dayInSeconds * 30);
export const upto6Month = todayDateInSeconds - (dayInSeconds * 30 * 6);

export enum DateMarks {
  upTo7 = upto7Days,
  upToMonth = upto1Month,
  upTo6Month = upto6Month,
}

export function setBgColor(date: string, color: string): string {
  const postData = new Date(date);
  if (postData <= new Date(todayDateInSeconds) && postData > new Date(DateMarks.upTo7)) {
    color = 'blue';
  }    
  if (postData <= new Date(DateMarks.upTo7) && postData > new Date(DateMarks.upToMonth)) {
    color = 'green';
  } 
  if (postData <= new Date(DateMarks.upToMonth) && postData > new Date(DateMarks.upTo6Month)) {
    color = 'yellow';
  } 
  if (postData <= new Date(DateMarks.upTo6Month)) {
    color = 'red';
  }
  return color;
}