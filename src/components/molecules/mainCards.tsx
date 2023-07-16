import CircularProgress from '@mui/joy/CircularProgress';
import React from 'react';

import 'react-circular-progressbar/dist/styles.css';

interface VoucherInfoProps {
    label: string;
    numberOfVouchers?: number;
    value?: number;
    totalVouchers?: number;
}

const VoucherInfo: React.FC<VoucherInfoProps> = ({ label, numberOfVouchers = 0, value = 0, totalVouchers = 0 }) => {
    const percentage = totalVouchers > 0 ? (numberOfVouchers / totalVouchers) * 100 : 0;

    return (
        <div className="grid border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 rounded-md transition-c-0.5   dark:bg-[#182644] bg-white p-[20px] ">

            <div className=" ml-[-0rem] grid w-44  gap-0 ">
                <h4 className=" card-text transition-c-0.5 text-black dark:text-white">{numberOfVouchers}</h4>
                <h4 className=" card-text transition-c-0.5 text-black dark:text-white">{`Value: $${value}`}</h4>
                <h4 className="mb-4 card-text transition-c-0.5 text-black dark:text-white">{label}</h4>


            </div>
            <div className='flex flex-col items-end gap-5'>
                <CircularProgress

                    size="md"
                    thickness={7}
                    determinate
                    value={percentage}
                    // text={`${percentage.toFixed(1)}%`}
                    variant="soft"

                />
                <span className='text-primary'>
                    {`${percentage.toFixed(1)}%`}
                </span>

            </div>
        </div>
    )



};

interface DataProps {
    totalPendingVouchers?: number;
    pendingVouchers?: {
        numberOfVouchers?: number;
        value?: number;
    };
    totalPurchasedVouchers?: {
        numberOfVouchers?: number;
        value?: number;
    };
    totalUnclaimedVouchers?: {
        numberOfVouchers?: number;
        value?: number;
    };
    totalClaimedVouchers?: {
        numberOfVouchers?: number;
        value?: number;
    };
    totalRedeemedVouchers?: {
        numberOfVouchers?: number;
        value?: number;
    };
}

const ExampleComponent: React.FC<DataProps> = ({
    totalPendingVouchers = 0,
    pendingVouchers = {},
    totalPurchasedVouchers = {},
    totalUnclaimedVouchers = {},
    totalClaimedVouchers = {},
    totalRedeemedVouchers = {},
}) => {
    const totalVouchers =
        totalPurchasedVouchers?.numberOfVouchers! +
        totalUnclaimedVouchers?.numberOfVouchers! +
        totalClaimedVouchers?.numberOfVouchers! +
        totalRedeemedVouchers?.numberOfVouchers!;

    return (
        <div className='grid cards grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5 p-[23px]'>
            <VoucherInfo
                label="Pending Vouchers"
                numberOfVouchers={pendingVouchers?.numberOfVouchers}
                value={pendingVouchers?.value}
                totalVouchers={totalVouchers}
            />
            <VoucherInfo
                label="Purchased Vouchers"
                numberOfVouchers={totalPurchasedVouchers?.numberOfVouchers}
                value={totalPurchasedVouchers?.value}
                totalVouchers={totalVouchers}
            />
            <VoucherInfo
                label="Unclaimed Vouchers"
                numberOfVouchers={totalUnclaimedVouchers?.numberOfVouchers}
                value={totalUnclaimedVouchers?.value}
                totalVouchers={totalVouchers}
            />
            <VoucherInfo
                label="Claimed Vouchers"
                numberOfVouchers={totalClaimedVouchers?.numberOfVouchers}
                value={totalClaimedVouchers?.value}
                totalVouchers={totalVouchers}
            />
            <VoucherInfo
                label="Redeemed Vouchers"
                numberOfVouchers={totalRedeemedVouchers?.numberOfVouchers}
                value={totalRedeemedVouchers?.value}
                totalVouchers={totalVouchers}
            />
        </div>
    );
};

// Example data
const data: DataProps = {
    totalPendingVouchers: 10,
    pendingVouchers: {
        numberOfVouchers: 5,
        value: 100,
    },
    totalPurchasedVouchers: {
        numberOfVouchers: 20,
        value: 500,
    },
    totalUnclaimedVouchers: {
        numberOfVouchers: 8,
        value: 200,
    },
    totalClaimedVouchers: {
        numberOfVouchers: 15,
        value: 300,
    },
    totalRedeemedVouchers: {
        numberOfVouchers: 12,
        value: 400,
    },
};

const MainCards: React.FC = () => {
    return (
        <div>
            <ExampleComponent {...data} />
        </div>
    );
};

export default MainCards;