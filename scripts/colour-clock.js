export default function colourClock(dark) {
  // get time
  const newDate = new Date();
  let hours = newDate.getHours().toString();
  let minutes = newDate.getMinutes().toString();
  let seconds = newDate.getSeconds().toString();

  // format time to HHMMSS
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }
  const time = `${hours}:${minutes}:${seconds}`;

  // create dark (1-1) # color code
  const darkColours = hours + minutes + seconds;

  // replace dark # numbers with lighter characters
  let lightColours = darkColours.replace(/0/g, 'b');
  lightColours = lightColours.replace(/1/g, 'c');
  lightColours = lightColours.replace(/2/g, 'd');

  return {
    colour: `#${dark ? darkColours : lightColours}`,
    time,
  };
}
