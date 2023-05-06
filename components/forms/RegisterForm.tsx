import React from "react";
import { Input } from "../formik";
import { Formik, Form } from "formik";
import { TextTitle, SpanText } from "../atoms/Container";
import { PrimaryButton } from "../atoms/Buttons";
import Link from "next/link";
import { useRouter } from "next/router";

import { instance } from "api/axios";

const RegisterForm = () => {
  const router = useRouter()
  return (
    <>
      <TextTitle style={{ marginBottom: "3.2rem" }}>Акканут құру</TextTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
          bank: "",
          firstName: "",
          lastName: "",
          phone: "",
          referral: "",
        }}
        onSubmit={async (value) => {
          await instance
            .post("/api/v1/user", {
              bank_uuid: value.bank,
              email: value.email,
              first_name: value.firstName,
              last_name: value.lastName,
              password: value.password,
              phone: value.phone,
              referral_code: value.referral,
            })
            .then((res) => {
              if (res) {
                console.log("Success");
                router.push('/')
              } 
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <Input name="firstName" placeholder="Атыңыз..." />
              </div>

              <div>
                <Input name="lastName" placeholder="Фамилия..." />
              </div>

              <div>
                <Input name="email" placeholder="Почтаңыз..." />
              </div>

              <div>
                <Input type="password" name="password" placeholder="Парольіңіз..." />
              </div>

              <div>
                <Input name="bank" placeholder="Банк счетыңыз..." />
              </div>

              <div>
                <Input name="phone" placeholder="Телефоныңыз..." />
              </div>

              <div>
                <Input name="referral" placeholder="Реферал ссылкаңыз..." />
              </div>

              <Link href={"/"}>
                <SpanText>Егер акканут бар болған жағдайда</SpanText>
              </Link>

              <div style={{ textAlign: "center", marginTop: "5.4rem" }}>
                <PrimaryButton type='submit'>Құру</PrimaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
