import { BenefitType, SelectedPage } from "@/components/enum/selectedPage";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import H from "@/components/h";
import Benefit from "./Benefit";
import ActionButton from "@/components/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque dolores accusamus laudantium iste nemo.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque dolores accusamus laudantium iste nemo.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainer",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque dolores accusamus laudantium iste nemo.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.benefits);
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <H>MORE THAN JUST GYM.</H>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
      </motion.div>
      {/* Benefit card */}
      <motion.div
        className="md:flex md:gap-8 items-center justify-between mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={container}
      >
        {benefits.map((benefit: BenefitType, index) => {
          return (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              setSelectedPage={setSelectedPage}
            />
          );
        })}
      </motion.div>
      {/* Benefits show-up */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className=" mx-auto"
      >
        <div className=" md:flex justify-between items-center p-10 px-20 gap-4">
          {/* Picture */}

          <img
            className=" mb-8"
            src={BenefitsPageGraphic}
            alt="benefits-graphic"
          />

          {/* description */}
          <div className="basis-1/2">
            {/* relative */}
            <div className=" relative">
              {/* before::decoration */}
              <div className=" before:content-abstractwaves before:-left-20 before:-top-20 before:absolute before:z-[-1] after:absolute after:content-sparkles after:left-25 after:-bottom-20 after:z-[-1]">
                {/* content */}
                <div className="flex gap-4 flex-col justify-between items-start z-10">
                  {/* title */}
                  <H>
                    MILLIONS OF HAPPY MEMBERS GETTING<span>FIT</span>
                  </H>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod debitis est vero. Similique, ipsam consequuntur. Nobis
                    autem ex, incidunt quidem quos omnis sint obcaecati
                    inventore, accusantium temporibus delectus reiciendis sit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.ibus
                    delectus reiciendis sit. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    <br />
                    <br />
                    Quod debitis est vero. Similique, ipsam consequuntur. Nobis
                    autem ex, incidunt quidem quos omnis sint obcaecati
                    inventore, accusantium temporibus delectus reiciendis sit.
                  </p>
                  <ActionButton
                    setSelectedPage={setSelectedPage}
                    href="#contactUs"
                    page={SelectedPage.contactUs}
                  >
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
