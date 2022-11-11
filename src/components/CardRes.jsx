import React from 'react';

const some = (card, results) => {
  const data = results.find((el) => el.quest_id + 1 === +card.id);
  return data.correction;
};

export default function CardRes({
  card, qsts, results, index,
}) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: qsts[index]?.content }} />
      {qsts[index]?.questionImg ? (<div dangerouslySetInnerHTML={{ __html: qsts[index].questionImg }} />)
        : (<div />)}
      <form>
        <div className="form-check">
          <input checked className="form-check-input" disabled type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="0" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <div style={{ color: some(card, results) ? 'green' : 'red' }} dangerouslySetInnerHTML={{ __html: qsts[index].answers[0]?.content }} />
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" disabled type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="1" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[1]?.content }} />
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" disabled type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="2" />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[2]?.content }} />
          </label>
        </div>
        {qsts[index].answers[3] ? (
          <div className="form-check">
            <input className="form-check-input" disabled type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="3" />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              <div dangerouslySetInnerHTML={{ __html: qsts[index].answers[3]?.content }} />
            </label>
          </div>
        ) : (<div />)}
      </form>
    </div>
  );
}
