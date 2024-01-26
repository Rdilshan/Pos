import Defaultcard from "./card/defaultCard";

function Home() {
  return (
    <>
    <br />
      <div className="container">
        <div className="row">
          <Defaultcard
            title="1"
            desc="image short"
            image="https://tazasmachar.com/wp-content/uploads/2024/01/Renewable-Energy-64.png"
            wheretogo=""
            key={1}
          />

          <Defaultcard
            title="2"
            desc="image short"
            image="https://tazasmachar.com/wp-content/uploads/2024/01/Renewable-Energy-64.png"
            wheretogo=""
            key={2}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
