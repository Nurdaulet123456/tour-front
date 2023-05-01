import React, { useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

import { AddBalanceIcons } from "components/atoms/Icons";
import { TextTitle } from "components/atoms/Container";
import AddBalanceModal from "components/modals/AddBalanceModal";

const MenegerAdmin = () => {
  const [value, setValue] = useState<boolean | null>(false);
  return (
    <>
    <Head>
        <title>Meneger Admin Page</title>
    </Head>
      {value && <AddBalanceModal close={() => setValue(false)}/>}

      <TextTitle style={{ marginBlock: "3.2rem" }}>Admin</TextTitle>
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
          <th>Add</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Nurdaulet</td>
          <td>toregaliyev@gmail.com</td>
          <td>50000</td>
          <td>
            <AddButtonStyled onClick={() => setValue(true)}>
              <AddBalanceIcons />
            </AddButtonStyled>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Nurdaulet</td>
          <td>toregaliyev@gmail.com</td>
          <td>50000</td>
          <td>
            <AddButtonStyled onClick={() => setValue(true)}>
              <AddBalanceIcons />
            </AddButtonStyled>
          </td>
        </tr>
      </Table>
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
