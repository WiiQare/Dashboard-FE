import React, { useEffect, useState } from 'react';
import CardsItem from './ molecules /cardItem';



const Cards = ({ data }: any) => {


    return (
        <div className='grid cards grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5 p-[23px]'>
            {data.map((item: any) => (
                <CardsItem
                    key={item.title}
                    title={item.title}
                    shade={item.shade}
                    color={item.color}
                    values={item.values}
                />
            ))}
        </div>
    );
};

export default Cards;
