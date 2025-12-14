// import React from "react";
import styles from "./ContactMe.module.css";
import CodeBlock from "../CodeBlock/CodeBlock";
import PraseTheSun from "../../static/images/1727895521_new_praise the sun!.gif";

const ContactMe = () => {
  const contactInfo = `>contact:
  Email: tedozashvilinika@gmail.com
  Discord: odysseusdotexe
  Github: <a href="https://github.com/Avogadro49">Avogadro49</a> 

  # Or you can just send me message from here
  # Write something below and press enter,
  # I will receive it through webhook.
  # Please specify your info too.`;

  const execCommand = async (message: string) => {
    try {
      // Fetch IP address
      const ipResponse = await fetch(import.meta.env.VITE_IPAPI_KEY);
      const ipData = await ipResponse.json();
      const ip = ipData;
      const city = ip.location.city;
      const country = ip.location.country;

      // Send the message to Discord webhook
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK;

      const discordResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `${country}/${city}: ${message}`,
        }),
      });

      if (discordResponse.ok) {
        console.log("Message sent to Discord");
      } else {
        console.error("Failed to send message:", discordResponse.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <header>
        <h1 className={styles.contact_header}>0x01 - Contact me</h1>
      </header>
      <div className={styles.contact_container}>
        <div className={styles.contact_image}>
          <img src={PraseTheSun} alt="prase the sun" />
          <span>
            <h4>
              Pixel art author:{" "}
              <a href="https://www.tumblr.com/zedotagger" target="_blank">
                @zedotagger
              </a>
            </h4>
          </span>
        </div>
        <div className={styles.contact_power_shell}>
          <CodeBlock
            code={contactInfo}
            title="Contact.sh"
            interactive={true}
            onExecute={execCommand}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
