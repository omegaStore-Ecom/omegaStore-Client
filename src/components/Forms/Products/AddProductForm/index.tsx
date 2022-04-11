import {Field, Form, Formik} from "formik";
import {LineItemType, ModalProps} from "interfaces";
import {storage} from "lib/firebase";
//@ts-ignore
import {FilePond, File, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {useState} from "react";
import {useAddProductMutation, useGetProductQuery} from "redux/services/products";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const AddProductsForm: React.FC<ModalProps> = ({setIsOpen, refetch}) => {
    const [addProduct] = useAddProductMutation();
    const [files, setFiles] = useState<File[]>([]);
    const [progress, setProgress] = useState<number>(0);
    const {refetch: prefetch} = useGetProductQuery()
    return (
        <Formik
            initialValues={{
                productName: "",
                productDescription: "",
                productQuantity: 0,
                productPrice: 0,
                productCategory: "no collection",
                productBrand: "nft",
                productCollection: "",
                productImage: ""
            }}
            onSubmit={async (values) => {
                const storageRef = ref(storage, `/file/${files[0].file.name}`)
                const uploadTask = uploadBytesResumable(storageRef, files[0].file)

                uploadTask.on("state_changed", (snapshot) => {
                    const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
                    setProgress(prog)
                }, (err) => console.log(err), () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        values.productImage = url

                        addProduct(values)
                            .unwrap()
                            .then(() => {
                                setIsOpen(false)
                                // @ts-ignore
                                refetch()
                                prefetch()
                            })
                    })
                })

                // console.log(files)
            }}
        >
            {({errors, touched, values, setFieldValue}) => (
                <Form className="space-y-4">
                    {progress}
                    <div>
                        <label className="" htmlFor="firstName">
                            ProductName
                        </label>
                        <Field
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Product Name"
                            name="productName"
                            type="text"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="" htmlFor="phone">
                                Price
                            </label>
                            <Field
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Product Price"
                                name="productPrice"
                                type="number"
                            />
                        </div>
                        {/*<div>*/}
                        {/*    <label className="" htmlFor="phone">*/}
                        {/*        Quantity*/}
                        {/*    </label>*/}
                        {/*    <Field*/}
                        {/*        className="w-full rounded-lg border-gray-200 p-3 text-sm"*/}
                        {/*        placeholder="Product Quantity"*/}
                        {/*        name="productQuantity"*/}
                        {/*        type="number"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <label className="" htmlFor="Category">*/}
                        {/*        Category*/}
                        {/*    </label>*/}
                        {/*    <Field*/}
                        {/*        as="select"*/}
                        {/*        className="w-full rounded-lg border-gray-200 p-3 text-sm"*/}
                        {/*        placeholder="Select Category"*/}
                        {/*        name="productCategory"*/}
                        {/*    />*/}
                        {/*/!*</div>*!/*/}
                        {/*<div>*/}
                        {/*    <label className="" htmlFor="Category">*/}
                        {/*        Brand*/}
                        {/*    </label>*/}
                        {/*    <Field*/}
                        {/*        as="select"*/}
                        {/*        className="w-full rounded-lg border-gray-200 p-3 text-sm"*/}
                        {/*        placeholder="Select Brand"*/}
                        {/*        name="productBrand"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    <div>
                        <label className="" htmlFor="Category">
                            Collection
                        </label>
                        <Field
                            as="input"
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Select Collection"
                            name="Collection"
                        />
                    </div>
                    <div>
                        <label className="" htmlFor="firstName">
                            Description
                        </label>
                        <Field
                            as="textarea"
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Add Description"
                            name="productDescription"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="" htmlFor="firstName">
                            Image
                        </label>
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            // allowMultiple={true}
                            // maxFiles={3}
                            name="productImage"
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                    </div>
                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={progress > 0}
                            className={`inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto ${progress > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="font-medium">{progress == 0 ? 'Add Product' : 'Submitting ...' }</span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
export default AddProductsForm;
