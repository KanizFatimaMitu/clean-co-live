import React from 'react';
import bucketgirl from "../../assets/images/bucketgirl.png"

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p className='text-xl font-bold'>Best quality</p>
                        <h1 class="text-5xl font-bold">Cleaning Service!</h1>
                        <p class="py-6 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus provident unde quasi tenetur quam sunt laudantium aut modi quas quo quis sit nihil saepe praesentium, dignissimos esse deleniti. Reprehenderit.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div class="h-[60vh]">
                        <img src={bucketgirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mx-auto mt-[-50px] bg-base-100 relative z-20 shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl font-bold mb-5'>Get Free estimate</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
            </div>
        </>
    );
};

export default Landing;