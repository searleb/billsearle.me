import Code from "components/Code";
import { Layout } from "components/Layout";

import css from "./css-background-clip.module.css";

const CSSBgClip = () => (
  <Layout>
    <h1>CSS Background Clip</h1>
    <h2 className={css.pemberton}>Pemberton Sunflowers</h2>
    <h2 className={css.iceland}>Iceland Roadtrip</h2>
    <h2 className={css.skybridge}>Whistler Skybridge</h2>
    <h2 className={css.train}>Trainwreck Trail</h2>

    <Code css>
      {`.clip {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  background-size: 100%;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 1rem;
  @screen md {
    font-size: 4.8rem;
  }
}

.pemberton {
  composes: clip;
  background-image: url('/six/pemberton-flowers.jpeg');
  background-position:  
}

.iceland {
  composes: clip;
  background-image: url('/six/iceland.jpeg');
  background-position: center 80%;
}

.skybridge {
  composes: clip;
  background-image: url('/six/skybridge.jpg');
  background-position: left 40%;
}

.train {
  composes: clip;
  background-image: url('/six/trainwreck.jpg');
}`}
    </Code>

    <Code>
      {`<h2 className={css.pemberton}>Pemberton Sunflowers</h2>
<h2 className={css.iceland}>Iceland Roadtrip</h2>
<h2 className={css.skybridge}>Whistler Skybridge</h2>
<h2 className={css.train}>Trainwreck Trail</h2>`}
    </Code>
  </Layout>
);

export default CSSBgClip;
