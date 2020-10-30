import { useState, useEffect, useRef } from 'react';
import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { meta } from '../page-config';

const Twenty20 = () => {
  const parent = useRef(null);
  const [viruses, setViruses] = useState([]);

  useEffect(() => {
    const addVirus = () => {
      setViruses([...viruses, {
        x: Math.random() * parent.current.offsetWidth - 16,
        y: Math.random() * parent.current.offsetHeight - 16,
        rot: Math.floor(Math.random() * 360),
      },
      ]);
    };
    if (viruses.length < 2000) {
      window.requestAnimationFrame(addVirus);
    }
  }, [viruses]);

  return (
    <Layout>
      <PageHead meta={meta.corona} />
      <h1>2020</h1>
      <section
        ref={parent}
        className="absolute top-0 bottom-0 left-0 right-0 w-screen h-screen overflow-hidden"
      >
        <span
          aria-label="person with mask emoji"
          role="img"
          className="absolute text-5xl"
          style={{ top: '50%', left: 'calc(50% - 1rem)' }}
        >
          😷
        </span>
        {viruses.map(v => (
          <span
            key={`${v.x}${v.y}`}
            aria-label="virus emoji"
            role="img"
            className="absolute text-xs transition-transform duration-500 delay-75"
            style={{ transform: `translate(${v.x}px,${v.y}px) rotate(${v.rot}deg)` }}
          >
            🦠
          </span>
        ))}
      </section>
    </Layout>
  );
};

export default Twenty20;
