import { hook } from "../../assets/imgs";

function Home() {
  return (
    <div className="def-container">
      <div className="jumbotron d-flex justify-content-around align-items-center">
        <div className="text-center">
          <p>This Page is a Work In Progress</p>

          <p>Please check other pages</p>
        </div>
        <img src={hook} className="img-fluid" style={{ maxHeight: "200px" }} />
      </div>
    </div>
  );
}

export default Home;
