import IntroPage from "../../Components/IntroPage";
import TitleSection from "../../Components/TitleSection";
import bg from "../../../Css/assets/images/bg-03.jpg";
export default function About() {
  return (
    <>
      <section>
        <IntroPage title="ABOUT US" sentence="A FEW WORDS" />
        <TitleSection
          small="MATTIS VELIT EGET"
          big="ABOUT THE FOUNDER"
          middle="FUSCE EGESTAS MI URNA, ID PULVINAR IPSUM DICTUM EGET. MAURIS IN DOLOR VELI."
        />
        <p className="m-5 fs-5">
          {" "}
          At the heart of our jewelry store is our visionary founder, whose
          passion and creativity paved the way for this exquisite venture. With
          an innate flair for design and an unyielding love for all things
          beautiful, our founder established the store to share their unique
          perspective on jewelry. Their dedication to craftsmanship and an eye
          for detail continue to influence every piece we offer, making each
          creation a testament to their remarkable vision.{" "}
        </p>
        <img className="bg-3 m-lg-5  my-5" src={bg} alt="" />
      </section>
    </>
  );
}
