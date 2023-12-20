const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

export async function convertCurrency(from: string, amount: number, to: string) {
    try {
      const Options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          apikey: `i6sKwItIpG9o1PLxB6nykJ5OFecFsW8X`,
        },
      };
  
      const response = await fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
        Options,
      );
      const json = await response.json();

      return json;

    } catch (error) {
      return error;
    }
  }
  
  export async function savePatient(formData: {accessToken?: string, id?: string}) {
    try {
      console.log(formData);
      let token = formData.accessToken;
  
        delete formData?.accessToken;
  
      const Options = {
        method: formData?.id? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };
  
      const response = await fetch(BASE_URL + '/payer/patient/admin', Options);
      const json = await response.json();

      return json;
    } catch (error) {
      return error;
    }
  }

  export async function generateWithoutStripe(formData: {accessToken?: string,  senderId: string, patientId: string, currencyPatientAmount: number, currencyPatient: string, currencyRate: number, senderAmount: number, senderCurrency: string}) {
    try {

      let token = formData.accessToken;
  
        delete formData?.accessToken;
  
      const Options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };
  
      const response = await fetch(BASE_URL + '/payment/notification/admin-pmt', Options);
      const json = await response.json();

      return json;
    } catch (error) {
      return error;
    }
  }

  export async function sendSMSHash(formData: {accessToken?: string,  shortenHash: string}) {
    try {
      let token = formData.accessToken;
  
      delete formData.accessToken;
  
      const Options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };
  
      const response = await fetch(BASE_URL + '/payer/send-sms-voucher', Options);
  
      console.log(response);
      const json =
        response.status == 200 || response.status == 201
          ? response
          : await response.json();
  
      return json;
    } catch (error) {
      return error;
    }
  }