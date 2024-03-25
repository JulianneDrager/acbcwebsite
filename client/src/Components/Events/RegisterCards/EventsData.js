import Logo from "../../../assets/images/header/logo.svg";
import Texas from "../../../assets/images/events/tx.svg";
import Michigan from "../../../assets/images/events/mi.svg";
import EventsStyles from "../Events.module.css";

const TexasImg = EventsStyles.TexasImg;
const MichiganImg = EventsStyles.MichiganImg;

const EventsData = [
  {
    id: 0,
    logo: Logo,
    state: Texas,
    classNameState: TexasImg,
    stateName: "Houston, Texas",
    stateSubName: "Round Up 2024",
    when: " Apr 05, 2024 – Apr 07, 2024",
    time: " 7:00 PM",
    addressTitle1: "HILTON HOUSTON POST OAK",
    addressTitle2: "BY THE GALLERIA HOTEL",
    address1: "Hilton Houston Post Oak, 2001 Post",
    address2: "Oak Blvd, Houston, TX 77056, USA",
    btnTittle: "BUY TICKETS",
  },
  {
    id: 1,
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
    btnTittle: "BUY TICKETS",
  },
];

export default EventsData;
