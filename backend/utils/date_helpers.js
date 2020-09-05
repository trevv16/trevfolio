const moment = require('moment');

export const TIME_FORMAT = 'h:mm a';
export const DATE_FORMAT = 'DD-MMM-YY';
export const DATE_TIME_FORMAT = 'ddd, DD-MMM-YY h:mm a';
export const AVAILABILITY_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const YEAR_FIRST_DATE_FORMAT = 'YYYY-MM-DD';
export const DB_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
export const DB_DATE_FORMAT = 'YYYY-MM-DD';
export const FRIENDLY_DATE_FORMAT = 'ddd, DD-MMM-YY';

export const momentFromString = (date, fmt = null) => {
  if (fmt) {
    return moment(date, fmt, true);
  }
  if (date) {
    return moment(date);
  }
  return null;
};

export const toShortDateString = (d, fmt = null) => {
  if (!d) return '';
  return momentFromString(d, fmt).format(DATE_FORMAT);
};

export const toDateString = (d, fmt = null) => {
  if (!d) return '';
  return momentFromString(d, fmt).format('ddd, DD-MMM-YY');
};

export const toTimeString = (d, fmt = null) => {
  if (!d) return '';
  return momentFromString(d, fmt).format(TIME_FORMAT);
};

export const toMonthString = (str, fmt = null) => {
  if (!str) return '';
  return momentFromString(str, fmt).format('YYYY'); // MMM,
};

export const toDateTimeString = (d, fmt = null) => {
  if (!d) return '';
  return momentFromString(d, fmt).format(DATE_TIME_FORMAT);
};

export const isDateValid = (dateString) => {
  if (!dateString) {
    return false;
  }
  if (!moment(dateString, 'MM/DD/YYYY', true).isValid()) {
    return false;
  }
  return true;
};

export const getYearFromString = (dateString) =>
  String(dateString.split('-', 1));

export const momentToDateTime = (m) => {
  if (m) {
    return m.format(DATE_TIME_FORMAT);
  }
  return null;
};

export const getDateTimeStringFromMoment = (m) => {
  if (m) {
    return m.format(DATE_TIME_FORMAT);
  }
  return null;
};

export const existsAndIsBetween = (dttm, fr, th, inFormat1, inFormat2) => {
  let format1 = null;
  let format2 = null;
  if (!dttm) return false;
  if (!inFormat1) format1 = DB_DATE_TIME_FORMAT;
  if (!inFormat2) format2 = DATE_TIME_FORMAT;
  const dttmMoment = momentFromString(dttm, format1);
  const frMoment = momentFromString(fr, format2);
  const toMoment = momentFromString(th, format2);
  return dttmMoment.isBetween(frMoment, toMoment, null, '[]');
};

export const hoursSince = (dtTmStr, fmt) => {
  const dt = momentFromString(dtTmStr, fmt);
  return moment.duration(moment().diff(dt)).asHours();
};

export const diffInHours = (earlierStr, laterStr, fmt) => {
  const earlier = momentFromString(earlierStr, fmt);
  const later = momentFromString(laterStr, fmt);
  return moment.duration(later.diff(earlier)).asHours();
};

export const getDateTimeStringFromDate = (d) => {
  if (d) {
    return moment(d).format(DATE_TIME_FORMAT);
  }
  return null;
};

export const getAvailabilityDateTimeStringFromDate = (d) => {
  if (d) {
    return moment(d).format(AVAILABILITY_TIME_FORMAT);
  }
  return null;
};

export const getTimeStringFromMoment = (m) => {
  if (!m) return '';
  return m.format(TIME_FORMAT);
};

export const getMomentFromString = (date, fmt = null) => {
  if (!date) return null;
  return momentFromString(date, fmt);
};

export const reformat = (inString, inFormat, outFormat) => {
  if (!inString) return '';
  const dttm = momentFromString(inString, inFormat);
  return dttm.format(outFormat);
};

export const getStringFromMoment = (m, fmt = null) => {
  if (m) {
    const inFmt = fmt === null ? DATE_FORMAT : fmt;
    return m.format(inFmt);
  }
  return null; // eslint-disable-line consistent-return
};

// eslint-disable-next-line consistent-return
export const getTimeRange = () => {
  const start = moment().startOf('06:00');
  const times = 14 * 2; // 14 hours * two 30 mins sessions/hour
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < times; i++) {
    const toPrint = moment(start)
      .add(30 * i, 'minutes')
      .format(TIME_FORMAT);
    return toPrint;
  }
};

export const parseDate = (s, fmt = 'YYYY-MM-DD') => {
  const test = moment(s, [
    'MM/DD/YYYY',
    'M/D/YY',
    'MM/D/YY',
    'MM/DD/YY',
    'MM/D/YYYY',
    'M/D/YYYY',
    'YYYY-MM-DD'
  ]);
  if (test.isValid()) {
    if (test.year() > new Date().getFullYear()) {
      test.year(test.year() - 100);
    }
    return test.format(fmt);
  }
  return s;
};
