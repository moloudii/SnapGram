import { ID } from "appwrite";
import { account } from "./config";
import { INewUser } from "../types";

const test = async () => {
  return await ID.unique;
};
console.log(test());

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
