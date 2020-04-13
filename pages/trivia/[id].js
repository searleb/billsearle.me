import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import Error from 'next/error';

const Trivia = ({
  trivia, id, host, error,
}) => {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('Trivia');
  const db = useRef(null);

  useEffect(() => {
    if (error) {
      return null;
    }

    const firebaseConfig = {
      apiKey: process.env.FIREBASE_KEY,
      authDomain: 'bill-trivia.firebaseapp.com',
      databaseURL: 'https://bill-trivia.firebaseio.com',
      projectId: 'bill-trivia',
      storageBucket: 'bill-trivia.appspot.com',
      messagingSenderId: '417732246979',
      appId: process.env.FIREBASE_APP_ID,
      measurementId: 'G-3106W2P4XK',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    db.current = firebase.firestore();

    db.current.collection(id).doc('trivia')
      .onSnapshot(doc => {
        const data = doc.data();
        setIndex(data.nextIndex);
        setTitle(data.title);
      });
  }, [id, error]);

  if (error) {
    return <Error statusCode={error} />;
  }

  const updateQuestion = nextIndex => {
    db.current.collection(id).doc('trivia').set({
      nextIndex,
    }, { merge: true })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(err => {
        console.error('Error writing document: ', err);
      });
  };

  const handleNewTitle = e => {
    e.preventDefault();
    const newTitle = e.target.value;
    setTitle(newTitle);
    db.current.collection(id).doc('trivia').update({
      title: newTitle,
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(err => {
        console.error('Error writing document: ', err);
      });
  };

  const prevDisabled = index === 0;
  const nextDisabled = trivia.length - 1 === index;
  const sheet = {
    category: trivia[index][0],
    questionNum: trivia[index][1],
    question: trivia[index][2],
    img: trivia[index][3] || null,
  };

  return (
    <>
      {host && (
        <div className="m-8">
          <span>Title: </span>
          <input
            onChange={handleNewTitle}
            type="text"
            className="bg-transparent border-b border-red-500"
            value={title}
          />
          <div className="flex justify-around my-12">
            <button
              type="button"
              className={cn('p-4 m-4 rounded w-1/3 uppercase border-4 border-red-600 hover:bg-red-600', {
                'opacity-25 bg-gray-500 cursor-not-allowed': prevDisabled,
              })}
              disabled={prevDisabled}
              onClick={() => updateQuestion(index - 1)}
            >
              Previous
            </button>
            <button
              type="button"
              className={cn('p-4 m-4 rounded w-1/3 uppercase border-4 border-blue-600 hover:bg-blue-600', {
                'opacity-25 bg-gray-500 cursor-not-allowed': nextDisabled,
              })}
              disabled={nextDisabled}
              onClick={() => updateQuestion(index + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 my-16 text-center">
        <h1 className="text-4xl italic leading-none mb-8">{title}</h1>
        <h4 className="mb-8">
          {sheet.category}
          {' '}#{sheet.questionNum}
        </h4>
        <h2 className="leading-none">{sheet.question}</h2>
        {sheet.img && <img alt={sheet.question} src={sheet.img} className="max-w-lg mx-auto mt-8 w-full" />}
      </div>
    </>
  );
};

Trivia.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${query.id}/values/A:D?key=${process.env.GOOGLE_SHEETS_KEY}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status !== 200) {
    return {
      error: res.status,
    };
  }
  const data = await res.json();
  return {
    trivia: data.values,
    id: query.id,
    host: !!query.host,
  };
};

Trivia.propTypes = {
  // Data from Google Sheets
  trivia: PropTypes.arrayOf(PropTypes.array).isRequired,
  // Google Sheets ID
  id: PropTypes.string.isRequired,
  // query param host=1
  host: PropTypes.bool.isRequired,
  error: PropTypes.number,
};

Trivia.defaultProps = {
  error: undefined,
};

export default Trivia;
