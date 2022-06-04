import React from "react";
import Styles from './Profile.module.css';

export default function ProfileComponent() {
  return (
    <React.Fragment>
      <div className={`container ${Styles.wrap}`}>
        <div className="content">
          <section className="section container-fluid mt-n3 pb-3">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8 text-center d-flex flex-column justify-content-center">
                <h1 className="mt-0">Prathamesh Pawar</h1>
                <p className="lead">Front End Engineer in Mumbai.</p>
              </div>
              <div
                className={`col-lg-4 text-center`}
              >
                <img
                  src="https://vipinyadav.com/pp2.jpg"
                  alt="Picture of Prathamesh Pawar"
                  width="234px"
                  height="234px"
                  className={`${Styles.imgSection}`}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
