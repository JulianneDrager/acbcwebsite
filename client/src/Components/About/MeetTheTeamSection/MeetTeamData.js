import AboutStyles from "../About.module.css";
const parentheses = AboutStyles.parentheses;
const dash = <span className={parentheses}>-</span>;

const MeetTeamData = [
  {
    id: 0,
    title: "Meet Our Team",
    body: (
      <>
        At ACBC we take pride in our highly specialized
        <br /> team of professionals. We are dedicated to pro{dash}
        <br />
        viding ongoing education to our peers of various specialties. Expanding
        the knowledge base on all aspects of access to specialty medications.
      </>
    ),
    bodyExt: (
      <>
        Our team is comprised of specialists from multiple medical specialties
        including rheumatology, dermatology, allergy, asthma,pulmonary,
        neurology, dermatology, and gastroenterology. We are dedicated to
        providing up to date trends on the ever-changing insurance and prior
        authorization landscape to enhance and streamline the medication access
        experience.
      </>
    ),
  },
];

export default MeetTeamData;
