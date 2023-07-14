import axios from "axios";

type User = {
    code: string;
    description: string;
};

export async function VerifyEmail(email: string)  {
    try {
        // Make a POST request to the external API endpoint to validate the user's information
        const { data } = await axios.post<User>(
            ` ${process.env.WIIQARE_URI}/email-verification`,
            {
                email,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        ); 
        if (data.code === "USER_ACCOUNT_ALREADY_EXIST") {
            return true
        } else {
            
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
