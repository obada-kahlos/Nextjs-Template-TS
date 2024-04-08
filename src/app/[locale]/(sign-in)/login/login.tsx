"use client";

import { TypographyRace } from "@/components/Typography/Typography";
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormBox from "@/components/form-box/form-box";
import { InputRace } from "@/components/input";
import ButtonRace from "@/components/button/button";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { OR } from "@/components/or";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";

interface TransitionProps {
  SignUp: string;
  SignIn: string;
  Username: string;
  Password: string;
  ForgotPassword: string;
  ResetPassword: string;
  NoAccount: string;
  UsernameIsRequired: string;
  PasswordIsRequired: string;
  EmailIsRequired: string;
  Verify: string;
  VerifyEmail: string;
}

const Login = ({ Transition }: { Transition: TransitionProps }) => {
  const schemaLogin = yup.object().shape({
    username: yup.string().email().required(Transition.UsernameIsRequired),
    password: yup
      .string()
      .required(Transition.PasswordIsRequired)
      .min(8, `${Transition.PasswordIsRequired}`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{3,}$/,
        `${Transition.PasswordIsRequired}`
      )
      .required(Transition.PasswordIsRequired),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[405px]">
      <TypographyRace
        content={Transition?.SignIn}
        fontSize="32px"
        fontWeight="600"
        marginBottom="18px"
        lineHeight="1.1"
      />
      {/* <OR title="Or sign up with email" width="110px" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputRace
                  {...field}
                  label={Transition.Username}
                  name=""
                  placeholder={Transition.Username}
                  type="text"
                />
              )}
            />
            {errors.username && (
              <p className="text-[14px] text-[red] mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="col-span-12">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputRace
                  {...field}
                  label={Transition.Password}
                  name=""
                  placeholder={Transition.Password}
                  type="text"
                />
              )}
            />
            {errors.password && (
              <p className="text-[14px] text-[red] mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="col-span-12  mt-2 mb-4 flex items-center gap-2">
            <p className="text-[#7C8493] text-[14px]">
              {Transition.ForgotPassword}
            </p>
            <Link href={"/en/reset-password"}>
              <span className="dark:text-dark_paragraph_color text-light_paragraph_color font-bold">
                {Transition.ResetPassword}
              </span>
            </Link>
          </div>

          <div className="col-span-12 mt-[2rem]">
            <ButtonRace
              width={"100%"}
              height={"46px"}
              padding={""}
              rounded={"6px"}
              title={Transition.SignIn}
              border={""}
              textColor="#ffffff"
            />
          </div>
        </div>
      </form>
      <div className="mt-2 mb-4 flex items-center gap-2">
        <p className="text-[#7C8493] text-[14px]">{Transition.NoAccount}</p>
        <Link href={"/en/sign-up"}>
          <span className="dark:text-dark_paragraph_color text-light_paragraph_color font-bold ">
            {Transition.SignUp}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
