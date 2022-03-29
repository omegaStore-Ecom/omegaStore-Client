export interface CurrentUser {
  email: string;
  token: string;
  role: string;
  password?:string
}


export interface AdminLogin {
  email:string
  password: string
}
export  interface  LineItemType {
  product_id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  productCategory: string;
  productQuantity: number;
  productSeller: string;
  productStatus: string;
  productBrand: string;
}