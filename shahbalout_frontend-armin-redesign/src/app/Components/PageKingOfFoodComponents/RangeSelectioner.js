import React, { useState, useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, useDisclosure } from "@nextui-org/react";
import PriceSlicer from "../Global/PriceSlicer";

/* Props: { item: MenuItem } */

function RangeSelectioner({ selection, indexId, setItemValue, setItemTitle, max, titleItems }) {
  const [darkMode, setDarkMode, persianLan, setPersianLan, modalMission, setModalMission, cartItems, setCartItems] =
    useContext(ThemeContextExp);
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("انتخاب");
  const [price, setPrice] = useState(0);

  const onValueChangeHandle = (event) => {
    setValue(event.target.value);
    setItemValue(event.target.value, indexId, price);
  };
  const filteredProducts = Array.isArray(titleItems?.products)
    ? titleItems.products
        .filter(
          (item) =>
            item.englishName !== "sample" &&
            item.category === "winning" &&
            item.package?.[0]?.priceIrr > 0 &&
            item.package?.[0]?.countInStock !== 0
        )
        .slice(0, 5)
    : [];

  const selectedTitles = selection.map((item) => item.title.trim()).filter((title) => title !== "");


  let filteredSelectedProducts 
  if (titleItems != null) {
     filteredSelectedProducts = titleItems?.products.filter(
      (product) => !selectedTitles.includes(product.persianName) 
    );
  }

  const SelectCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((old) => !old);

    // Prepare menu items based on your original filtering logic, grouped and transformed to an array for rendering
    // Instead of Link, we will use buttons or divs because your items are interactive with onPress handlers, not links

    // Group A items (index 0 to 4)
    const groupAItems = filteredSelectedProducts
      .filter(
        (item) =>
          item.englishName !== "sample" &&
          item.category === "winning" &&
          item.package?.[0]?.priceIrr > 0 &&
          item.package?.[0]?.countInStock !== 0
      )
      .slice(0, 5);

    // Group B items (index 5 to 10)
    const groupBItems = filteredSelectedProducts
      .filter(
        (item) =>
          item.englishName !== "sample" &&
          item.category === "winning" &&
          item.package?.[0]?.priceIrr > 0 &&
          item.package?.[0]?.countInStock !== 0
      )
      .slice(5, 11);

    return (
      <div className="w-1/3 relative">
        <button
          className="font-modamBo  bg-lightBg variant-faded px-4 py-2 border rounded hover:bg-gray-200"
          onClick={toggle}
        >
          {title}
        </button>

        <div
          className={`absolute top-12 md:right-0 md:left-auto z-30 w-[300px] overflow-auto flex flex-col py-4 bg-lightBg rounded-md  border-1  shadow-lg transition-transform duration-200 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {/* Group A label */}
          <div className="text-xl font-modamBo p-4 cursor-text bg-transparent text-right text-gray-700">
            <span className="text-2xl font-modamEL">ربوستا</span>
          </div>

          {/* Group A items */}
          {groupAItems.map((item, index) => (
            <button
              key={"a-" + index}
              className="text-sm  font-modamBo p-4 text-right hover:bg-gray-100"
              onClick={() => {
                setPrice(Number(item.package[0].priceIrr));
                setValue(0);
                setItemValue(0, indexId, Number(item.package[0].priceIrr));
                setItemTitle(item.persianName, indexId);
                setTitle(item.persianName);
                toggle();
              }}
            >
              {item.persianName} <span className="text-xs mx-1 font-modamEL">-</span>{" "}
              <span className="text-xs mx-1">
                {PriceSlicer(Number(item.package[0].priceIrr))}{" "}
                <span className="text-xs font-modamEL">تومان هر ۲۵۰ گرم</span>
              </span>
            </button>
          ))}

          {/* Group B label */}
          <div className="text-xl font-modamBo p-4 cursor-text bg-transparent text-right text-gray-700 mt-4">
            <span className="text-2xl font-modamEL">عربیکا</span>
          </div>

          {/* Group B items */}
          {groupBItems.map((item, index) => (
            <button
              key={"b-" + index}
              className=" text-sm  font-modamBo p-4 text-right hover:bg-gray-100"
              onClick={() => {
                setPrice(Number(item.package[0].priceIrr));
                setValue(0);
                setItemValue(0, indexId, Number(item.package[0].priceIrr));
                setItemTitle(item.persianName, indexId);
                setTitle(item.persianName);
                toggle();
              }}
            >
              {item.persianName} <span className="text-xs mx-1 font-modamEL">-</span>{" "}
              <span className="text-xs mx-1">
                {PriceSlicer(Number(item.package[0].priceIrr))}{" "}
                <span className="text-xs font-modamEL">تومان هر ۲۵۰ گرم</span>
              </span>
            </button>
          ))}

          {/* Clear button */}
          <button
            className="text-xl font-modamBo p-4 text-right text-red-600 hover:bg-red-100"
            onClick={() => {
              setValue(0);
              setItemValue(0, indexId, 0);
              setItemTitle("انتخاب", indexId);
              setTitle("انتخاب");
              toggle();
            }}
          >
            پاک کردن
          </button>
        </div>

        {/* Overlay */}
        {isOpen && <div className="fixed inset-0 z-20 bg-black/40" onClick={toggle} />}
      </div>
    );
  };

  // const SelectCard = () => {
  //   return (
  //     <div className="w-1/3 ">
  //       <Dropdown shouldBlockScroll={false} closeOnSelect={false} disableOutsidePress={true}>
  //         <DropdownTrigger>
  //           <Button variant="faded" className="font-modamBo">
  //             {title}
  //           </Button>
  //         </DropdownTrigger>
  //         <DropdownMenu aria-label="Static Actions" className="p-4 text-right">
  //           {/* Group A: index 0 to 4 */}

  //           <DropdownItem
  //             disabled={true}
  //             className="text-xl font-modamBo p-4  cursor-text bg-transparent hover:bg-transparent hover:text-inherit"
  //           >
  //             <span className="text-xs mx-1">
  //               <span className="text-2xl mx-1 font-modamEL">ربوستا</span>{" "}
  //             </span>
  //           </DropdownItem>

  //           {titleItems.products
  //             .filter(
  //               (item) =>
  //                 item.englishName !== "sample" &&
  //                 item.category === "winning" &&
  //                 item.package?.[0]?.priceIrr > 0 &&
  //                 item.package?.[0]?.countInStock !== 0
  //             )
  //             .slice(0, 5)
  //             .map(
  //               (item, index) =>
  //                 item.englishName !== "sample" &&
  //                 item.category === "winning" &&
  //                 item.package[0].priceIrr > 0 &&
  //                 item.package[0].countInStock !== 0 && (
  //                   <DropdownItem
  //                     key={"a-" + index}
  //                     className="text-xl font-modamBo p-4"
  //                     onPress={() => {
  //                       setPrice(Number(item.package[0].priceIrr));
  //                       setValue(0);
  //                       setItemValue(0, indexId, Number(item.package[0].priceIrr));
  //                       setItemTitle(item.persianName, indexId);
  //                       setTitle(item.persianName);
  //                     }}
  //                   >
  //                     {item.persianName} <span className="text-xs mx-1 font-modamEL">-</span>{" "}
  //                     <span className="text-xs mx-1">
  //                       {PriceSlicer(Number(item.package[0].priceIrr))}{" "}
  //                       <span className="text-xs mx-1 font-modamEL"> تومان هر ۲۵۰ گرم</span>{" "}
  //                     </span>
  //                   </DropdownItem>
  //                 )
  //             )}

  //           <DropdownItem
  //             disabled={true}
  //             className="text-xl font-modamBo p-4  cursor-text bg-transparent hover:bg-transparent hover:text-inherit"
  //           >
  //             <span className="text-xs mx-1">
  //               <span className="text-2xl mx-1 font-modamEL">عربیکا</span>{" "}
  //             </span>
  //           </DropdownItem>

  //           {/* Group B: index 5 to 10 */}
  //           {titleItems.products
  //             .filter(
  //               (item) =>
  //                 item.englishName !== "sample" &&
  //                 item.category === "winning" &&
  //                 item.package?.[0]?.priceIrr > 0 &&
  //                 item.package?.[0]?.countInStock !== 0
  //             )
  //             .slice(5, 11)
  //             .map(
  //               (item, index) =>
  //                 item.englishName !== "sample" &&
  //                 item.category === "winning" &&
  //                 item.package[0].priceIrr > 0 &&
  //                 item.package[0].countInStock !== 0 && (
  //                   <DropdownItem
  //                     key={"b-" + index}
  //                     className="text-xl font-modamBo p-4"
  //                     onPress={() => {
  //                       setPrice(Number(item.package[0].priceIrr));
  //                       setValue(0);
  //                       setItemValue(0, indexId, Number(item.package[0].priceIrr));
  //                       setItemTitle(item.persianName, indexId);
  //                       setTitle(item.persianName);
  //                     }}
  //                   >
  //                     {item.persianName} <span className="text-xs mx-1 font-modamEL">-</span>{" "}
  //                     <span className="text-xs mx-1">
  //                       {PriceSlicer(Number(item.package[0].priceIrr))}{" "}
  //                       <span className="text-xs mx-1 font-modamEL"> تومان هر ۲۵۰ گرم</span>{" "}
  //                     </span>
  //                   </DropdownItem>
  //                 )
  //             )}

  //           <DropdownItem
  //             className="text-xl font-modamBo p-4"
  //             color="danger"
  //             onPress={() => {
  //               setValue(0);
  //               setItemValue(0, indexId, 0);
  //               setItemTitle("انتخاب", indexId);
  //               setTitle("انتخاب");
  //             }}
  //           >
  //             پاک کردن
  //           </DropdownItem>
  //         </DropdownMenu>
  //       </Dropdown>
  //     </div>
  //   );
  // };

  // function Dropdown(props) {
  //     const { item } = props;
  //     const [isOpen, setIsOpen] = useState<boolean>(false);
  //     const menuItems = item?.children ? item.children : [];

  //     const toggle = () => {
  //         setIsOpen(old => !old);
  //     }

  //     const transClass = isOpen
  //         ?
  //         "flex"
  //         :
  //         "hidden";

  //     return (
  //         <>
  //             <div className="relative">
  //                 <button
  //                     className="hover:text-blue-400"
  //                     onClick={toggle}
  //                 >{item.title}</button>
  //                 <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
  //                     {
  //                         menuItems.map(item =>
  //                             <Link
  //                                 key={item.route}
  //                                 className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
  //                                 href={item?.route || ''}
  //                                 onClick={toggle}
  //                             >{item.title}</Link>
  //                         )
  //                     }
  //                 </div>
  //             </div>
  //             {
  //                 isOpen
  //                     ?
  //                     <div
  //                         className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
  //                         onClick={toggle}
  //                     ></div>
  //                     :
  //                     <></>
  //             }
  //         </>
  //     )
  // }

  return (
    <div
      className={
        darkMode
          ? "w-full bg-darkBgTwo flex flex-col  rounded-xl p-4 md:p-10 pb-8  my-10"
          : "w-full bg-lightBgThree border-3 border-darkBgTwo rounded-xl flex flex-col p-4 md:p-10 pb-8  my-10"
      }
    >
      <div className="w-full flex flex-row justify-between items-center mb-16">
        <SelectCard />

        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-1">
            <span
              className={`${darkMode ? "text-darkTxtOne text-xl font-modamBl" : "text-[#04A777] text-xl font-modamBl"}`}
            >
              {value}
            </span>

            <span className="text-[#04A777] text-2xl">%</span>
          </div>
          <h1 className={"text-[rgba(200,200,200,0.2)] text-4xl font-modamEl mr-1"}>|</h1>
          <div className="flex flex-row items-end gap-1">
            <span
              className={`${darkMode ? "text-darkTxtOne text-xl font-modamBl" : "text-[#ad1037] text-xl font-modamBl"}`}
            >
              {(value * 250) / 100}
            </span>

            <span className="text-[#c9385c] text-lg mx-1">گرم</span>
          </div>
        </div>
      </div>

      <input
        disabled={title == "انتخاب" ? true : false}
        id="steps-range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={onValueChangeHandle}
        step={5}
        className="w-full h-4  rounded appearance-none cursor-pointer range-xl  
[&::-webkit-slider-thumb]:h-12
[&::-webkit-slider-thumb]:w-5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:shadow-[0px_0px_0_6px_#ad1037]
[&::-webkit-slider-thumb]:bg-lightBg
[&::-webkit-slider-thumb]:rounded
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
"
      />
    </div>
  );
}

export default RangeSelectioner;
