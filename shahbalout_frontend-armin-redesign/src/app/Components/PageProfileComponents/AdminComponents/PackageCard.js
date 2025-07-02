import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';

export const PackageCard = ({ Data }) => {
    return (
        <Card className="w-full">
            <CardHeader className="flex gap-3 justify-around">
                <div className="flex flex-col">
                    <span className="font-modamBo !text-xs">Package: </span>
                    <p className="font-modamR text-3xl">{Data.item}</p>
                </div>

                <div className="flex flex-col">
                    <span className="font-modamBo !text-xs">QTY: </span>
                    <p className="font-modamBo text-3xl text-default-500">{Data.countInStock}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                {/* <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Discount Irr:</span>

                    <span className={'mx-1 font-modamBo text-[#ad1037]'}>{Data.discountIrr}%</span>
                </div>

                <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Discount Aed:</span>

                    <span className={'mx-1 font-modamBo text-[#ad1037]'}>{Data.discountAed}%</span>
                </div>

                <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Discount $:</span>

                    <span className={'mx-1 font-modamBo text-[#ad1037]'}>
                        {Data.discountDollar}%
                    </span>
                </div> */}

                <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Price Irr:</span>

                    <span className={'mx-1 font-modamBl text-[#22ad10] drop-shadow-xl'}>
                        {Data.priceIrr}{' '}
                    </span>
                    <span className={'mx-1  text-[#ad1010] !text-xs'}>تومان</span>
                </div>

                {/* <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Price Aed:</span>

                    <span className={'mx-1 font-modamBo text-[#22ad10]'}>{Data.priceAed}</span>
                    <span className={'mx-1  text-[#ad1010] !text-xs'}>AED</span>
                </div>

                <div className="flex flex-row w-full items-center justify-between border-b-1 pb-2 border-b-lightBg px-2">
                    <span className={'text-lightTxtOne text-xs drop-shadow-xl'}>Price $:</span>

                    <span className={'mx-1 font-modamBo text-[#22ad10]'}>{Data.priceDollar}</span>
                    <span className={'mx-1  text-[#ad1010] !text-xs'}>$</span>
                </div> */}
            </CardBody>
        </Card>
    );
};
