
import Head from "next/head";
import favicon from "../public/favicon.ico"
import Layout from "../components/layout";
import logo from "../public/images/logo_orange.png"
import Image from "next/image";
export default function login() {

    return (
        <>

            <div className="items-center bg-[linear-gradient(100deg,#0a5dd3,#24a7ff)]  mx-auto md:h-screen lg:py-0 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 xl:pb-5 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="h-full flex mt-[-72px]">
                            {/* <!-- Card --> */}
                            <div className="max-w-[360px] flex mx-auto">
                                <div className="bg-white shadow-lg h-[104px] rounded-full mt-9">
                                    {/* <!-- Card header --> */}
                                    <header className="text-center px-5 mt-[20px] pb-5">
                                        {/* <!-- Avatar --> */}
                                        <Image
                                            src={logo}
                                            width={70}
                                            height={50}
                                            alt="Picture of the author"
                                        />

                                    </header>
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in
                        </h2>
                    </div>

                    <div className="mt-4 pb-2 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>

                                <div className="bg-white px-4 pt-4 rounded-lg">
                                    <div className="relative bg-inherit">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="Email"
                                            className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black-500 placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                        />
                                        <label htmlFor="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email</label>
                                    </div>
                                </div>


                            </div>


                            <div className=" bg-white px-4 pb-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="password"
                                        className="peer w-full border-0 bg-transparent h-10 rounded-lg text-black-500 placeholder-transparent ring-2 px-2 ring-gray-200 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                    />
                                    <label htmlFor="password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Password</label>
                                </div>
                            </div>


                            <div className="px-4">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                            <div className=" px-4 flex gap-2">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in with Github
                                </button>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in with Discords
                                </button>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a href="#" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );


}
