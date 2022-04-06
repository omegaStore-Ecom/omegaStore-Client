export interface CurrentUser {
  email: string;
  token: string;
  role: string;
  password?: string;
  type?:"",
  generatedIncome?:"",
  productLimit?:""
}

export interface AdminLogin {
  email: string;
  password: string;
}
export interface LineItemType {
  _id?: string;
  id?: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: any;
  productCategory: string;
  productQuantity: number;
  productSeller?: string;
  productStatus?: string;
  productBrand: string;
}
export type ProductResponse = LineItemType[];

export interface DeliveryMan {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
}
export type DeliveryManResponse = DeliveryMan[];

export interface Seller {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  status: string;
  file: string;
  type: string;
  generatedIncome: number;
  productLimit: number;

}

export type SellerResponse = Seller[];

export interface Customer {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}



export interface ModalProps {
  isOpen?: boolean;
  setIsOpen: (arg: boolean) => void;
  component?: any;
  id?: string;
  title?: string;
}

export interface UpdateProps {
  id?: any;
  setIsOpen: (arg: boolean) => void;
}
