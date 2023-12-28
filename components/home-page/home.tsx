import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Home = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/image.avif" alt="An image showing kishan" width={500} height={500} priority/>
      </div>
      <h1>Hi, I'm Adam</h1>
      <p>I blog about web development - especially frameworks like React or Next.</p>
    </section>
  );
};

export default Home;
