import axios from 'axios';

type User = {
  access_token: string;
  userId: string;
  email: string;
  username: string;
  status: string;
  type: string;
};

export async function AddManagers(
  email: string,
  password: string,
): Promise<User | null> {
  try {
    // Determine the API endpoint based on the action parameter
    const apiEndpoint = `${process.env.WIIQARE_URI}/admin/managers`;

    // Make a POST request to the selected API endpoint
    const { data, status } = await axios.post<User>(apiEndpoint, {
      email,
      password,
    });
    if (data) {
      return data;
    } else {
      // Customize error messages based on the action
      throw new Error('Failed to add manager. Please try again later.');
    }
  } catch (error: any) {
    // Handle errors and access the custom error message
    const customErrorMessage = 'Failed to add manager. Please try again later.';
    //  console.error('Custom Error Message:', customErrorMessage);
    throw new Error(customErrorMessage); // Rethrow the error with the custom message
  }
}
