import { BADGE_CRITERIA } from '@/constants';
import {
  ProductInput,
  UserInput,
  ProductCategory,
  TransactionStatus,
  TableHeadNameTitle,
  TableHeadPriceDate,
  TableHeadStockPhoneAmount,
  TableHeadMailDescStatus,
} from './enums';

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface User {
  id: string;
  userName: string;
  email: string;
  password: string;
  createdAt: string;
  phone: string;
  adress: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  stock: number;
  category: ProductCategory;
}

export interface Transaction {
  id: string;
  name: string;
  status: TransactionStatus;
  amount: number;
  createdAt: string;
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
}

export interface FetchProductsResponse {
  products: Product[];
}

export interface FetchTransactionsResponse {
  transactions: Transaction[];
}

export interface PaginationProps {
  pageName: string;
  pageValue: string;
  disableCondition: boolean;
}

export interface TableHeadProps {
  isTransactions?: boolean;
  head: {
    name_title: TableHeadNameTitle;
    mail_description_status: TableHeadMailDescStatus;
    createdAt_price: TableHeadPriceDate;
    phone_stock_amount: TableHeadStockPhoneAmount;
    category?: 'Category';
  };
}

export interface FormInputProps {
  name: ProductInput | UserInput;
  type: string;
  defaultValue?: string | number;
}

export interface TableButtonsProps {
  href: string;
  id: string;
}

export type UserPageProps = {
  params: {
    userId: string;
  };
};

export type ProductPageProps = {
  params: {
    productId: string;
  };
};

export type FormTextAreaProps = {
  id: string;
} & (
  | {
      name: ProductInput.DESCRIPTION;
      defaultValue: string;
    }
  | {
      name: UserInput.ADRESS;
    }
);

export interface UserStatistic {
  monthId: number;
  month: string;
  users: number;
}

export interface Statistic {
  id: string;
  year: String;
  statistics: UserStatistic[];
}
