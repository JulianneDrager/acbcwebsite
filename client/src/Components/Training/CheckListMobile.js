import React from "react";
import CheckListMobileData from "./CheckListMobileData";
import CheckListProps from "./CheckListProps";

const CheckListMobile = () => {
  const mobileCheckList = CheckListMobileData.map((data) => {
    return <CheckListProps key={data.id} {...data} />;
  });
  return <>{mobileCheckList}</>;
};

export default CheckListMobile;
