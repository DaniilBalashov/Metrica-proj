import React from 'react';
import CardRes from './CardRes';

export default function QrRes({ user, results, qsts }) {
//   console.log(qsts, '=========');
  return (
    <>
      <h1>Resultats</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: qsts[1]?.content }} /> */}
      <div>
        {qsts?.map((el, i) => <CardRes card={el} index={i} key={el.id} qsts={qsts} results={results} />)}
      </div>
    </>
  );
}
