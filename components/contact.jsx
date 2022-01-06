import styles from "../assets/styles/contact.module.less";
import { useState } from "react";

export default function contact() {
  const [contacts, setContacts] = useState([
    {
      username: "jbcrane22",
      slug: "snapchat",
    },
    {
      username: "howdyitsjack",
      slug: "twitter",
      url: "https://twitter.com/howdyitsjack",
    },
    {
      username: "jackcrane",
      slug: "github",
      url: "https://github.com/jackcrane",
    },
    {
      username: "jackcrane",
      slug: "expo",
      url: "https://expo.io/@jackcrane",
    },
    {
      username: "jackcrane",
      slug: "buymeacoffee",
      url: "https://buymeacoffee.com/jackcrane",
    },
    {
      username: "improper-adjectives#0597",
      slug: "discord",
    },
    {
      username: "jackbcrane",
      slug: "linkedin",
      url: "https://www.linkedin.com/in/jackbcrane/",
    },
    {
      username: "jack@jackcrane.rocks",
      slug: "gmail",
      url: "mailto:jack@jackcrane.rocks",
    },
  ]);

  return (
    <div className={styles.contacts} id="contacts">
      <div className={styles.feature}>
        <h1>Contact Me</h1>
        <br />
        <div className={styles.contactsList}>
          {contacts.map((contact, i) => (
            <div className={styles.contact} key={i}>
              {contact.url ? (
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  <div>
                    <img
                      height="24"
                      width="24"
                      key={i}
                      src={`https://unpkg.com/simple-icons@v6/icons/${contact.slug}.svg`}
                    />
                    <p>{contact.username}</p>
                  </div>
                </a>
              ) : (
                <div>
                  <img
                    height="24"
                    width="24"
                    key={i}
                    src={`https://unpkg.com/simple-icons@v6/icons/${contact.slug}.svg`}
                  />
                  <p>{contact.username}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
