import React from "react";
import { Input } from "../formik";
import { Formik, Form } from "formik";
import { TextTitle, SpanText } from "../atoms/Container";
import { PrimaryButton } from "../atoms/Buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import { instance } from "api/axios";
import { getLocalStorage } from "utils/utils";

import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Міндетті түрде почтаңызды жазыңыз"),
  password: Yup.string().required("Міндетті түрде парольіңізді жазыңыз"),
});

const LoginForm = () => {
  const router = useRouter();

  return (
    <>
      <TextTitle style={{ marginBottom: "3.2rem" }}>
        Қош келдіңіз біздің тур агенттік сайт платформамызға !
      </TextTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (value) => {
          await instance
            .post("/api/v1/tokens/authentication", {
              email: value.email,
              password: value.password,
            })
            .then((res: any) => {
              if (res) {
                router.push("/profile");
                localStorage.setItem("jwt", res);
                console.log(getLocalStorage("jwt"));
              }
            })
            .catch((err) => {
              if (err) {
                console.log(err);
              }
            });
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <Input name="email" placeholder="Почтаңыз..." />
              </div>

              <div>
                <Input name="password" placeholder="Парольіңіз..." />
              </div>

              {router.pathname === "/admin/signin" ? null : (
                <Link href={"/signup"}>
                  <SpanText>Акканутты создать ету</SpanText>
                </Link>
              )}

              <div style={{ textAlign: "center", marginTop: "5.4rem" }}>
                <PrimaryButton>Кіру</PrimaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
