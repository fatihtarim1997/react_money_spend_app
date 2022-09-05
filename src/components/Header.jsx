import React from "react";
import { moneyFormat } from "../helpers";
//import { useState } from "react";
export default function Header({ money, total }) {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>${moneyFormat(money - total)}</span> paranız kaldı{" "}
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span> ${moneyFormat(money)} </span> paranız var
        </div>
      )}
      {money - total === 0 && (
        <div className="header"> Mağlesef bakiyeniz bitti</div>
      )}
  
    </div>
  );
}
