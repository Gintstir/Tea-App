// import React from 'react';
// import './Clock.css';

// const formatSeconds = (totalSeconds: number) => {
//   let seconds = totalSeconds % 60;
//   let minutes = Math.floor(totalSeconds / 60);
//   if(seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   if(minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   return minutes + ':' + seconds;
// };

// const Clock = (props: {status: string, totalSeconds: number}) => {
//     return(
//           <div>
//             <span className="clock-text title">
//                 {formatSeconds(props.totalSeconds)}
//             </span>
//           </div>
//     )

// };

// Clock.defaultProps = {
//     totalSeconds: 0,
//     status: 'stopped'
// };

// export default Clock;