"use client";

// Libs
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm, Controller } from "react-hook-form";

// Components
import { TextInput, Button, Flex, Switch, Text, Title } from "@tremor/react";
import Link from "next/link";

// Constant
import { ROUTES, REGEX, MESSAGES_ERROR } from "@/constants";

// Types
import { User } from "@/types";

// Actions
import { authenticate } from "../../actions/authenticationActions";

const SignInForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [authenticateRes, dispatch] = useFormState(authenticate, undefined);
  const authenticateErrorMsg = authenticateRes?.errorMessage || null;

  const { email, password } = errors;
  const emailErrorMessage = email?.message?.toString();
  const passwordErrorMessage = password?.message?.toString();
  const isEmailError = Boolean(email);
  const isPasswordError = Boolean(password);
  const isDisableSubmit = isEmailError || isPasswordError;

  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <div className="w-full p-4">
      <Flex className="bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7 shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]">
        <Title className="font-medium py-10 px:8 text-2xl text-white">
          Sign in
        </Title>
      </Flex>
      <form action={dispatch} className="w-full p-3">
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.EMAIL_REQUIRED,
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGES_ERROR.EMAIL_INVALID,
            },
          }}
          render={({ field }) => (
            <div className="h-[70px] w-full">
              <TextInput
                id="email"
                placeholder="Email"
                error={isEmailError}
                errorMessage={emailErrorMessage}
                type="email"
                autoFocus
                required
                {...field}
                className="py-0.5 w-full"
              />
            </div>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: MESSAGES_ERROR.PASSWORD_REQUIRED,
            // pattern: {
            //   value: REGEX.PASSWORD,
            //   message: MESSAGES_ERROR.PASSWORD_INVALID,
            // },
          }}
          render={({ field }) => (
            <div className="h-[70px] w-full">
              <TextInput
                id="password"
                placeholder="Password"
                error={isPasswordError}
                errorMessage={passwordErrorMessage}
                type="password"
                className="py-0.5 w-full"
                required
                {...field}
              />
            </div>
          )}
          name="password"
        />
        <div
          className="flex mb-4 items-center space-x-1"
          aria-live="polite"
          aria-atomic="true">
          {authenticateErrorMsg && (
            <p className="text-sm text-red-500">{authenticateErrorMsg}</p>
          )}
        </div>
        <div className="flex items-center space-x-3 mt-1">
          <Switch
            id="switch"
            name="switch"
            checked={isSwitchOn}
            color="zinc"
            className="flex justify-center items-center"
            onChange={handleSwitchChange}
          />
          <Text className="text-secondary font-normal">Remember me</Text>
        </div>

        <LoginButton isDisableSubmit={isDisableSubmit} />

        <Flex className="mt-8 mb-2 justify-center items-center">
          <Text className="text-secondary font-light">
            Don&rsquo;t have an acccount?
          </Text>
          <Link
            className="text-black-300 font-semibold text-sm ml-2"
            href={ROUTES.SIGN_UP}>
            Sign up
          </Link>
        </Flex>
      </form>
    </div>
  );
};

const LoginButton = ({ isDisableSubmit }: { isDisableSubmit: boolean }) => {
  const { pending } = useFormStatus();
  const disabled = isDisableSubmit || pending;

  return (
    <Button
      aria-disabled={disabled}
      className="w-full font-normal bg-gradient-primary py-[9px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]"
      size="xs"
      type="submit"
      disabled={disabled}>
      Sign In
    </Button>
  );
};

export default SignInForm;