import checkMobileStyles from "./checkMobile.module.css";

const checkMobile = checkMobileStyles.checkMobile; //mobile
const checklist = checkMobileStyles.checklist; //mobile

const CheckListMobileData = [
  {
    id: 1,
    divClassName: checklist,
    imgClassName: checkMobile,
    span: "get help with troubleshooting difficult cases and backlog with on-going office support and training",
  },

  {
    id: 2,
    divClassName: checklist,
    imgClassName: checkMobile,
    span: "coordinators receive access to access boot camp advisors monday-friday 8:00 pm to 5:00 pm central",
  },

  {
    id: 3,
    divClassName: checklist,
    imgClassName: checkMobile,
    span: "office staff receive education on documentation and processing",
  },
];

export default CheckListMobileData;
