import React from 'react';
import './TeaInfo.css';

const redirectToTimer = (seconds: number) => {
  let secondsString = seconds.toString();
  let encodedSeconds = encodeURIComponent(secondsString);
  window.location.hash = '#/timer?seconds=' + encodedSeconds;
};

const TeaInfo = (props: {teaData: Array<any>}) => {

  return(
    <div className="view-content tea-info">
      {props.teaData.map((teaType) => {
        return (
          <div className="content-card" key={teaType.id}>
            <div className="tea-image-container">
              <img className="tea-image" src={teaType.image} alt={teaType.header}/>
              <h1 className="title tea-image-title">&nbsp;&nbsp;{teaType.header}</h1>
            </div>
            <h3 className="title brew-time-title">Recommended brew time:</h3>
            <div className="brew-time-text-container">
              <button
                className="button brew-time-text"
                onClick={() => redirectToTimer(teaType.brewTime.mild * 60)}
              >
                Mild: {teaType.brewTime.mild}&nbsp;min.
              </button>
              <button
                className="button brew-time-text"
                onClick={() => redirectToTimer(teaType.brewTime.strong * 60)}
              >
                Strong: {teaType.brewTime.strong}&nbsp;min.
              </button>
            </div>
            <div className="tea-text-container">
              {teaType.text.map((paragraph, index) => <p className="text" key={index}>{paragraph}</p>)}
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default TeaInfo;
