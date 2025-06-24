
// import legal from '../assets/images/legal.jpg';
// export default function Industries() {
//     return (
//         <>
//             <h2 className="text-3xl font-bold">Industries We Serve</h2>
//             <p className="text-gray-700 mt-2">
//                 Our expertise spans across various industries, providing tailored solutions to meet your needs.
//             </p>

//             <div className=' items-center text-center border-2 border-green-500 bg-gray-700 rounded-xl p-4 mt-4 w-52 h-48'>
/* <img
    alt=""
    src={legal} className="h-56 w-[400px] rounded-xl object-cover shadow-xl "
/>
<p className="mt-2 ">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
    dignissimos. Molestias explicabo corporis voluptatem?
// </p> */

//             </div>

//         </>
//     )
// }

import healthcare from '../assets/images/hospital final.webp';
import manufacturing from '../assets/images/manufacturing.webp';
import finance from '../assets/images/finance.jpg';
import legal from '../assets/images/legal.jpg'
import technologies from '../assets/images/technology.webp'



import React from 'react';

const industries = [
    {
        title: "Healthcare",
        description: "Ensuring clear communication in the healthcare sector.",
        image: healthcare,
    },
    {
        title: "Manufacturing",
        description: "Facilitating global operations in manufacturing.",
        image: manufacturing,
    },
    {
        title: "Finance",
        description: "Accurate financial translations for international markets.",
        image: finance,
    },
    {
        title: "Legal",
        description: "Expert legal translations for compliance and clarity.",
        image: legal,
    },
    {
        title: "Technology",
        description: "Localizing technology products for global users.",
        image: technologies,
    },
];

const Industries: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 text-center" id='industries'>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
                {industries.map((industry, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                        <img
                            src={industry.image}
                            alt={industry.title}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{industry.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Industries;

