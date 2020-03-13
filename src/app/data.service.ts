import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService { 
    mockDataSet = {
        customer: { 
            username: 'dnsoes1',
            email: 'davidnsoesie@place.com',
            name: 'David Nsoesie',
            role: 'consumer',
            password: 'password',
            addresses: [
                {
                    streetAddress: '13613 oaklands manor dr.',
                    streetAddress2: '',
                    zipCode: '20708',
                    city: 'laurel',
                    state: 'MD',
                    country: 'USA'
                }
            ]
        },
        owner: {
            username: 'mnsoes1',
            email: 'mikensoes@place.com',
            name: 'Michael Nsoesie',
            role: 'owner',
            password: 'password',
            addresses: [
                {
                    streetAddress: '13613 oaklands manor dr.',
                    streetAddress2: '',
                    zipCode: '20708',
                    city: 'laurel',
                    state: 'MD',
                    country: 'USA'
                }
            ]
        },
        store:{
            name: 'Mike and Ike',
            bannerImg: '',
            addresses: [
                {
                    streetAddress: '12323 street dr.',
                    streetAddress2: '',
                    zipCode: '20708',
                    city: 'laurel',
                    state: 'MD',
                    country: 'USA'
                }
            ],
            owner: 'mnsoes1',
            dateCreated: '193921039021',
            Tier: 'first'
        },
        listing: [
            {
                name: 'Jordan 5 Off White',
                description: '',
                price: '$299.99',
                brand: 'Jordan',
                details: {
                    category: 'shoes',
                    gender: 'men',
                    subCategory: 'basketball',
                    class: '',
                    stock: [
                        {
                            size: '10',
                            quantity: '300',
                            color: 'black',
                        }
                    ],
                    condition: 'great',
                },
                images: [
                    '',
                    ''
                ],
                storeId: '',
                status: 'active',
                tags: '',
                date: ''
            },
            {
                name: 'Air Max 95',
                description: '',
                price: '$299.99',
                brand: 'Jordan',
                details: {
                    category: 'shoes',
                    gender: 'men',
                    subCategory: 'basketball',
                    class: '',
                    stock: [
                        {
                            size: '10',
                            quantity: '300',
                            color: 'black',
                        }
                    ],
                    condition: 'great',
                },
                images: [
                    '',
                    ''
                ],
                storeId: '',
                status: 'active',
                tags: '',
                date: ''
            },
            {
                name: 'Jordan 3 True Blue',
                description: '',
                price: '$299.99',
                brand: 'Jordan',
                details: {
                    category: 'shoes',
                    gender: 'men',
                    subCategory: 'basketball',
                    class: '',
                    stock: [
                        {
                            size: '10',
                            quantity: '300',
                            color: 'black',
                        }
                    ],
                    condition: 'great',
                },
                images: [
                    '',
                    ''
                ],
                storeId: '',
                status: 'active',
                tags: '',
                date: ''
            }
        ]
    }

    constructor(){

    }

    validateCredentials(){

    }
}