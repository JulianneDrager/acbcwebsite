import AboutStyles from "../About.module.css";
import Brandis from "../../../assets/images/headshots/Brandis.svg";
import Keri from "../../../assets/images/headshots/Keri.svg";
import Mitisi from "../../../assets/images/headshots/Misti.svg";
import Tyler from "../../../assets/images/headshots/Tyler.svg";
import Christy from "../../../assets/images/headshots/Christy.svg";
import Angela from "../../../assets/images/headshots/Angela.svg";

const parentheses = AboutStyles.parentheses;
const dash = <span style={{ fontFamily: "Arial" }}>-</span>;

const HeadshotData = [
  {
    id: 0,
    title: "CEO & PRESIDENT",
    subTitle: "ACBC Founder: Brandis Boyd-Cooper, CMA/CDT",
    img: Brandis,
    alt: "ACBC Founder Brandis Boyd-Cooper, CMA/CDT",
    body: (
      <>
        Brandis is a Biologic Access Coordinator with over twenty years of
        experience. Her specialty focuses have included Immunodermatology with
        crossover training in rheumatology. Her diverse experience, knowledge,
        and profound passion have enabled her to teach others a proficient
        workflow for processing multiple variations of specialty medications
        including orals, injectables, topicals, and outpatient infusion
        coordination.
      </>
    ),
    bodyExt: (
      <>
        Brandis is a renowned industry speaker and KOL. She has worked with
        multiple profound physicians and mid{dash}level providers including
        Melissa Costner, M.D., Jennifer Cather. M.D., Melodie Young, N.P.,
        Daniel Walker, M.D. and Dario Kivelevitch, M.D. She is the founder and
        CEO of BioMazze Coordination, President and Co{dash}Founder of Access
        Coordinator Boot Camp, and the Regional Biologic Coordinator for US
        Dermatology Partners in the DFW area.
      </>
    ),
  },
  {
    id: 1,
    title: "CFO & VICE PRESIDENT",
    subTitle: "ACBC CO-FOunder: Keri Janicek-McCurry, LVN",
    img: Keri,
    alt: "Keri Janicek-McCurry, LVN",
    body: (
      <>
        Keri is a Biological Coordinator for a large dermatology practice in the
        DFW Metroplex. She actively manages and oversees all biological and
        systemic medications for 16 providers.She is an access speaker and
        advisory board member for multiple pharmaceutical companies. Her
        dedication to the field of biologics is truly inspiring. With over eight
        years of valuable experience, she has honed her skills and expertise to
        a remarkable level.
      </>
    ),
    bodyExt: (
      <>
        Under the guidance of respected professionals like Dr. Alan Menter and
        Mary Wiatrowski, RN, DNC, Keri has not only expanded her knowledge but
        has also developed a deep passion for advancing healthcare practices.
        Her commitment to excellence and continuous learning sets her apart as a
        true asset in the field.
      </>
    ),
  },
  {
    id: 2,
    title: "Chief Operating Officer",
    subTitle: "ACBC CO-FOunder: Misti Tompkins, RMA/CDT",
    img: Mitisi,
    alt: "Misti Tompkins, RMA/CDT",
    body: (
      <>
        Misti has a 12{dash}year history as an access coordinator within the
        fields of Dermatology and Rheumatology. She is a Co{dash}Founder and the
        Chief Operating Officer for ACBC. Misti has the privilege and honor of
        speaking for multiple pharmaceutical companies, in addition to serving
        on advisory boards. Her knowledge and experience regarding patient
        access is an asset and firm foundation in providing expert care for her
        patients.
      </>
    ),
    bodyExt: (
      <>
        The most rewarding aspect of her job as an Access Coordinator, is being
        able to educate and navigate her patients in obtaining medications that
        improve their quality of life.
      </>
    ),
  },
  {
    id: 3,
    title: "ACBC Director",
    subTitle: "Tyler Milliken",
    img: Tyler,
    alt: "Tyler Milliken",
    body: (
      <>
        Tyler Milliken is the Biologics Director for North Texas Allergy and
        Asthma Associates for the past eleven years, a Thought Leader and
        Advocate for biologics within his specialty of Allergy and Immunology.
        Tyler manages over 1,000 patients. His dedication to managing patients
        exemplifies his commitment to providing top{dash}notch care.
      </>
    ),
    bodyExt: (
      <>
        His expertise in overseeing the Biologics Department is evident through
        his innovative processes that ensure the highest standards of quality
        and efficiency. By continually refining and enhancing these processes,
        Tyler plays a vital role in advancing the field and improving patient
        outcomes.
      </>
    ),
  },
  {
    id: 4,
    title: "ACBC Director",
    subTitle: "Christy Roof, CMA, ISC",
    img: Christy,
    alt: "Christy Roof, CMA, ISC",
    body: (
      <>
        Christy is an accomplished biologic coordinator with over 16 years of
        experience. Opportunities throughout her career have provided her with
        in{dash}depth knowledge of multiple specialties including Rheumatology,
        Gastroenterology, Pulmonology, Allergy Asthma and Dermatology. She is
        employed by Altus Biologics in Pearland Texas.
      </>
    ),
    bodyExt: (
      <>
        As an Implementation Site Coordinator, she oversees multiple aspects of
        opening infusion suites within private medical practices and provides
        personalized assistance to her accounts. Christy has sat on multiple
        advisory boards and consults routinely. She is a pharmaceutical access
        speaker and educates her peers with a patient centered focus and
        streamlined approach. Christy sits on the Board of Directors for ACBC.
      </>
    ),
  },
  // {
  //   id: 5,
  //   title: "ACBC Director",
  //   subTitle: "Angela Lee, CMA/CDT",
  //   img: Angela,
  //   alt: "Angela Lee, CMA/CDT",
  //   body: (
  //     <>
  //       Angela, is a biologic coordinator of a dermatology practice in Southeast
  //       Michigan, and an Access Speaker for various pharmaceutical companies..
  //       She has over 15 years of advanced experience in dermatology, and
  //       specializes in the Buy and Bill process.She derives immense satisfaction
  //       from educating and championing her patients and peers.
  //     </>
  //   ),
  //   bodyExt: (
  //     <>
  //       Her diverse She holds the position of Chief Operating Officer at BC
  //       Educators, and serves on the Board of Directors for ACBC. background and
  //       impressive achievements highlight her dedication to the fields of
  //       education and healthcare. As an esteemed access speaker for multiple
  //       pharmaceutical companies, she brings valuable insights and expertise to
  //       the industry.
  //     </>
  //   ),
  // },

  // FOR DESKTOP
  {
    id: 6,
    title: "CEO & PRESIDENT",
    subTitle: "ACBC Founder: Brandis Boyd-Cooper, CMA/CDT",
    img: Brandis,
    alt: "Brandis Boyd-Cooper, CMA/CDT",
    body: (
      <>
        Brandis is a Biologic Access Coordinator with over twenty years of
        experience. Her specialty focuses have included Immunodermatology with
        crossover training in rheumatology. Her diverse experience, knowledge,
        and profound passion have enabled her to teach others a proficient
        workflow. With Brandis you learn how to process multiple variations of
        specialty medications including orals, injectables, topicals, and
        outpatient infusion coordination. Brandis is a renowned industry speaker
        and KOL.
      </>
    ),
    bodyExt: (
      <>
        She has worked with multiple profound physicians and mid{dash}level
        providers including Melissa Costner, M.D., Jennifer Cather. M.D.,
        Melodie Young, N.P., Daniel Walker, M.D. and Dario Kivelevitch, M.D. She
        is the founder and CEO of BioMazze Coordination, President and Co{dash}
        Founder of Access Coordinator Boot Camp, and the Regional Biologic
        Coordinator for US Dermatology Partners in the DFW area.
      </>
    ),
  },
  {
    id: 7,
    title: "CFO & VICE PRESIDENT",
    subTitle: "ACBC CO-Founder: Keri Janicek-McCurry, LVN",
    img: Keri,
    alt: "Keri Janicek-McCurry, LVN",
    body: (
      <>
        Keri is a Biological Coordinator for a large dermatology practice in the
        DFW Metroplex. She actively manages all biological and systemic
        medications for 16 providers. She is an Access Speaker and Advisory
        Board Member for multiple pharmaceutical companies. With over eight
        years of valuable experience, she has honed her skills and expertise to
        a remarkable level. Under the guidance of respected professionals like
        Dr. Alan Menter and Mary Wiatrowski, RN, DNC, Keri has gained insight
        and wisdom.
      </>
    ),
    bodyExt: (
      <>
        She not only expanded her knowledge but has also developed a deep
        passion for advancing healthcare practices. Her commitment to excellence
        and continuous learning sets her apart as a true asset in the field.
      </>
    ),
  },
  {
    id: 8,
    title: "Chief Operating Officer",
    subTitle: "ACBC CO-Founder: Misti Tompkins, RMA/CDT",
    img: Mitisi,
    alt: "Misti Tompkins, RMA/CDT",
    body: (
      <>
        Misti has performed under the title of Access Coordinator for 12 years.
        Developing a passion for Dermatology and Rheumatology. She is a Co{dash}
        Founder and the Chief Operating Officer for ACBC. Misti has the
        privilege of speaking for multiple pharmaceutical companies, in addition
        to serving on advisory boards. Her knowledge and experience regarding
        patient access is an asset in providing expert care for her patients.
      </>
    ),
    bodyExt: (
      <>
        The most rewarding aspect of her job as an access coordinator, is being
        able to educate and navigate her patients in obtaining medications that
        improve their quality of life.
      </>
    ),
  },
  {
    id: 9,
    title: "ACBC Director",
    subTitle: "Tyler Milliken",
    img: Tyler,
    alt: "Tyler Milliken",
    body: (
      <>
        Tyler Milliken is the Biologics Director for North Texas Allergy and
        Asthma Associates for the past eleven years, a Thought Leader and
        Advocate for biologics within his specialty of Allergy and Immunology.
        Tyler manages over 1,000 patients. His dedication to managing patients
        exemplifies his commitment to providing top{dash}notch care. His
        expertise in overseeing the Biologics Department is evident through his
        innovative processes that ensure the highest standards of quality and
        efficiency.
      </>
    ),
    bodyExt: (
      <>
        By continually refining and enhancing these processes, Tyler plays a
        vital role in advancing the field and improving patient outcomes. His
        innovative approach and unwavering determination serve as a testament to
        his valuable contributions in the medical field.
      </>
    ),
  },
  // {
  //   id: 10,
  //   title: "ACBC Director",
  //   subTitle: "Angela Lee, CMA/CDT",
  //   img: Angela,
  //   alt: "Angela Lee, CMA/CDT",
  //   body: (
  //     <>
  //       Angela, is a biologic coordinator of a dermatology practice in Southeast
  //       Michigan, and an Access Speaker for various pharmaceutical companies..
  //       She has over 15 years of advanced experience in dermatology, and
  //       specializes in the Buy and Bill process.She derives immense satisfaction
  //       from educating and championing her patients and peers.Her diverse She
  //       holds the position of Chief Operating Officer at BC Educators, and
  //       serves on the Board of Directors for ACBC.
  //     </>
  //   ),
  //   bodyExt: (
  //     <>
  //       background and impressive achievements highlight her dedication to the
  //       fields of education and healthcare. As an esteemed access speaker for
  //       multiple pharmaceutical companies, she brings valuable insights and
  //       expertise to the industry.
  //     </>
  //   ),
  // },
  {
    id: 11,
    title: "ACBC Director",
    subTitle: "Christy Roof, CMA, ISC",
    img: Christy,
    alt: "Christy Roof, CMA, ISC",
    body: (
      <>
        Christy is an accomplished biologic coordinator with over 16 years of
        experience. Opportunities throughout her career have provided her with
        in{dash}depth knowledge of multiple specialties including Rheumatology,
        Gastroenterology, Pulmonology, Allergy Asthma and Dermatology.She is
        employed by Altus Biologics in Pearland Texas. As an Implementation Site
        Coordinator. She oversees multiple aspects of opening infusion suites
        within private medical practices and provides personalized assistance to
        her accounts.
      </>
    ),
    bodyExt: (
      <>
        Christy has sat on multiple advisory boards and consults routinely. She
        is a pharmaceutical access speaker and educates her peers with a patient
        centered focus and streamlined approach. Christy sits on the Board of
        Directors for ACBC.
      </>
    ),
  },
];

export default HeadshotData;
