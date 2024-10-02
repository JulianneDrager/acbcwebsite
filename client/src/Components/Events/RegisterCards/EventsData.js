import Logo from "../../../assets/images/header/logo.svg";
import Texas from "../../../assets/images/events/tx.svg";
import Michigan from "../../../assets/images/events/mi.svg";
import EventsStyles from "../Events.module.css";
import MIAgenda from "../../../assets/images/MichiganAgenda24.pdf";
// import TexasAgenda from "../../../assets/images/HoustonDailyAgenda.pdf";

const TexasImg = EventsStyles.TexasImg;
const MichiganImg = EventsStyles.MichiganImg;

const MIagendaOpen = () => {
  window.open(MIAgenda);
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
    addressTitle1: "EVENT HAS PAST",
    addressTitle2: "",
    address1: "",
    address2: "",
    btnTittle: "REGISTER",
    btnTittle2: "VIEW AGENDA",
    href: "",
    onClick: MIagendaOpen,
    onClickLink: agenda,
  },
  {
    id: 1,
    logo: Logo,
    state: Texas,
    classNameState: TexasImg,
    stateName: "Frisco, Texas",
    stateSubName: "Round Up 2025",
    when: " April 4th, 25 – April 6th, 25",
    time: " 7:00 PM",
    addressTitle1: "HYATT REGENCY FRISCO",
    addressTitle2: "DALLAS HOTEL",
    address1: "2615 PRESTON RD,",
    address2: " FRISCO, TX 75034",
    btnTittle: "REGISTER",
    btnTittle2: "VIEW AGENDA",
    href: "/event-details/grand-rapids-michigan-round-up-2024",
    onClick: msgTexas,
    onClickLink: agenda,
  },
];

export default EventsData;
