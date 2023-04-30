import React from "react";
import {
  Modal,
  ModalInner,
  ModalContent,
  ModalTitles,
} from "../atoms/Container";
import { Input } from "../formik";
import { Formik, Form } from "formik";
import { PrimaryButton } from "../atoms/Buttons";
import { CloseIcons } from "../atoms/Icons";
import { instance } from "@/api/axios";
import { getLocalStorage } from "@/utils/utils";

interface IProps {
  close: () => void;
}

const SendBalanceModal: React.FC<IProps> = ({ close }) => {
  return (
    <>
      <Modal>
        <ModalInner>
          <ModalContent>
            <ModalTitles>Сумма</ModalTitles>

            <Formik
              initialValues={{
                sum: "",
              }}
              onSubmit={async (value) => {
                await instance.post('/api/v1/payment/income', {
                    amount: Number(value.sum),
                }, {
                    headers: {
                        'Authorization': `Bearer ${getLocalStorage("jwt")}`
                    }
                }).then(res => {
                    if (res) {
                        close()
                    }
                })
              }}
            >
              {() => {
                return (
                  <Form>
                    <Input name="sum" placeholder="Сумма" />
                    <PrimaryButton
                      blue
                      style={{ marginTop: "1.6rem", width: "100%" }}
                      type='submit'
                    >
                      Отправить
                    </PrimaryButton>
                  </Form>
                );
              }}
            </Formik>

            <div onClick={close}>
              <CloseIcons />
            </div>
          </ModalContent>
        </ModalInner>
      </Modal>
    </>
  );
};

export default SendBalanceModal;
