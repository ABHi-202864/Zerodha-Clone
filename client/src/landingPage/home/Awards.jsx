import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="assets/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-5">Largest stock broker in India</h1>
          <p className="mb-5">2+ million Zerodhs clients contribute to over 15% of all  volumes in India daily by trading and investing in:</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img src="assets/pressLogos.png" style={{ width: "90%", marginTop: "2rem" }} />
        </div>
      </div>
    </div>
  )
}

export default Awards;