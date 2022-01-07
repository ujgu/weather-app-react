import React from "react";
import "./AccessWaiting.css";

export default function AccessWaiting() {
  return (
    <div className="access-container">
      <div className="access-info-container">
        <div className="access-logo-gif"/>
        <h1 className="access-info-title">Welcome to Weather App!</h1>
        <p className="access-info-text">You need to allow location access...</p>
        {/* loader */}
        <div className="loadingio-spinner-interwind-2a37br26hax">
          <div className="ldio-fizxvidf8wh">
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* loader */}
      </div>
    </div>
  );
}
