import { Code } from "components/Code";
import { Img } from "components/Img";
import { Layout } from "components/Layout";

import css from "./css-grid.module.css";

const CSSGrid = () => {
  return (
    <Layout>
      <h1>CSS Grid</h1>
      <div className={css.grid}>
        <div className="relative">
          <Img
            alt="pemberton flowers"
            className="object-cover"
            fill
            src="/six/pemberton-flowers.jpeg"
          />
        </div>
        <div className="relative">
          <Img
            alt="iceland"
            className="object-cover"
            fill
            src="/six/iceland.jpeg"
          />
        </div>
        <div className="relative">
          <Img
            alt="skybridge"
            className="object-cover"
            fill
            src="/six/skybridge.jpg"
          />
        </div>
        <div className="relative">
          <Img
            alt="trainwreck"
            className="object-cover"
            fill
            src="/six/trainwreck.jpg"
          />
        </div>
      </div>
      <Code css>
        {`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
}`}
      </Code>
      <Code>
        {`<div className={css.grid}>
  <Img src="/six/pemberton-flowers.jpeg"/>
  <Img src="/six/iceland.jpeg"/>
  <Img src="/six/skybridge.jpg"/>
  <Img src="/six/trainwreck.jpg"/>
</div>`}
      </Code>
    </Layout>
  );
};

export default CSSGrid;
