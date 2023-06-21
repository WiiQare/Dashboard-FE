
interface IData {
    totalRegistered: string;
    totalPurchasedVouchers: number;
    totalRedeemedVouchers: number;
    totalUnspentVouchers: number;
    totalActivePayers: number;
    record: {
      id: number;
      name: string;
      country: string;
      registrationDate: string;
      language: string;
      purchasedVouchers: number;
      beneficiariesVouchers: number;
      unspentVouchers: number;
      openVouchers: number;
      redeemedVouchers: number;
    }[];
  }
  export default IData;

  