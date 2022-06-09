import React from "react";
import ProfileComponent from "../Profile";

export default function BodyComponent() {
  return (
    <React.Fragment>
      <ProfileComponent />
      <section className="section section-sm container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-4">
            <p>
              <a className="social-1" href="https://twitter.com/pathu0704">
                Twitter
              </a>{" "}
              &nbsp;
              <a className="social-2" href="https://github.com/p-prathamesh">
                Github
              </a>{" "}
              &nbsp;
              <a
                className="social-3"
                href="https://www.linkedin.com/in/prathamesh-pawar-ab3341119/"
              >
                LinkedIn
              </a>{" "}
              &nbsp;
              <a
                className="social-4"
                href="https://www.instagram.com/technodiscussion/"
              >
                Instagram
              </a>{" "}
              &nbsp;
            </p>

            <p>
              Hi there! My name is Prathamesh. I'm a Front End Engineer. I often
              make small but super useful automation scripts for web.
            </p>
            <p>
              I've 3+ years of experience in building tech products that served
              millions of users.
            </p>
            <p>
              I love teaching and helping people become better coders! In my
              spare time, I love to play outdoor sports games & listing song.
            </p>
            <p>
              I also like to make cool things with electrical devices. In terms
              of what I do, you might have seen me debug your colleagues code,
              ssh-ing a random server for no reason, teaching systems &amp;
              database design or play online chess.
            </p>
            <p>
              I can be your technical consultant and grow your business 🚀
              through the power of web.
            </p>
            <p>
              Feel free to{" "}
              <a className="connect" href="mailto:pawarprathamesh8655@gmail.com">email me</a>{" "}
              <img
                src="favicon.ico"
                width="24px"
                height="24px"
                loading="lazy"
              />{" "}
              if you want to chat about your business idea💡! Or if you wanna
              just talk about tech, that's AOK too!!
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
