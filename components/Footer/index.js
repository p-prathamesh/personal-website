import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

export default function FooterComponent() {
  return (
    <React.Fragment>
      <footer className={`${styles.footer} ${styles.muted}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-last order-lg-first">
              <ul className="list-inline">
                <li className="list-inline-item">
                  Powered by{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://vercel.com/"
                  >
                    Vercel
                  </a>{" "}
                  and{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://nextjs.org/"
                  >
                    Next.js
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-first order-lg-last text-lg-end">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link href="/privacy-policy">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
