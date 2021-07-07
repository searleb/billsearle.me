import Code from 'components/Code';
import Img from 'components/Img';
import Layout from 'components/Layout';

import css from './css-grid.module.css';

const CSSGrid = () => {
  const w = '100%';
  const h = '75%';
  return (
    <Layout>
      <h1>CSS Grid</h1>
      <div className={css.grid}>
        <Img src="/six/pemberton-flowers.jpeg" height={h} width={w} />
        <Img src="/six/iceland.jpeg" height={h} width={w} />
        <Img src="/six/skybridge.jpg" height={h} width={w} />
        <Img src="/six/trainwreck.jpg" height={h} width={w} />
      </div>
      <Code css>{
`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
}`
      }
      </Code>
      <Code>{
`<div className={css.grid}>
  <Img src="/six/pemberton-flowers.jpeg"/>
  <Img src="/six/iceland.jpeg"/>
  <Img src="/six/skybridge.jpg"/>
  <Img src="/six/trainwreck.jpg"/>
</div>`
      }
      </Code>
    </Layout>
  );
};

export default CSSGrid;
