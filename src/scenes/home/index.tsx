import { SelectedPage } from "@/components/enum/selectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMeiumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 mt-[100px]"
    >
      {/* md:pb-0是根据媒体来响应式的编程 */}
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 md:items-center md:justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.home)}
      >
        {/* Main Headers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:basis-3/5 z-10 mt-32"
        >
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className=" relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex gap-8 items-center mt-8"
          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              href="#contactUs"
              page={SelectedPage.contactUs}
              children="Join Us"
            />
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.contactUs);
              }}
              href="#contactUs"
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </motion.div>
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMeiumScreens ? (
        <div className="h-[150px] w-full  bg-primary-100 shadow-md py-10">
          <div className="w-5/6 mx-auto">
            <div className="flex gap-10 justify-between items-center w-3/5 mx-auto">
              <img alt="Sponsor-redbull" src={SponsorRedBull} />
              <img alt="Sponsor-forbes" src={SponsorForbes} />
              <img alt="Sponsor-fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Home;
