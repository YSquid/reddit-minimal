//find time since posts seconds
//convert seconds into either days, weeks, months, years depending on number of seconds
//note Date.now() is ms since 1/1/1970, and utc is seconds since. So convert UTC to ms
/*
          1 day = 24 hours
          1 week = 168 hours
          1 month = 744 hours (assuming 31 day months to acocunt for longest possible)
          1 year = 8760 hours
          */

const postedAgo = (created_utc) => {
  const secondsElapsed = Date.now() - created_utc * 1000;
  const hoursRaw = secondsElapsed / 3600000;
  const minutesElapsed = Math.floor(hoursRaw * 60);
  const hoursElapsed = Math.floor(hoursRaw);
  const daysElapsed = Math.floor(hoursElapsed / 24);
  const weeksElapsed = Math.floor(hoursElapsed / 168);
  const monthsElapsed = Math.floor(hoursElapsed / 744);
  const yearsElapsed = Math.floor(hoursElapsed / 8760);
  if (hoursElapsed < 1) {
    return `${minutesElapsed} minutes ago`;
  } else if (hoursElapsed < 24) {
    return `${hoursElapsed} hours ago`;
  } else if (hoursElapsed < 168) {
    return `${daysElapsed} days ago`;
  } else if (hoursElapsed < 744) {
    return `${weeksElapsed} weeks ago`;
  } else if (hoursElapsed < 8760) {
    return `${monthsElapsed} months ago`;
  } else {
    return `${yearsElapsed} years ago`;
  }
};

export default postedAgo;
