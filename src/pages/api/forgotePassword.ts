import axios from "axios";
import { AuthenticationFunction } from "./authentication";

type User = {
    code: string;
    description: string;
};

export async function ForgotePassword(email: string, password: string) {
    try {
        // Make a POST request to the external API endpoint to validate the user's information
        const { data } = await axios.post<User>(
            ` ${process.env.WIIQARE_URI}/session/email-verification`,
            {
                email,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        ); // Check the response from the API to determine if the authentication was successful
        if (data.code === "USER_ACCOUNT_ALREADY_EXIST" ) {
            const auth =  await AuthenticationFunction(
                email,
                password
            );
            // If authentication succeeds, return the user object received from the API
            return auth;
        } else {
            // If authentication fails, return null
            return null;
        }
    } catch (error: any) {
        // Handle any errors that occur during the request or authentication process
        if (error.response) {
            console.error("error response data", error.response.data);
            console.error("error response status", error.response.status);
        } else if (error.request) {
            console.error("error request", error.request);
        } else {
            console.error("Error", error.message);
        }

        return null;
    }
}
