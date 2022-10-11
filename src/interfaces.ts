export interface IContactObj {
  id?: string;
  name: string;
  number: string;
}

export interface IContacts {
  items: IContactObj[];
  filter: "";
  addLoader?: boolean;
  loader?: boolean;
  error?: any;
}
export interface IDataToPost {
  name?: string;
  email: string;
  password?: string;
}
export interface IInitialState {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoading?: boolean;
  isLoggedIn: boolean;
  error: string | null;
  isFetchingCurrentUser: boolean;
}