'use client';
export default function PriceSlicer(price) {
    const number = price + '';
    let priceSplited = '';
    for (let i = number.length - 3; i >= -2; i -= 3) {
        priceSplited =
            i >= 1
                ? ',' + number.substring(i, i + 3) + priceSplited
                : number.substring(0, i + 3) + priceSplited;
    }
    return priceSplited;
}

//   function ToRial({ str }) {
//   <ToRial str={data.price} />
//   function ToRial( str ) {
//   {ToRial(data.price)}
