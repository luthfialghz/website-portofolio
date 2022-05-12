import React from "react";
import "./portofolio.css";
import Sushizoo from "../../assets/sushizoo.png";

const data = [
  {
    id: 1,
    image: Sushizoo,
    title: "Sushizoo - Sushi Order Apps",
    link: "https://dribbble.com/shots/18216710-Sushizoo-Sushi-Order-Apps?utm_source=Clipboard_Shot&utm_campaign=luthfialghz&utm_content=Sushizoo%20-%20Sushi%20Order%20Apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=luthfialghz&utm_content=Sushizoo%20-%20Sushi%20Order%20Apps&utm_medium=Social_Share",
    demo: "https://www.figma.com/proto/LE9MVvOXViMhbHh6gDB3eE/Sushizoo-(UI%2FUX-Design)?page-id=24%3A389&node-id=90%3A797&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=90%3A797&show-proto-sidebar=1",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={link} className="btn">
                  Link
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
