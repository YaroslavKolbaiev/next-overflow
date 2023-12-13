import { BADGE_CRITERIA } from '@/constants';
import { ProductCategory } from './enums';

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  password: string;
  createdAt: string;
  phone: string;
  adress: string;
}

export interface Product {
  _id: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  stock: number;
  category: ProductCategory;
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface FetchUserResponse {
  users: User[];
  usersCount: number;
}

export interface FetchProductsResponse {
  products: Product[];
  productCount: number;
}

export interface PaginationProps {
  pageName: string;
  pageValue: string;
  disableCondition: boolean;
}

export interface TableHeadProps {
  head: {
    name_title: 'Name' | 'Title';
    mail_description: 'E-Mail' | 'Description';
    createdAt_price: 'Created At' | 'Price';
    phone_stock: 'Phone' | 'Stock';
    category?: 'Category';
  };
}
