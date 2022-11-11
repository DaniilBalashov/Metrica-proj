import React from 'react';
import CardRes from './CardRes';

export default function QrRes({ user, results, qsts }) {
  return (
    <>
      <h1>Results</h1>
      <div>
        {qsts?.map((el, i) => <CardRes card={el} index={i} key={el.id} qsts={qsts} results={results} />)}
      </div>
    </>
  );
}
