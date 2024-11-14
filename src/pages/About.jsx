export default function About() {
    return (
        <div className="bg-gray-50 py-16 px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
                <p className="text-gray-600 text-lg text-center my-4">
                    Welcome to Sobit Service Centre Pvt. Ltd., a company driven by the vision of empowering rural communities with accessible, high-quality services. We believe that everyone deserves access to essential services that can improve their quality of life, irrespective of where they live. Through our unique franchise model, we aim to bridge the gap between urban conveniences and rural realities, bringing a diverse range of offerings directly to villages across the country.
                </p>

                <p className="text-gray-600 text-lg text-center my-4">
                    From telecommunications and financial services to e-commerce, healthcare, and education, our offerings span multiple sectors that are critical to the socio-economic advancement of rural areas. Each service center is designed to be a hub of activity, providing villagers with easy access to resources and opportunities that were once out of reach. Whether it's enabling digital literacy, facilitating online shopping, or supporting small-scale agriculture, our services are crafted to meet the real needs of rural India.
                </p>
                <p className="text-gray-600 text-lg text-center my-4">
                    At Sobit Service Centre Pvt. Ltd., we are more than a service provider—we are a catalyst for change. We work hand-in-hand with local communities to understand their challenges and deliver solutions that make a lasting impact. Our approach is rooted in collaboration, innovation, and a deep commitment to uplifting rural lives, one village at a time.
                </p>
            </div>
            <div className='m-8'>
                <h1 className='text-center text-3xl font-bold p-4'>Meet Our Team</h1>
                <div>
                    <ul role="list" className="flex justify-evenly">
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img alt="" src='https://res.cloudinary.com/dy3dmgckm/image/upload/v1731574359/wblodkklotpzjwdukfsu.jpg' className="size-16 rounded-full" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Sobit Dhillon</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img alt="" src='https://res.cloudinary.com/dy3dmgckm/image/upload/v1731572964/uxrfdg4735mfmgfmbcct.jpg' className="size-16 rounded-full" />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Vipin Dagar</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Full-stack Developer</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg text-center my-4">
                    Our mission is to enhance the lives of rural citizens by providing them with reliable services that foster economic growth, convenience, and connectivity. By partnering with local entrepreneurs as franchisees, we create opportunities for employment and community development, ensuring that our services are delivered by people who understand the unique needs and aspirations of the communities they serve.
                </p>
            </div>

            {/* Vision Section */}
            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg">
                    To be the leading service provider known for exceptional quality, innovation, and a people-first approach. We envision a future where essential services are available to everyone, contributing to a more connected, informed, and prosperous community.
                </p>
            </div>

            {/* Core Values Section */}
            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                <ul className="text-gray-600 text-lg list-disc list-inside space-y-4">
                    <li>
                        <span className="font-semibold">Empowerment:</span> We believe in empowering rural communities by providing them with access to services that open doors to new opportunities and pathways for development.


                    </li>
                    <li>
                        <span className="font-semibold">Integrity:</span> Transparency, honesty, and respect are the foundations of our work. We are committed to conducting business in a way that builds trust with our customers, franchise partners, and communities.
                    </li>
                    <li>
                        <span className="font-semibold">Innovation:</span>We continuously explore new ways to improve and expand our offerings to meet the evolving needs of our rural customers, leveraging technology to make services more accessible and efficient.
                    </li>
                    <li>
                        <span className="font-semibold">Community:</span> At Sobit Service Centre Pvt. Ltd., we put people first. We work closely with each community, tailoring our services to address their specific needs and creating local partnerships to deliver meaningful impact.
                    </li>
                    <li>
                        <span className="font-semibold">Reliability:</span>  Our customers depend on us for consistent and quality service. We are dedicated to maintaining high standards across all our service centers, ensuring that every interaction is marked by reliability and care.
                    </li>
                </ul>
            </div>
        </div>
    )
}
