import React from "react";
import { Image } from "react-bootstrap";
import Check from "../../assets/mobile/in-office/arrow.png";

// this is the iterable component that will display the properties given to it

const CheckListProps = (props) => {
  // const mainContainer = ContentStyles.mainContainer;

  return (
    <>
      <div className={props.divClassName}>
        <Image src={Check} className={props.imgClassName} />
        <span>{props.span}</span>
      </div>
    </>
  );
};

export default CheckListProps;
