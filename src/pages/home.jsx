import React from "react";
import '../style.css';

function Home() {

  return (
  <div className="mainContainer">
    <div className="row" style={{marginTop: 50}}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="buttonLayout center">
          <div id="pag_home_newTicketButton" className="button normal">
            New Order
          </div>
          <div id="pag_home_existTicketButton" className="button normal">
            Existing Order
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
