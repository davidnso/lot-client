
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

  export interface IOutlet{
    name: string,
    bannerImg: string,
    addresses: Address[],
    owner: string,
    dateCreated: string,
    tier: string,
}