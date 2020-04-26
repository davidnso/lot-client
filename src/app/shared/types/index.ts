export interface Address {
  streetAddress: string;
  streetAddress2: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

export interface IUser {
  name: string;
  profileImgUrl: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  addresses: Address[];
}

export interface IOutlet {
  _id: string
  name: string;
  bannerImg: string;
  addresses: Address[];
  owner: string;
  dateCreated: string;
  tier: string;
}

export interface IndexItem {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  brand: string;
  color?: string;
  category: string;
}

export interface ICart {
  username: string;
  items: ICartItem[];
}

export type ICartItem = {
  itemId: string;
  name: string,
  image: string,
  size: string,
  link: string;
  quantity: string;
  price: string;
  color: string;
};
