
interface Payers {
  data: {
    total_registered: number;
    total_purchased_vouchers: number;
    total_redeemed_vouchers: number;
    total_unspent_vouchers: number;
    total_active_payers: number;
    record: {
      id: number;
      name: string;
      country: string;
      registration_date: string;
      language: string;
      purchased_vouchers: number;
      beneficiaries_vouchers: number;
      unspent_vouchers: number;
      open_vouchers: number;
      redeemed_vouchers: number;
    }[];
  };
}

export default Payers;
