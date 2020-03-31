import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <p>
        I copied this info from bision union's website that you sent me. Feel
        free to take this approach or to keep it simple with just text like
        Dixxon website you sent me.
      </p>
      <section className="story">
        <h1>Our Story</h1>
        <div className="info-graphic">
          <img
            src="https://petsway.com/wp-content/uploads/2018/01/Depositphotos_85739358_s-2015.jpg"
            alt=""
          />
          <p>
            Our story is two part….one part Beauty and the Beast and one part
            War and Peace. Candace and I met in 1992 as sophomores in high
            school when we lived in the Kansas City area, GO ROYALS and CHIEFS!
            I was following the Grateful Dead on weekends and trying not to get
            kicked out of another school. Candace was playing soccer and trying
            not to get kicked out of class for making people laugh. After high
            school, we both went our separate ways and life happened. Seventeen
            years later through pure fate, we found each other again. Candace
            was an IT Director at a large private university in Texas and I was
            in a U.S. Special Forces Counter-Terror Unit in Japan…still
            listening to the Grateful Dead. We're now married with four amazing
            dogs that run our lives and now run Bison Union.
          </p>
        </div>
      </section>
      <section className="mission">
        <h1>Our Mission</h1>
        <div className="info-graphic">
          <p>
            Adelaide, Matilda, Koolah, and Brumby rescued us over the last four
            years and everyday is another chance to be the people they think we
            are. We live in beautiful Sheridan, Wyoming, but I've traded my
            cool-guy guns and Green Beret for Muck Boots and flannels. We
            started Bison Union because we firmly believe that there isn't much
            better in this world than a favorite t-shirt. T-shirts aren't all we
            are gonna do, but it's our main focus for now and if you think about
            it….what's a day without wearing the perfect T? We're gonna make
            some serious t-shirts and some not so serious t-shirts and we may
            even offend a few people along the way. We're not perfect, but if
            all goes well we're hopefully gonna make a lot of people smile and
            help some great charities out while doing it.
          </p>
          <img
            src="https://appts.co.nz/wp-content/uploads/2019/04/CNC-WOOD-MACHINIST-B.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
