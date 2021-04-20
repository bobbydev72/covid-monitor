import "./List.css";

export default function List({ covidData }) {
  const numberFormatter = new Intl.NumberFormat();
  return (
    <>
     
        <div className="listTitle">
          <h2>Country</h2>
          <h2>Confirmed</h2>
          <h2>Deaths</h2>
          <h2>Recovered</h2>
          <h2>Existing</h2>
        </div>
        {covidData.map((data) => (
          <a href="#" className="listBoxWrapper">
            <div className="countryBox">
              <span>{data.label.en}</span>
            </div>
            <div className="confirmedBox confirmed counter">
              <span>{numberFormatter.format(data.confirmed)}</span>
              <span>
                {numberFormatter.format(data.delta_confirmed) == 0
                  ? "-"
                  : `${numberFormatter.format(data.delta_confirmed)}`}
              </span>
            </div>
            <div className="deathsBox deaths counter">
              <span>{numberFormatter.format(data.deaths)}</span>
              <span>
                {numberFormatter.format(data.delta_deaths) == 0
                  ? "-"
                  : `${numberFormatter.format(data.delta_confirmed)}`}
              </span>
            </div>
            <div className="recoveredBox recovered counter">
              <span>{numberFormatter.format(data.recovered)}</span>
              <span>
                {numberFormatter.format(data.delta_recovered) == 0
                  ? "-"
                  : `${numberFormatter.format(data.delta_confirmed)}`}
              </span>
            </div>
            <div className="existingBox existing counter">
              <span>{numberFormatter.format(data.existing)}</span>
              <span>
                {numberFormatter.format(data.delta_existing) == 0
                  ? "-"
                  : `${numberFormatter.format(data.delta_confirmed)}`}
              </span>
            </div>
          </a>
        ))}
    </>
  );
}
