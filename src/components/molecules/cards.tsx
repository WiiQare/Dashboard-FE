import React from 'react';
import CardsItem from '../atom/cardItem';

const Cards = ({ data }: any) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-[23px] gap-2">
      {data.map((item: any) => (
        <CardsItem
          key={item.title}
          title={item.title}
          shade={item.shade}
          color={item.color}
          values={item.values}
          info={item.info}
          progress={item.progress}
        />
      ))}
    </div>
  );
};

export default Cards;
