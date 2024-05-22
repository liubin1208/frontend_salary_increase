function _formatNormalize(formatter) {
  if (typeof formatter === 'function') {
    return formatter;
  }
  if (typeof formatter !== 'string') {
    throw new Error('formatter must be a string or a function');
  }
  if (formatter === 'date') {
    formatter = 'yyyy-MM-dd';
  } else if (formatter === 'datetime') {
    formatter = 'yyyy-MM-dd HH:mm:ss';
  }
  return (dateInfo) => {
    const { yyyy, MM, dd, HH, mm, ss } = dateInfo;
    return formatter
      .replace(/yyyy/g, yyyy)
      .replace(/MM/g, MM)
      .replace(/dd/g, dd)
      .replace(/HH/g, HH)
      .replace(/mm/g, mm)
      .replace(/ss/g, ss);
  };
}

/**
 * 格式化一个日期
 * @param {Date} date 日期对象
 */
function formate(date, formatter, isPad = false) {
  formatter = _formatNormalize(formatter);
  function _pad(value, length) {
    if (isPad) {
      return (value + '').padStart(length, '0');
    } else {
      return value.toString();
    }
  }
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  };
  dateInfo.yyyy = _pad(dateInfo.year, 4);
  dateInfo.MM = _pad(dateInfo.month, 2);
  dateInfo.dd = _pad(dateInfo.day, 2);
  dateInfo.HH = _pad(dateInfo.hour, 2);
  dateInfo.mm = _pad(dateInfo.minute, 2);
  dateInfo.ss = _pad(dateInfo.second, 2);
  return formatter(dateInfo);
}

// 可能的调用方式

// 2024-3-21
formate(new Date(), 'date');

// 2024-3-21 14:7:41
formate(new Date(), 'datetime');

// 2024-03-21
formate(new Date(), 'date', true);

// 2024-03-21 14:07:41
formate(new Date(), 'datetime', true);

// 2024年03月21日 14:07:41.336
formate(new Date(), 'yyyy年MM月dd日 HH:mm:ss.ms', true);

// 2024年3月21日 14:7:41.336
formate(new Date('2022/1/1'), (dateInfo) => {
  const { year } = dateInfo;
  const thisYear = new Date().getFullYear();
  if (year < thisYear) {
    return `${thisYear - year}年前`;
  } else if (year > thisYear) {
    return `${year - thisYear}年后`;
  } else {
    return '今年';
  }
});
