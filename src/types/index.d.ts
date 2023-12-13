import { BADGE_CRITERIA } from '@/constants';

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

export interface PaginationProps {
  pageName: string;
  pageValue: string;
  disableCondition: boolean;
}

export interface TableHeadProps {
  head: {
    name_title: string;
    mail_description: string;
    adress_price: string;
    phone_stock: string;
  };
}
