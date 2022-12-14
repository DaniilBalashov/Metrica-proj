import React, { useState } from 'react';

export default function Test({ qsts, user }) {
  const [index, setIndex] = useState(0);
  const changeHanler = async (e) => {
    e.preventDefault();
    await fetch(`/test/${user.id}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ asn: e.target.flexRadioDefault.value, qst: index }),
    });
    setIndex((prev) => {
      if (prev < qsts.length - 1) return prev + 1;
      window.location = `/result/${user.id}`;
      return window.location;
    });
  };
  return (
    <>
      <div
        className="mainQuestion"
        dangerouslySetInnerHTML={{ __html: qsts[index]?.content }}
      />
      <div className="underCont">
        {qsts[index]?.questionImg ? (<div className="image" dangerouslySetInnerHTML={{ __html: qsts[index].questionImg }} />)
          : (<div />)}
        <form onSubmit={changeHanler}>
          <div className="variants">
            <input className="checkboxes" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="0" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[0]?.content }} />
            </label>
          </div>
          <div className="variants">
            <input className="checkboxes" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[1]?.content }} />
            </label>
          </div>
          <div className="variants">
            <input className="checkboxes" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="2" />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[2]?.content }} />
            </label>
          </div>
          {qsts[index].answers[3] ? (
            <div className="variants">
              <input className="checkboxes" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="3" />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[3]?.content }} />
              </label>
            </div>
          ) : (<div />)}
          <div className="ansBtn">
            <button type="submit" className="answerButton">????????????????</button>
          </div>
        </form>
      </div>
    </>
  );
}
