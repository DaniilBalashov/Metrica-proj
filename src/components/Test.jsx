import React from 'react';
import quest from '../../questions.json';

export default function Test({ qsts }) {
  return (
    <>
      <div>
        {(qsts[1].content).replace(/[a-z]/gmi, '').replace(/\d/gmi, '')}
      </div>
      <div>{qsts[1].questionImg}</div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {(qsts[1].answers[0].content).match(/[а-я]/gmi)}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {(qsts[1].answers[1].content.match(/([А-я]) || (\B)/gmi))}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          {(qsts[1].answers[2].content).match(/[а-я]/gmi)}
        </label>
      </div>
      {/* {qsts[1].answers[3].content ? (
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault4">
            {(qsts[1].answers[3].content).match(/[а-я]/gmi)}
          </label>
        </div>
      ) : (<div />)} */}
    </>
  );
}
