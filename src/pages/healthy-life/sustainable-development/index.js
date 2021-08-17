import Layout from "components/Layout";
import Link from "next/link";

function SustainableDevelopment({ goalList }) {
  return (
    <Layout>
      <div
        className="p-12 text-white bg-no-repeat"
        style={{
          backgroundImage: `url('https://source.unsplash.com/cVEOh_JJmEE')`,
          backgroundPosition: '10% -15%'
        }}>
        <h1 className="max-w-lg mt-12 mb-12 font-thin leading-tight uppercase">
          17 Goals to transform our world
        </h1>

        <ul className="grid grid-cols-2 gap-4" data-testid="goalList">
          {goalList.map(goal => {
            return (
              <li key={goal.code} className="m-0">
                <Link href={`sustainable-development/${goal.code}`} >
                  <a
                    className="flex items-center h-full p-4 overflow-hidden bg-no-repeat bg-cover"
                    style={{
                      minHeight: '350px',
                      backgroundColor: 'rgba(0,0,0,0.45)',
                      backgroundBlendMode: 'overlay',
                      backgroundImage: `url('https://source.unsplash.com/random/400x400?${goal.title.split(' ').join(',')}')`
                    }}
                  >
                    <span className="pr-4 font-mono text-3xl font-bold">
                      {goal.code}
                    </span>
                    <h2 className="text-xl uppercase">
                      {goal.title}
                    </h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // I think the URL in the challenge description is wrong,
  // this returns 169 results: https://unstats.un.org/sdgapi/swagger/#!/Target/V1SdgTargetListGet
  const res = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false');

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const json = await res.json();

  return {
    props: {
      goalList: json
    }
  };
};

export default SustainableDevelopment;