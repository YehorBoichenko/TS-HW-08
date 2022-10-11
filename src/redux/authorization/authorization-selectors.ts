import { RootState } from "../store";

// const getIsLoggedIn = (state:{auth:{children: ReactNode,restricted:boolean} => state.auth.isLoggedIn;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getUserName = (state: RootState) => state.auth.user.name;
// const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;