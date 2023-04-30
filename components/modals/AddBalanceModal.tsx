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

interface IProps {
  close: () => void;
}

const AddBalanceModal: React.FC<IProps> = ({ close }) => {
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
                console.log(value.sum);
              }}
            >
              {() => {
                return (
                  <Form>
                    <Input name="sum" placeholder="Сумма" />
                    <PrimaryButton
                      blue
                      style={{ marginTop: "1.6rem", width: "100%" }}
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

export default AddBalanceModal;
