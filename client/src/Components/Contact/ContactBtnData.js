import ContactStyle from "./Contact.module.css";
const mapStyle = ContactStyle.mapStyle;
const mapIconStyle = ContactStyle.mapIconStyle;

const ContactBtnData = [
  {
    id: 0,
    btnText: "CLICK TO VIEW MAP",
    className: mapIconStyle,
    map: (
      <>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107387.71040630309!2d-96.52609015112213!3d32.742749994853554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ead96771cce91%3A0x1a100508f9b9472e!2sForney%2C%20TX%2075126!5e0!3m2!1sen!2sus!4v1711222930702!5m2!1sen!2sus"
          className={mapStyle}
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </>
    ),
  },
];

export default ContactBtnData;
