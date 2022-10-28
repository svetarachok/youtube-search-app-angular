export const TODAY_DATE_IN_SECONDS = Date.parse(String(new Date()));
export const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

export enum DateMarks {
  UPTO_7_DAYS = TODAY_DATE_IN_SECONDS - (DAY_IN_SECONDS * 7),
  UPTO_1_MONTH = TODAY_DATE_IN_SECONDS - (DAY_IN_SECONDS * 30),
  UPTO_6_MONTHS = TODAY_DATE_IN_SECONDS - (DAY_IN_SECONDS * 30 * 6),
}

export function setBgColor(date: string): string {
  const postData = new Date(date);
  let color: string = '';
  if (postData <= new Date(TODAY_DATE_IN_SECONDS) && postData > new Date(DateMarks.UPTO_7_DAYS)) {
    color = 'blue';
  }    
  if (postData <= new Date(DateMarks.UPTO_7_DAYS) && postData > new Date(DateMarks.UPTO_1_MONTH)) {
    color = 'green';
  } 
  if (postData <= new Date(DateMarks.UPTO_1_MONTH) && postData > new Date(DateMarks.UPTO_6_MONTHS)) {
    color = 'yellow';
  } 
  if (postData <= new Date(DateMarks.UPTO_6_MONTHS)) {
    color = 'red';
  }
  return color;
}