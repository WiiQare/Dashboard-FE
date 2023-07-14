import React, { FormEventHandler, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { SignUpApi } from "../../api/signup";
import { UserContext } from "@/context/UserContext";

const SignUp: NextPage = (props): React.JSX.Element => {
    const email = useRef<string>("");
    const password = useRef<string>("");
    const confirm_password = useRef<string>("");
    const router = useRouter();
    const [isValid, setIsValid] = React.useState<boolean>(true);
    const [isMatch, setIsMatch] = React.useState<boolean>(true);
    const User = React.useContext(UserContext);

    if (User?.authenticated === true) router.push("/");

    const comparePassword = (pass: string, cpass: string) => {
        console.log(cpass.length);
        cpass.length != 0 ? (pass === cpass ? setIsMatch(true) : setIsMatch(false)) : setIsMatch(true) 

    };

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const user = await SignUpApi(email.current, password.current);

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
                                    <div className="relative bg-inherit">
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
                                            User
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="bg-white px-4 rounded-lg">
                                    <div className="relative bg-inherit">
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
                                            Email
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-white px-4 pb-2 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        onChange={(e) => {
                                            password.current = e.target.value;
                                            setIsValid(true);
                                            comparePassword(
                                                password.current,
                                                confirm_password.current
                                            );

                                        }}
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="********"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base pointer-events-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mb-[-13px] ">

                                    <span
                                        className={` text-sm text-red-600
                                        ${isMatch && "invisible"} `}
                                    >
                                        Passwords do not match
                                    </span>
                                </div>
                                <div className="relative mt-6 bg-inherit">
                                    <input
                                        onChange={(e) => {
                                            confirm_password.current = e.target.value;
                                            setIsValid(true);
                                            comparePassword(
                                                password.current,
                                                confirm_password.current
                                            );
                                        }}
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        required
                                        placeholder="Re-type your password"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focusPassword:border-rose-600"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute cursor-text left-0 -top-3 text-sm pointer-events-none text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Re-type your password
                                    </label>
                                </div>
                                <div className=" mb-[-24px] ">

                                    <span
                                        className={`text-sm text-red-600
                                        ${isMatch && "invisible"} `}
                                    >
                                        Passwords do not match
                                    </span>
                                </div>
                                {!isValid && (
                                    <div
                                        className="bg-orange-100 error-message border-l-4 mt-5 rounded-sm mb-[-0.85rem] border-orange-500 text-orange-700 p-4"
                                        role="alert"
                                    >
                                        <p className="font-bold">Sign up Failed!</p>
                                        <p className=" ital">This Email is already in use.</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-4">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-600 py-2 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div className="pl-5 text-sm"></div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?
                            <button
                                onClick={ ()=> router.push("/auth/signin")}
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

export default SignUp;
