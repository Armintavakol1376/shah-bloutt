'use client';

import React, { useContext, useState } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import axios from 'axios';
import { useRouter } from 'next/navigation'

import InputCustom from '../InputCustom';
import { Button } from '@nextui-org/react';
import { BASEURL } from '@/app/ReduxState/BaseUrl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
    useUpdateProductMutation,
    useUploadProductImgMutation,
    useDeleteProductMutation
} from '@/app/ReduxState/Slices/productApiSlice';

const ProductEdit = ({ onCloseFrom, Product }) => {
    const [
        darkMode,
        setDarkMode,
        persianLan,
        setPersianLan,
        modalMission,
        setModalMission,
        cartItems,
        setCartItems,
    ] = useContext(ThemeContextExp);

    const router = useRouter()
    const [addPackage, setAddPackage] = useState({
        item: null,
        countInStock: null,
        priceIrr: null,
        priceAed: null,
        priceDollar: null,
        discountIrr: null,
        discountAed: null,
        discountDollar: null,
    });

    const [productObj, setProductObj] = useState({
        image: Product.image || [],
        persianName: Product.persianName,
        englishName: Product.englishName,
        package: Product.package,
        brand: Product.brand,
        category: Product.category,
        persianDescription: Product.persianDescription,
        englishDescription: Product.englishDescription,
        productModel: Product.productModel,
    });

    const [errEdit, setErrEdit] = useState(null);

    const [uploadProductImg] = useUploadProductImgMutation();

    const [updateProduct, { error, isLoading }] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const dispatch = useDispatch();

    const handleFinalReq = async () => {
        try {
            //console.log('isLoading1: ', isLoading);
             await updateProduct({
                productObj: productObj,
                productId: Product._id,
            }).unwrap();
            router.push('/Store')
         onCloseFrom();
         
        } catch (err) {
            toast.error(err.data.message);
            setErrEdit(err.data.message);
        }
    };

    const handleDelete= async () => {
        try {
            //console.log('isLoading1: ', isLoading);
             await deleteProduct({
                productId: Product._id,
            }).unwrap();
            router.push('/Store')
         onCloseFrom();
         
        } catch (err) {
            toast.error(err.data.message);
            setErrEdit(err.data.message);
        }
    };

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileLimit, setFileLimit] = useState(false);

    const MAX_COUNT = 5;

    const handleUploadFiles = (files) => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        });
        if (!limitExceeded) setUploadedFiles(uploaded);
    };

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        console.log('chosenFiles: ', chosenFiles);
        handleUploadFiles(chosenFiles);
    };

    const bulkImgUpload = async () => {
        const formdata = new FormData();
        //console.log('formdata: ', formdata);
        //console.log('uploadedFiles', uploadedFiles);

        for (let i = 0; i < uploadedFiles.length; i++) {
            formdata.append('images', uploadedFiles[i]);
        }

        try {
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };
            const { data } = await axios.post(`${BASEURL}/ImgUpload/ProductImgs`, formdata, config);

            {
                data &&
                    data.map((item, index) => {
                        //setImage((image) => [...image, item.filename]);
                        setProductObj({
                            ...productObj,
                            image: [...productObj.image, item.filename],
                        });
                        console.log('item:', index, item.filename);
                    });
            }

            //console.log('data:');
            //console.log(data);
            //console.log('image');
            //console.log(productObj.image);
        } catch (error) {
            //console.log(error);
        }
    };

    return (
        <div className="w-full  flex flex-col  items-center ">
            {/* <input
                type="file"
                name="upload_file"
                multiple
                accept="image/*"
                onChange={handleFileEvent}
                className="w-full block mb-2 text-xs rounded-xl border font-YBBold"
            />

            <Button onPress={bulkImgUpload}>Upload Images</Button> */}
            <InputCustom
                Type={'name'}
                Id={'persianName'}
                PlaceHolder={productObj.persianName}
                Value={productObj.persianName}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, persianName: e.target.value });
                }}
                Title={'Persian Name:'}
            />
            <InputCustom
                Type={'name'}
                Id={'englishName'}
                PlaceHolder={productObj.englishName}
                Value={productObj.englishName}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, englishName: e.target.value });
                }}
                Title={'English Name:'}
            />

            <div>
                <p
                    className={
                        darkMode ? 'font-modamBo text-darkTxtTwo' : 'font-modamBo text-lightTxtTwo'
                    }
                >
                    Packages:
                </p>
                <Button color="success">Add Package:</Button>

                <div className="border rounded-md border-dashed border-[rgba(139,252,139,0.5)] bg-[rgba(82,82,82,0.2)] p-2 my-4">
                    <InputCustom
                        Type={'name'}
                        Id={'addPackageItem'}
                        PlaceHolder={addPackage.item}
                        Value={addPackage.item}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, item: e.target.value });
                        }}
                        Title={'Item:'}
                    />

                    <InputCustom
                        Type={'number'}
                        Id={'addcountInStock'}
                        PlaceHolder={addPackage.countInStock}
                        Value={addPackage.countInStock}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, countInStock: e.target.value });
                        }}
                        Title={'Count InStock:'}
                    />
                    <InputCustom
                        Type={'number'}
                        Id={'addPackagepriceIrr'}
                        PlaceHolder={addPackage.priceIrr}
                        Value={addPackage.priceIrr}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, priceIrr: e.target.value });
                        }}
                        Title={'Price IRR:'}
                    />
                    {/* <InputCustom
                        Type={'number'}
                        Id={'addPackagepriceAed'}
                        PlaceHolder={addPackage.priceAed}
                        Value={addPackage.priceAed}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, priceAed: e.target.value });
                        }}
                        Title={'Price AED:'}
                    /> */}
                    {/* <InputCustom
                        Type={'number'}
                        Id={'addPackagepriceDollar'}
                        PlaceHolder={addPackage.priceDollar}
                        Value={addPackage.priceDollar}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, priceDollar: e.target.value });
                        }}
                        Title={'Price Dollar:'}
                    /> */}
                    <InputCustom
                        Type={'number'}
                        Id={'addPackageDiscountIrr'}
                        PlaceHolder={addPackage.discountIrr}
                        Value={addPackage.discountIrr}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, discountIrr: e.target.value });
                        }}
                        Title={'Discount IRR:'}
                    />
                    {/* <InputCustom
                        Type={'number'}
                        Id={'addPackageDiscountAed'}
                        PlaceHolder={addPackage.discountAed}
                        Value={addPackage.discountAed}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, discountAed: e.target.value });
                        }}
                        Title={'Discount AED:'}
                    /> */}
                    {/* <InputCustom
                        Type={'number'}
                        Id={'addPackageDiscountDollar'}
                        PlaceHolder={addPackage.discountDollar}
                        Value={addPackage.discountDollar}
                        onChangeFrom={(e) => {
                            return setAddPackage({ ...addPackage, discountDollar: e.target.value });
                        }}
                        Title={'Discount $:'}
                    /> */}
                    <Button
                        color="success"
                        variant="flat"
                        onPress={() =>
                            setProductObj({
                                ...productObj,
                                package: [...productObj.package, addPackage],
                            })
                        }
                        className="w-full"
                    >
                        Add Package
                    </Button>
                </div>
                {productObj.package &&
                    productObj.package.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-md border-dashed border-[rgba(200,200,200,0.5)] bg-[rgba(82,82,82,0.2)] p-2 my-4"
                        >
                            <Button
                                color="danger"
                                onPress={() =>
                                    setProductObj({
                                        ...productObj,
                                        package: productObj.package.filter(
                                            (a) => a.item !== item.item,
                                        ),
                                    })
                                }
                            >
                                Delete
                            </Button>

                            <InputCustom
                                Type={'name'}
                                Id={'Item'}
                                PlaceHolder={item.item}
                                Value={item.item}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, item: e.target.value }],
                                    });
                                }}
                                Title={'Item:'}
                            />

                            <InputCustom
                                Type={'number'}
                                Id={'countInStock'}
                                PlaceHolder={item.countInStock}
                                Value={item.countInStock}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, countInStock: e.target.value }],
                                    });
                                }}
                                Title={'Count in Stock:'}
                            />

                            <InputCustom
                                Type={'number'}
                                Id={'priceIrr'}
                                PlaceHolder={item.priceIrr}
                                Value={item.priceIrr}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, priceIrr: e.target.value }],
                                    });
                                }}
                                Title={'Price IRR:'}
                            />

                            {/* <InputCustom
                                Type={'number'}
                                Id={'priceAed'}
                                PlaceHolder={item.priceAed}
                                Value={item.priceAed}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, priceAed: e.target.value }],
                                    });
                                }}
                                Title={'Price AED:'}
                            /> */}

                            {/* <InputCustom
                                Type={'number'}
                                Id={'priceDollar'}
                                PlaceHolder={item.priceDollar}
                                Value={item.priceDollar}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, priceDollar: e.target.value }],
                                    });
                                }}
                                Title={'Price $:'}
                            /> */}
                            <InputCustom
                                Type={'number'}
                                Id={'discountIrr'}
                                PlaceHolder={item.discountIrr}
                                Value={item.discountIrr}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, discountIrr: e.target.value }],
                                    });
                                }}
                                Title={'Discount on Irr:'}
                            />

                            {/* <InputCustom
                                Type={'number'}
                                Id={'discountAed'}
                                PlaceHolder={item.discountAed}
                                Value={item.discountAed}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, discountAed: e.target.value }],
                                    });
                                }}
                                Title={'Discount on AED:'}
                            /> */}
                            {/* <InputCustom
                                Type={'number'}
                                Id={'discountDollar'}
                                PlaceHolder={item.discountDollar}
                                Value={item.discountDollar}
                                onChangeFrom={(e) => {
                                    return setProductObj({
                                        ...productObj,
                                        package: [{ ...item, discountDollar: e.target.value }],
                                    });
                                }}
                                Title={'Discount on $:'}
                            /> */}
                        </div>
                    ))}
            </div>

            {/* <InputCustom
                Type={'name'}
                Id={'brand'}
                PlaceHolder={productObj.brand}
                Value={productObj.brand}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, brand: e.target.value });
                }}
                Title={'Brand:'}
            /> */}
            <InputCustom
                Type={'name'}
                Id={'category'}
                PlaceHolder={productObj.category}
                Value={productObj.category}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, category: e.target.value });
                }}
                Title={'Category:'}
            />
            <InputCustom
                TxtArea
                Type={'name'}
                Id={'persianDescription'}
                PlaceHolder={productObj.persianDescription}
                Value={productObj.persianDescription}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, persianDescription: e.target.value });
                }}
                Title={'Persian Description:'}
            />

            <InputCustom
                TxtArea
                Type={'name'}
                Id={'englishDescription'}
                PlaceHolder={productObj.englishDescription}
                Value={productObj.englishDescription}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, englishDescription: e.target.value });
                }}
                Title={'Eng Description:'}
            />
            <InputCustom
                Type={'name'}
                Id={'productModel'}
                PlaceHolder={productObj.productModel}
                Value={productObj.productModel}
                onChangeFrom={(e) => {
                    return setProductObj({ ...productObj, productModel: e.target.value });
                }}
                Title={'Product Model:'}
            />

            <Button color="danger" variant="flat" onPress={onCloseFrom} className="w-full my-2">
                Close
            </Button>

            



            <Button color="danger" onPress={handleDelete} className="w-full my-16">
                Delete Product
            </Button>

            {errEdit && <p className="w-full p-2 font-modamR text-[#e41717]">{errEdit}</p>}

            <Button color="success" onPress={handleFinalReq} className="w-full mt-12 mb-16">
                Submit
            </Button>
        </div>
    );
};

export default ProductEdit;
