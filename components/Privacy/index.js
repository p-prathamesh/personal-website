import React from "react";
import Styles from "./Privacy.module.css";

export default function index() {
  return (
    <React.Fragment>
      <div className={`container ${Styles.wrap}`} role="document">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <article>
                <div className="page-header text-center">
                  <h1>Privacy Policy</h1>
                </div>
                <p>
                  <strong>TLDR</strong>: I'm not tracking you. Just tracking my
                  website traffic.
                </p>
                <h2 id="website-visitors">Website visitors</h2>
                <ul>
                  <li>No personal information is collected.</li>
                  <li>No personal information is stored in the browser.</li>
                  <li>
                    No personal information is shared with advertising
                    companies.
                  </li>
                  <li>
                    No information is shared with, sent to or sold to
                    third-parties.
                  </li>
                  <li>
                    No information is mined and harvested for personal and
                    behavioral trends.
                  </li>
                  <li>No information is monetized.</li>
                </ul>
                <h2 id="contact">Contact</h2>
                <p>
                  <a
                    href="mailto:pawarprathamesh8655@gmail.com"
                    className="connect"
                  >
                    Contact me
                  </a>{" "}
                  if you have any questions.
                </p>
                <p>
                  Effective Date: <em>19th Mar 2022</em>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
