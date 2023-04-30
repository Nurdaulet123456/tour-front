import React, { useEffect, useState } from "react";
import { instance } from "@/api/axios";
import { getLocalStorage } from "@/utils/utils";
import { AddBalanceIcons, OutComeIcons } from "../atoms/Icons";
import SendBalanceModal from "../modals/SendBalance";
import OutComeModal from "../modals/OutComeModal";

const Amout = () => {
  const [userAmount, setUserAmount] = useState<any>();
  const [show, setShow] = useState<boolean>(false)
  const [showOut, setShowOut] = useState<boolean>(false)

  useEffect(() => {
    getAmount();

    setUserAmount(JSON.parse(localStorage.getItem("amount") as any));
  }, []);

  const getAmount = async () => {
    await instance
      .get("/api/v1/my_balance", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("jwt")}`,
        },
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("amount", JSON.stringify(res));
        }
      });
  };

  return (
    <>
    {show && <SendBalanceModal close={() => setShow(false)}/>}
    {showOut && <OutComeModal close={() => setShowOut(false)}/>}
      <div className="profile_amout">
        {userAmount?.my_balance} ₸
        <div onClick={() => setShow(true)}>
          <AddBalanceIcons />
        </div>

        <div onClick={() => setShowOut(true)}>
          <OutComeIcons />
        </div>
      </div>
    </>
  );
};

export default Amout;
