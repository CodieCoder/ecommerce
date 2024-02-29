import { ICreateCard } from "./card";

export interface ICreateBusinessBranch {
  name: string;
  description: string;
  location: {
    name: string;
    description: string;
    telephone: { country: string; number: number }[];
    email: string;
    address: string;
    country: string;
    state: string;
    city: string;
  };
  card: ICreateCard;
}
