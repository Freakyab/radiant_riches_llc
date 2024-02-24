import styles from "./page.module.css";
import CardSlider from "./components/cardSlider/cardSlider";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import Card from "./components/card/card";
import OptionButton from "./components/optionButton/button";
import LinkRouter from "./components/Links/linkRouter";
import SignupComponent from "./components/signup/signupComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.details}>
          <h1 className={styles.header}>Best Website builders in the US</h1>
          <span className={styles.segment}></span>
          <div className={styles.segmentDetails}>
            <div className={styles.section}>
              <span className={styles.detailIcon}>
                <CiCircleCheck size={20} />
                Last Updated
              </span>
              <span className={styles.detailIcon}> - February 22, 2020</span>
              <span className={styles.detailIcon}>
                <CiCircleInfo size={20} />
                Advertising Disclosure
              </span>
            </div>
            <span className={styles.detailIcon}>
              Top Relevant <RiArrowDropDownLine size={20} />
            </span>
          </div>
          <span className={styles.segment}></span>
          <OptionButton />
          <LinkRouter />
          <Card />
          <CardSlider />
          <SignupComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}
