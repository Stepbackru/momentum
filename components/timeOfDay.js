const timeOfDay = () => {
  const today = new Date();
  const hour = today.getHours();
  let time = '';

  switch(true) {
    case (hour < 12 && hour > 6):
      time = 'morning';
      break;
    case (hour > 12 && hour < 18):
      time = 'day';
      break;
    case (hour > 18 && hour < 24):
      time = 'evening';
      break;
    case (hour >= 0 && hour < 6):
      time = 'night';
      break;
  }
  
  return time;
}

export default timeOfDay;
