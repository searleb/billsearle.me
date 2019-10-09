import React from 'react';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';
import Card from '../components/Card';
import ColourSplat from '../components/ColourSplat';
import DemoCard from '../components/SixDemo/Card';
import ImagePill from '../components/SixDemo/ImagePill';
import DoubleBorder from '../components/SixDemo/DoubleBorder';

class Six extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      six: null,
    };
  }

  componentDidMount() {
    this.fetchColorCombo();
  }

  fetchColorCombo = async () => {
    const colors = await fetch('/api/six-hundred');
    if (colors.ok) {
      const json = await colors.json();
      this.setState({ six: json });
    }
  }

  render() {
    const { six } = this.state;
    return (
      <Layout>
        <PageHead meta={meta.six} />
        {six && (
          <button
            type="button"
            onClick={this.fetchColorCombo}
            className="border-2 border-r-0 rounded-l-lg p-4 fixed right-0 z-10 transition-bg transition-border transition-colors"
            style={{
              background: six.colour.hex,
              color: six.colour.combinations[0].hex,
              borderColor: six.colour.combinations[0].hex,
            }}
          >
            <span role="img" aria-label="colour-emoji">
            👉 🎨
            </span>
          </button>
        )}
        <article>
          <h1 className="mb-8 leading-none">600,000 Pantone Colour Schemes</h1>
          <p>
            After discovering{' '}
            <Link text="colorable," href="https://colorable.jxnblk.com/" underline />
            I wondered what I could do with it...
            <br />
            So I found a list of 2309 Pantone colours and ran them all together
            with a threshold of 4.5, which insures a usable level of contrast.
          </p>
          <p>
            What I was able generate was a list of 1937 Pantone colours
            with a total of {(six && six.totalCombinations.toLocaleString()) || '600000'} safe to use combinations.
          </p>
          <p>
            The resulting JSON file is too big to deliver and process on
            the front end so I&apos;ve built a small
            node endpoint that will return a random colour set on a GET.
          </p>
          <p className="mb-8">
            Below are a few components demoing how all these can actaully be used.
          </p>

          {!six && 'loading...'}

          {six && (
            <>
              <div className="flex flex-wrap flex-1 justify-between">
                <DemoCard theme={six.theme} text={six.index} onClick={this.fetchColorCombo} />
                <div className="w-full sm:w-1/2">
                  <DoubleBorder theme={six.theme} />
                  <div className="hidden sm:block">
                    <DoubleBorder theme={six.theme} />
                  </div>
                </div>
                <div className="flex flex-wrap sm:w-1/2 content-start">
                  <ImagePill theme={six.theme} img="/static/trainwreck.jpg" text="Macey Boyle" invert />
                  <ImagePill theme={six.theme} img="/static/skybridge.jpg" text="Gianni Russel" />
                  <div className="hidden sm:block">
                    <ImagePill theme={six.theme} img="/static/skybridge.jpg" text="Gianni Russel" />
                    <ImagePill theme={six.theme} img="/static/trainwreck.jpg" text="Macey Boyle" invert />
                  </div>
                </div>

                <Card theme={six.theme}>
                  <h4>All {six.colour.combinations.length} Combinations</h4>
                  <div className="border-b my-4" style={{ borderColor: six.theme.tertiary }} />
                  <div className="flex flex-wrap justify-between">
                    {six.colour.combinations.map(combo => (
                      <ColourSplat
                        key={combo.hex}
                        primary={six.colour.hex}
                        secondary={combo.hex}
                      />
                    ))}
                  </div>
                </Card>
              </div>
            </>
          )}
        </article>
      </Layout>
    );
  }
}

export default Six;
