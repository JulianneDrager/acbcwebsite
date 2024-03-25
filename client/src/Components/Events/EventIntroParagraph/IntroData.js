import AboutStyles from "../../About/About.module.css";
const parentheses = AboutStyles.parentheses;
const dash = <span style={{ fontFamily: "times new roman" }}>-</span>;
const comma = <span style={{ fontFamily: "times new roman" }}>'</span>;
const IntroData = [
  {
    id: 0,
    paraOne: (
      <>
        The Access Coordinator Boot Camp is the perfect conference for office
        staff who want to stay on top of all things related to biologics and
        gain a better understanding of the complexity of the healthcare system.
      </>
    ),
    paraTwo: (
      <>
        Our expert speakers will provide invaluable insights into topics such as
        documentation, insurance, prior authorizations, manufacturer{comma}s
        programs, specialty pharmacies, and infusion centers. At our conference,
        you can expect to gain a comprehensive understanding of biologics and
        network with other healthcare professionals.
      </>
    ),
    paraThree: (
      <>
        The world of biologics can be complex, with a variety of programs,
        services, and regulations to navigate. At the Access Coordinator Boot
        Camp, we provide office staff with an in{dash}depth understanding of the
        biologics landscape. From understanding the importance of documentation
        to working with specialty pharmacies, we cover everything you need to
        know to ensure your patients receive the best possible care. Our expert
        speakers are at the forefront of the biologics industry, offering
        actionable insights and real{dash}world solutions to common challenges.
      </>
    ),
  },
];

export default IntroData;
