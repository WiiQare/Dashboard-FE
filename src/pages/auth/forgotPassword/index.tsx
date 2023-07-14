import React, { FormEventHandler, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ForgotePassword } from "../../api/forgotePassword";
import { VerifyEmail } from "../../api/verifyEmail";
import { UserContext } from "@/context/UserContext";

const ForogtPassword: NextPage = (props): React.JSX.Element => {
    const email = useRef<string>("");
    const password = useRef<string>("");
    const confirm_password = useRef<string>("");
    const router = useRouter();
    const [isValid, setIsValid] = React.useState<boolean>(false);
    const [isVerifyEmail, setISVerifyEmail] = React.useState<boolean>(false);
    const [ErroMessage, setErroMessage] = React.useState<boolean>(false);
    const [isMatch, setIsMatch] = React.useState<boolean>(true);
    const User = React.useContext(UserContext);

    if (User?.authenticated === true) router.push("/");


    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (!isVerifyEmail) {
            const varifyEmail = await VerifyEmail(email.current);
            varifyEmail ? setISVerifyEmail(varifyEmail) : setErroMessage(true)
        }



        if (user) {
            User?.setAuthenticated(true);
            User?.setUser(user);
            localStorage.setItem("userState", JSON.stringify(user));
            localStorage.setItem("userAuth", JSON.stringify(true));
            router.push("/");
        } else {
            setIsValid(false);
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
                            Sign Up
                        </h2>
                    </div>

                    <div className="mt-4 pb-[-2rem] sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-7" onSubmit={onSubmit}>
                            <div>
                                <div className="bg-white px-4 pt-4 rounded-lg">
                                    {!isValid ? <div className="relative bg-inherit">
                                        <input
                                            onChange={(e) => {
                                                email.current = e.target.value;
                                                setIsValid(true);
                                            }}
                                            id="email"
                                            name="email"
                                            //type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="email@example.com"
                                            className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                        >
                                            Enter Your email
                                        </label>
                                    </div> :
                                    <div><div className="relative bg-inherit">
                                    <input
                                        onChange={(e) => {
                                            email.current = e.target.value;
                                            setIsValid(true);
                                        }}
                                        id="email"
                                        name="email"
                                        //type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="email@example.com"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Enter Your email
                                    </label>
                                </div><div className="relative bg-inherit">
                                    <input
                                        onChange={(e) => {
                                            email.current = e.target.value;
                                            setIsValid(true);
                                        }}
                                        id="email"
                                        name="email"
                                        //type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="email@example.com"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Enter Your email
                                    </label>
                                </div></div>}
                                </div>
                            </div>

                            <div className="px-4">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center pointer-events-none rounded-md bg-orange-600 py-2 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>



                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?
                            <button
                                onClick={() => router.push("/auth/signin")}
                                className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForogtPassword;
