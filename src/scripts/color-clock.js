export default function colorClock(dark) {
  // get time
  const newDate = new Date();
  let hours = newDate.getHours().toString();
  let minutes = newDate.getMinutes().toString();
  let seconds = newDate.getSeconds().toString();

  // format time to HHMMSS
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  const time = `${hours}:${minutes}:${seconds}`;

  // create dark (1-1) # color code
  const darkcolors = hours + minutes + seconds;

  // replace dark # numbers with lighter characters
  let lightcolors = darkcolors.replace(/0/g, "a");
  lightcolors = lightcolors.replace(/1/g, "b");
  lightcolors = lightcolors.replace(/2/g, "c");

  return {
    color: `#${dark ? darkcolors : lightcolors}`,
    time,
  };
}
