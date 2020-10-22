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
    case (hour > 0 && hour < 6):
      time = 'night';
      break;
  }
  
  return time;
}

export default timeOfDay;

// unction setBgGreet() {
//   let today = new Date(),
//     hour = today.getHours();

//   if (hour < 12) {
//     // Morning
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
//     greeting.textContent = 'Good Morning, ';
//   } else if (hour < 18) {
//     // Afternoon
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
//     greeting.textContent = 'Good Afternoon, ';
//   } else {
//     // Evening
//     document.body.style.backgroundImage =
//       "url('https://i.ibb.co/924T2Wv/night.jpg')";
//     greeting.textContent = 'Good Evening, ';
//     document.body.style.color = 'white';
//   }
// }