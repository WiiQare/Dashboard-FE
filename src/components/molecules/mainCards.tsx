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
                    variant="soft"
                />
                <span className='text-primary'>
                    {`${percentage.toFixed(1)}%`}
                </span>
            </div>
        </div>
    );
};

export interface DataProps {
    [x: string]: any;
    totalPendingVouchers?: {
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

const Cards: React.FC<DataProps> = ({
    totalPendingVouchers = {},
    totalPurchasedVouchers = {},
    totalUnclaimedVouchers = {},
    totalClaimedVouchers = {},
    totalRedeemedVouchers = {},
}) => {
    const totalVouchers =
        (totalPendingVouchers?.numberOfVouchers ?? 0) +
        (totalPurchasedVouchers?.numberOfVouchers ?? 0) +
        (totalUnclaimedVouchers?.numberOfVouchers ?? 0) +
        (totalClaimedVouchers?.numberOfVouchers ?? 0) +
        (totalRedeemedVouchers?.numberOfVouchers ?? 0);
    console.log(totalPendingVouchers?.numberOfVouchers)
    return (
        <div className='grid cards grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5 p-[23px]'>
            <VoucherInfo
                label="Pending Vouchers"
                numberOfVouchers={totalPendingVouchers?.numberOfVouchers}
                value={totalPendingVouchers?.value}
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

const MainCards: React.FC<{ data: DataProps }> = ({ data }) => {
    const modifiedData = {
        totalPendingVouchers: data.pendingVouchers?.numberOfVouchers,
        pendingVouchers: data.pendingVouchers,
        totalPurchasedVouchers: data.vouchersInMaxTime,
        totalUnclaimedVouchers: data.unclaimedVouchers,
        totalClaimedVouchers: data.claimedVouchers,
        totalRedeemedVouchers: data.redeemedVouchers,
    };

    return (
        <div>
            <Cards {...modifiedData} />
        </div>
    );
};

export default MainCards;
