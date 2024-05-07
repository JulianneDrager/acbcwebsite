import Logo from "../../../assets/images/header/logo.svg";
import Texas from "../../../assets/images/events/tx.svg";
import Michigan from "../../../assets/images/events/mi.svg";
import EventsStyles from "../Events.module.css";
// import TexasAgenda from "../../../assets/images/HoustonDailyAgenda.pdf";

const TexasImg = EventsStyles.TexasImg;
const MichiganImg = EventsStyles.MichiganImg;
const msg = () => {
  alert("Grand Rapids Agenda is Coming Soon");
};
const msgTexas = () => {
  alert("Dallas Texas Agenda is Coming Soon");
};
const agenda = () => {
  window.open("/agendas");
};

const EventsData = [
  {
    id: 0,
    logo: Logo,
    state: Michigan,
    classNameState: MichiganImg,
    stateName: "Grand Rapids, Michigan",
    stateSubName: "Round Up 2024",
    when: " Jul 26, 2024 – Jul 28, 2024",
    time: " 7:00 PM",
    addressTitle1: "GRAND RAPIDS, AMWAY",
    addressTitle2: " GRAND PLAZA HOTEL",
    address1: "187 Monroe Ave NW,",
    address2: "Grand Rapids, MI 49503, USA",
    btnTittle: "REGISTER",
    btnTittle2: "VIEW AGENDA",
    href: "/event-details/grand-rapids-michigan-round-up-2024",
    onClick: msg,
    onClickLink: agenda,
  },
  {
    id: 1,
    logo: Logo,
    state: Texas,
    classNameState: TexasImg,
    stateName: "Dallas, Texas",
    stateSubName: "Round Up 2025",
    when: " Apr 05, 2025 – Apr 07, 2025",
    time: " 7:00 PM",
    addressTitle1: "ADDRESS AND VENUE",
    addressTitle2: "TO BE RELEASED",
    address1: "Dallas, TX, USA",
    address2: "",
    btnTittle: "REGISTER",
    btnTittle2: "VIEW AGENDA",
    href: "/event-details/grand-rapids-michigan-round-up-2024",
    onClick: msgTexas,
    onClickLink: agenda,
  },
];

export default EventsData;
