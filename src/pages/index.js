import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Usually worldwide, currently in Bern 🐻"
        paragraph="Meet the top of the DJ scene in your city. With THYNI you feirst until the clouds are purple again"
      >
      </TextBlock>

      <TextBlock
        id="alongEvents"
        title="Fingerliking good food from along events 🌮"
        paragraph="Our beloved partner for events. Planning, organizing, cleaning up and designing the invitations - it's all included"
      >
        <a style={{color: 'white', display: 'block' ,marginTop: -24, fontSize: 17.6}} target="_blank" href={'https://www.alongevents.ch/'}>along events</a>
      </TextBlock>
    
      <Packages
        id="packages"
        title="Our Packages - Your Party 🎉"
        para="Choose a package that suits you best"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />Music all night long
              </li>
              <li>
                <MdDone />
                1 Hours of gig
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Autograph session
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Interview and photo session
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                Music all night long
              </li>
              <li>
                <MdDone />
                2 Hours of gig
              </li>
              <li>
                <MdDone />
                Autograph session
              </li>
              <li>
                <MdDone />
                Interview and photo session
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                Music all night long
              </li>
              <li>
                <MdDone />
                2 Hours of gig
              </li>
              <li>
                <MdDone />
                Autograph session
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Interview and photo session
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact THINY Management today. "
        subtitle="We are looking forward to your message"
      />
    </>
  )
}

export default HomePage
