

import bcrypt from'bcryptjs';




const data= {

    users:[{
        name:'Haris',
        email:'haris@gmail.com',
        password: bcrypt.hashSync('1111',8),
        isAdmin:true,
        
        },
        
        {
            name:'Ihtesham',
            email:'ihtesham-user@gmail.com.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
            
            },
        
        ],
        

        profile:[
    {
    _id: '1',
    name: 'Muhammad Ashraf Advocate',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 3,
    review: 4.5,
    ratingnumbers: 9,
    description: 'Top Level Lawyer',
},
{
    _id: '2',
    name: 'Niazi',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 3,
    review: 4.5,
    ratingnumbers: 11,
    description: 'Top Level Lawyer',
},
{
    _id: '3',
    name: 'Khattak',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 1,
    review: 4.5,
    ratingnumbers: 20,
    description: 'Top Level Lawyer',
},
{
    _id: '4',
    name: 'Dogar',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 2,
    review: 4.5,
    ratingnumbers: 10,
    description: 'Top Level Lawyer',
},
{
    _id: '5',
    name: 'Raja',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 1,
    review: 4.5,
    ratingnumbers: 10,
    description: 'Top Level Lawyer',
},
{
    _id: '6',
    name: 'Bajwa',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 1,
    review: 4.5,
    ratingnumbers: 10,
    description: 'Top Level Lawyer',
},
{
    _id: '7',
    name: 'Chaudary',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 2,
    review: 4.5,
    ratingnumbers: 10,
    description: 'Top Level Lawyer',
},
{
    _id: '8',
    name: 'Syed',
    category: 'Dispute Professional',
    image: '/images/lawyer1.jpg',
    fee: 50000,
    casestaken: 3,
    review: 4.5,
    ratingnumbers: 10,
    description: 'Top Level Lawyer',
},
],
}

export default data;
