import React from 'react';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

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
        <article>
          <h1 className="mb-8">600,000 Colour Schemes</h1>
          <p>
            After discovering{' '}
            <Link text="colorable," href="https://colorable.jxnblk.com/" underline />
            I wondered what I could do with it...
            <br />
            So I found a list of 2309 Pantone colours and ran them all together
            with a threshold of 4.5, which insures a usable level of contrast.
          </p>
          <p className="mb-8">
            What I was able generate was a list of 1937 Pantone colours
            with a total of {(six && six.totalCombinations.toLocaleString()) || '600000'} safe to use combinations.
          </p>

          {!six && 'loading...'}

          {six && (
          <>
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={this.fetchColorCombo}
                className="border-2 rounded-lg p-4 m-1"
                style={{
                  background: six.colour.hex,
                  color: six.colour.combinations[0].hex,
                  borderColor: six.colour.combinations[0].hex,
                }}
              >
              Refresh
              </button>
              <p>{six.index}</p>
            </div>

            <div className="flex flex-wrap justify-between">
              {six.colour.combinations.map(combo => (
                <div
                  key={combo.name}
                  className="w-32 h-32 m-1 p-2 text-center flex justify-center items-center border-2 rounded-lg p-4"
                  style={{
                    background: combo.hex,
                    color: six.colour.hex,
                    borderColor: six.colour.hex,
                  }}
                >
                  {combo.name}
                  <br />
                  {combo.hex}
                </div>
              ))}
            </div>
          </>
          )}
        </article>
      </Layout>
    );
  }
}

export default Six;
