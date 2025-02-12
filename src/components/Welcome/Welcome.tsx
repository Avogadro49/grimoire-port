// import React from "react";
import styles from "./Welcome.module.css";
// import FlameImage from "../../static/images/FireIcon.svg";
import FlameImage from "../../static/images/Flame.svg";
import GithubIcon from "../../static/icons/github-mark-white.svg";
import EnvelopeIcon from "../../static/icons/envelope.svg";
import WhoAMI from "../../static/icons/whoami.svg";
import ButtonBorder from "../../static/icons/button_border.png";
import useTypewriter from "../../hooks/useTypewriter";

const Welcome = () => {
  const text = "Heello, I'm Nika. A web developer";
  const typedText = useTypewriter({ text, speed: 50 });

  return (
    <section className={styles.welcome_section}>
      <div className={styles.flex_row}>
        <div className={styles.text_sector}>
          <h1 className={styles.greetings_text}>{typedText}</h1>
          <div className={styles.greeting_container}>
            <div className={styles.get_in_touch}>
              <a href="https://github.com/Avogadro49" target="_blank">
                <button className={styles.get_in_touch_button}>
                  <img
                    src={GithubIcon}
                    width="40px"
                    height="40px"
                    //   alt="Github Icon"
                  />
                  <span style={{ marginTop: "15px" }}>Github</span>
                </button>
              </a>
              <span className={styles.row_divider}></span>
              <div className={styles.button_wrapper}>
                <a href="#contact">
                  <button
                    className={`${styles.get_in_touch_button} ${styles.button_w_no_border}`}
                  >
                    <img
                      src={EnvelopeIcon}
                      width="40px"
                      height="40px"
                      alt="envelope"
                    />
                    <span style={{ marginTop: "15px" }}>Contact</span>
                  </button>
                </a>
                <img
                  className={styles.button_border}
                  src={ButtonBorder}
                  alt="button border"
                />
              </div>
              <span className={styles.row_divider}></span>
              <a href="https://github.com/Avogadro49" target="_blank">
                <button className={styles.get_in_touch_button}>
                  <img
                    src={WhoAMI}
                    width="40px"
                    height="40px"
                    alt="question mark icon"
                  />
                  <span style={{ marginTop: "15px" }}>WhoAmI</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.image_sector}>
          <object data={FlameImage}></object>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
