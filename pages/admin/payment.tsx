import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { TextTitle } from "@/components/atoms/Container";
import { DoneIcons, NotDoneIcons } from "@/components/atoms/Icons";

import { getLocalStorage } from "@/utils/utils";
import { instance } from "@/api/axios";

const MenegerAdmin = () => {
  const [userPayment, setUserPayment] = useState<any>();

  useEffect(() => {
    getPayment();

    setUserPayment(JSON.parse(localStorage.getItem("payment") as any));
  }, []);

  const getPayment = async () => {
    await instance
      .get("/api/v1/payments", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("jwt")}`,
        },
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("payment", JSON.stringify(res));
        }
      });
  };

  const getPaymentIDIncomeDeleted = async (id: number) => {
    const findId = userPayment?.incomes?.find((i: any) => i.ID === id)?.ID;
    console.log(findId)

    await instance
      .delete(`api/v1/payment/${findId}`, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("jwt")}`,
        },
      })
      .then((res) => {
        if (res) {
          window.location.reload();
        }
      });
  };


  const getPaymentIDOutcomeDeleted = async (id: number) => {
    const findId = userPayment?.incomes?.find((i: any) => i.ID === id)?.ID;
    console.log(findId)

    await instance
      .patch(`api/v1/payment/${findId}`, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("jwt")}`,
        },
      })
      .then((res) => {
        if (res) {
          window.location.reload();
        }
      });
  };



  return (
    <>
      <Head>
        <title>Payment Admin Page</title>
      </Head>
      <div>
        <div>
          {userPayment?.incomes === null
            ? "No INCOME"
            : userPayment?.incomes?.map((item: any, index: any) => (
                <>
                  <TextTitle style={{ marginBlock: "3.2rem" }}>
                    {item?.type}
                  </TextTitle>
                  <Table>
                    <tr>
                      <th>Index</th>
                      <th
                        style={{
                          width: "300px",
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          width: "550px",
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          width: "550px",
                        }}
                      >
                        Balance
                      </th>
                      <th>Type</th>
                      <th>Add</th>
                    </tr>

                    <tr key={item?.ID}>
                      <td>{index + 1}</td>
                      <td>{item?.User?.first_name}</td>
                      <td>{item?.User?.email}</td>
                      <td>{item?.amount}</td>
                      <td>{item?.type}</td>
                      <td style={{ display: "flex" }}>
                        <div
                          onClick={() => getPaymentIDOutcomeDeleted(item?.ID)}
                        >
                          <AddButtonStyled>
                            <DoneIcons />
                          </AddButtonStyled>
                        </div>
                        <div onClick={() => getPaymentIDIncomeDeleted(item?.ID)}>
                          <AddButtonStyled>
                            <NotDoneIcons />
                          </AddButtonStyled>
                        </div>
                      </td>
                    </tr>
                  </Table>
                </>
              ))}
        </div>

        <div>
          {userPayment?.outcomes === null
            ? "No INCOME"
            : userPayment?.outcomes?.map((item: any, index: any) => (
                <>
                  <TextTitle style={{ marginBlock: "3.2rem" }}>
                    {item?.type}
                  </TextTitle>
                  <Table>
                    <tr>
                      <th>Index</th>
                      <th
                        style={{
                          width: "300px",
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          width: "550px",
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          width: "550px",
                        }}
                      >
                        Balance
                      </th>
                      <th>Type</th>
                      <th>Add</th>
                    </tr>

                    <tr key={item?.ID}>
                      <td>{index + 1}</td>
                      <td>{item?.User?.first_name}</td>
                      <td>{item?.User?.email}</td>
                      <td>{item?.amount}</td>
                      <td>{item?.type}</td>
                      <td style={{ display: "flex" }}>
                        <div onClick={() => getPaymentIDOutcomeDeleted(item?.ID)}>
                          <AddButtonStyled>
                            <DoneIcons />
                          </AddButtonStyled>
                        </div>
                        <div onClick={() => getPaymentIDIncomeDeleted(item?.ID)}>
                          <AddButtonStyled>
                            <NotDoneIcons />
                          </AddButtonStyled>
                        </div>
                      </td>
                    </tr>
                  </Table>
                </>
              ))}
        </div>
      </div>
      {/* 
      <div>
      {userPayment?.nonCompleted === null ? 'No INCOME' : userPayment?.nonCompleted?.map((item: any, index: any) => (
            <>
              <TextTitle style={{ marginBlock: "3.2rem" }}>{item?.type}</TextTitle>
              <Table>
                <tr>
                  <th>Index</th>
                  <th
                    style={{
                      width: "300px",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      width: "550px",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      width: "550px",
                    }}
                  >
                    Balance
                  </th>
                  <th>Type</th>
                  <th>Add</th>
                </tr>

                <tr key={item?.ID}>
                <td>{index + 1}</td>
                  <td>{item?.User?.first_name}</td>
                  <td>{item?.User?.email}</td>
                  <td>{item?.amount}</td>
                  <td>{item?.type}</td>
                  <td style={{ display: "flex" }}>
                    <AddButtonStyled>
                      <DoneIcons />
                    </AddButtonStyled>
                    <AddButtonStyled>
                      <NotDoneIcons />
                    </AddButtonStyled>
                  </td>
                </tr>
              </Table>
            </>
          ))} 
      </div> */}
    </>
  );
};
const Table = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  paddin-inline: 2rem;
  text-align: left;
  width: 100%;

  tr,
  th,
  td {
    border: 1px solid black;
    padding-inline: 2rem;
    padding-block: 1rem;
  }
`;

const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;

  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export default MenegerAdmin;
