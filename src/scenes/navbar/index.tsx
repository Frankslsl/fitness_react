import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/components/enum/selectedPage";
import ActionButton from "@/components/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  //items-center是每个元素在单元格中纵轴的位置,justify是展示轴的间隔
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${
          !isTopOfPage ? "bg-primary-100 drop-shadow" : ""
        }`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 py-2`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} flex-none`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    href="#home"
                    page={SelectedPage.home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <Link
                    href="#benefits"
                    page={SelectedPage.benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <Link
                    href="#ourClasses"
                    page={SelectedPage.ourClasses}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <Link
                    href="#contactUs"
                    page={SelectedPage.contactUs}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                </div>
                <div className={`${flexBetween} gap-6 pl-4`}>
                  <p>Sign In</p>
                  <ActionButton
                    children="Become a Member"
                    setSelectedPage={setSelectedPage}
                    page={SelectedPage.contactUs}
                    href="#contactUs"
                  ></ActionButton>
                </div>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -180,
                  borderRadius: "100%",
                }}
                transition={{ duration: 0.25 }}
                className=" rounded-xl bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              className="h-6 w-6 text-gray-400"
              onClick={() => setIsMenuToggled(false)}
            >
              <XMarkIcon />
            </motion.button>
          </div>
          <div className="flex ml-[33%] flex-col gap-10 text-2xl">
            <Link
              href="#home"
              page={SelectedPage.home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              href="#benefits"
              page={SelectedPage.benefits}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              href="#ourClasses"
              page={SelectedPage.ourClasses}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              href="#contactUs"
              page={SelectedPage.contactUs}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
