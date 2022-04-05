export interface CurrentUser {
  email: string;
  token: string;
  role: string;
  password?: string;
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
  productImage: [];
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

