import axios from "axios";

type User = {
    access_token: boolean;
    userId: string;
    email: string;
    username: string;
    status: string;
    userRole: string;
};

export async function AuthenticationFunction(email: string, password: string) {
    //console.log("entered AuthenticationFunction");
    try {
        // Make a POST request to the external API endpoint to validate the user's information
        const { data, status } = await axios.post<User>(
            ` ${process.env.WIIQARE_URI}/session`,
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        ); // Check the response from the API to determine if the authentication was successful
        if (data) {
            // If authentication succeeds, return the user object received from the API
            return data;
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
