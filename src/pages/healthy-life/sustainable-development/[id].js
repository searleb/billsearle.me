import Layout from "components/Layout";

function SustainableDevelopmentGoal({ goal }) {
  // extract first (and only) item from array
  const [details] = goal;
  return (
    <Layout>
      <h1 className="mb-12 leading-none">{details.title}</h1>
      <p>{details.description}</p>
      <h2>Targets</h2>
      <ul className="list-decimal">
        {details.targets.map(target => (
          <li key={target.code} className="my-8">
            {target.title}

            <ul className="p-2 list-disc list-inside">
              {target.indicators.map(indicator => (
                <li key={indicator.code}>
                  {indicator.description}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${ctx.query.id}/Target/List?includechildren=true`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const json = await res.json();

  return {
    props: {
      goal: json
    }
  };
};

export default SustainableDevelopmentGoal;