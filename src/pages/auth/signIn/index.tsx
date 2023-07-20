import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { UserContext } from "@/context/UserContext";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthenticateUser } from "@/pages/api/authentication";

const SignIn: NextPage = (): React.JSX.Element => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const router = useRouter();
    const [isValidInput, setIsValidInput] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const userContext = React.useContext(UserContext);

    if (userContext?.authenticated === true) {
        router.push("/");
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsDisabled(true);
        setIsLoading(true);

        const email = emailRef.current;
        const password = passwordRef.current;

        const user = await AuthenticateUser(email, password);

        if (user?.access_token && user?.type.includes("WIIQARE")) {
            userContext?.setAuthenticated(true);
            userContext?.setUser(user);
            sessionStorage.setItem("userState", JSON.stringify(user));
            sessionStorage.setItem("userAuth", JSON.stringify(true));
            setIsValidInput(true);
            setIsDisabled(false);
            setIsLoading(false);
            router.push("/");
        } else if (user?.access_token &&  !user?.type.includes("WIIQARE")) {
            setErrorMessage("Sorry you are not allowed to access this page")
            setIsLoading(false);
            setIsDisabled(false);
            setIsValidInput(false);
        } else {
            setIsValidInput(false);
            setErrorMessage("Verify that you entered the correct email and password")
            setIsLoading(false);
            setIsDisabled(false);
        }


    };

    return (
        <>
            <div className="items-center bg-gradient-to-b from-blue-600 to-blue-400 mx-auto md:h-screen lg:py-0 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 xl:pb-5">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="h-full flex mt-[-72px]">
                            <div className="max-w-[360px] flex mx-auto">
                                <div className="bg-white shadow-lg w-[101px] h-[100px] rounded-full mt-9">
                                    <header className="text-center px-5 mt-[20px] pb-5">
                                        <Image
                                            className="mt-[1.6rem]"
                                            src="/images/logo_orange.png"
                                            width={70}
                                            height={50}
                                            alt="logo"
                                        />
                                    </header>
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in
                        </h2>
                    </div>

                    <div className="mt-4 pb- sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <div className="bg-white px-4 pt-4 rounded-lg">
                                    <div className="relative bg-inherit">
                                        <input
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (value !== emailRef.current) {
                                                    emailRef.current = value;
                                                    setIsValidInput(true);
                                                }
                                            }}
                                            id="email"
                                            name="email"
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
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value !== passwordRef.current) {
                                                passwordRef.current = value;
                                                setIsValidInput(true);
                                            }
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
                                        className="absolute pointer-events-none cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                    >
                                        Password
                                    </label>
                                </div>
                                {!isValidInput && (
                                    <div className="bg-orange-100 error-message border-l-4 mt-5 rounded-sm mb-[-0.85rem] border-orange-500 text-orange-700 p-4">
                                        <p className="font-bold">Login Failed</p>
                                        <p className="ital">
                                            {errorMessage}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="px-4">
                                <button
                                    type="submit"
                                    disabled={isDisabled}
                                    className="flex w-full justify-center  rounded-md bg-orange-600 hover:bg-orange-500 py-2 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {isLoading ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : (
                                        "Sign in"
                                    )}
                                </button>
                            </div>
                            <div className="text-sm"></div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{" "}
                            <span title="Contact an Administrator" className="hover:underline cursor-help">
                                Contact an Administrator
                            </span>
                        </p>


                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
