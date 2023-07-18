import React, { FormEventHandler, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "@/context/UserContext";
import { SignUpApi } from "@/pages/api/signUp";
import { signIn } from "next-auth/react";

const SignUp: NextPage = (): React.JSX.Element => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(true);
    const [isDisable, setIsDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const User = React.useContext(UserContext);
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsDisable(true);
        setIsLoading(true);

        const email = emailRef.current?.value.trim() || "";
        const password = passwordRef.current?.value.trim() || "";
        const confirmPassword = confirmPasswordRef.current?.value.trim() || "";

        if (password !== confirmPassword) {
            setIsValid(false);
            setErrorMessage("Passwords do not match");
            setIsDisable(false);
            setIsLoading(false);
            return;
        }

        const result: string | null = await SignUpApi(email, password);

        if (result === "ACTIVE") {
            const signInResult = await signIn("credentials", {
                email,
                password,
                redirect: false, // Prevents redirect after sign in
                callbackUrl: "/", // Replace with your desired redirect URL
            });

            if (signInResult?.error) {
                setIsValid(false);
                setIsDisable(false);
                setIsLoading(false);
            } else {
                User?.setAuthenticated(true);
                setIsDisable(false);
                setIsLoading(false);
                router.push("/");
            }
        } else {
            setIsValid(false);
            setErrorMessage("Account already exists");
            setIsDisable(false);
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="items-center bg-[linear-gradient(100deg,#0a5dd3,#24a7ff)]  mx-auto md:h-screen lg:py-0 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 xl:pb-5 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="h-full flex mt-[-72px]">
                            {/* <!-- Card --> */}
                            <div className="max-w-[360px] flex mx-auto">
                                <div className="bg-white shadow-lg w-[101px] h-[100px] rounded-full mt-9">
                                    {/* <!-- Card header --> */}
                                    <header className="text-center px-5 mt-[20px] pb-5">
                                        {/* <!-- Avatar --> */}
                                        <Image
                                            className="mt-[1.6rem]"
                                            src="/image/logo_orange.png"
                                            width={70}
                                            height={50}
                                            alt="logo"
                                        />
                                    </header>
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up
                        </h2>
                    </div>

                    <div className="mt-4 pb- sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <div className="bg-white px-4 pt-4 rounded-lg">
                                    <div className="relative bg-inherit">
                                        <input
                                            ref={emailRef}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="email@example.com"
                                            className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute cursor-text pointer-events-none left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                        >
                                            Email
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white px-4 pb-2 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        ref={passwordRef}
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="********"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Password
                                    </label>
                                </div>
                            </div>

                            <div className="bg-white px-4 pb-2 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        ref={confirmPasswordRef}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        placeholder="********"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label
                                        htmlFor="confirmPassword"
                                        className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Confirm Password
                                    </label>
                                </div>
                                {!isValid && (
                                    <div
                                        className="bg-orange-100 error-message border-l-4 mt-5 rounded-sm mb-[-0.85rem] border-orange-500 text-orange-700 p-4"
                                        role="alert"
                                    >
                                        <p className="font-bold">Sign-up Failed</p>
                                        <p className="ital">{errorMessage}</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-4">
                                <button
                                    type="submit"
                                    disabled={isDisable}
                                    className="flex w-full justify-center  rounded-md bg-orange-600 hover:bg-orange-500 py-2 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {isLoading ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : (
                                        "Sign up"
                                    )}
                                </button>
                            </div>

                            <div className="text-sm"></div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <button
                                onClick={() => router.push("/auth/signIn")}
                                className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
