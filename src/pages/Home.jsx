import { useState } from 'react'
import {
    HomeIcon, ClockIcon, UserCircleIcon, CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Contact from './Contact'
export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const features = [
        {
            name: 'Franchise Store',
            description:
                'Own and operate a proven business model with a recognized brand, supported by training and resources.',
            icon: HomeIcon,  // Replace with appropriate icon (e.g., StorefrontIcon)
        },
        {
            name: 'Work from Home',
            description:
                'Enjoy the flexibility of working from home while managing your tasks efficiently without the commute.',
            icon: HomeIcon,  // Replace with appropriate icon (e.g., HomeIcon)
        },
        {
            name: 'No Time Bounding',
            description:
                'Work on your own schedule without being bound to traditional office hours, offering you full flexibility.',
            icon: ClockIcon,  // Replace with appropriate icon (e.g., ClockIcon)
        },
        {
            name: 'Own Boss',
            description:
                'Take control of your career and make decisions that directly impact your success and growth.',
            icon: UserCircleIcon,  // Replace with appropriate icon (e.g., UserCircleIcon)
        },
        {
            name: 'Earn Good Money',
            description:
                'Unlock high earning potential based on your efforts and grow your income with dedication and hard work.',
            icon: CurrencyDollarIcon,  // Replace with appropriate icon (e.g., CurrencyDollarIcon)
        },
    ];


    return (
        <div className="bg-white">


            <div className="relative isolate pt-6 pt-14 lg:pt-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Establish a multi-service business in the comfort of your home with
                            <br />
                            <span className='text-indigo-600 text-5xl'>
                                SOBIT
                            </span>
                        </h1>
                        <p className="mt-8 text-pretty text-md font-medium text-gray-500 sm:text-xl/8">
                            We are solving INDIA'S biggest problem
                            <br />
                            Unemployement
                            <br />
                            Through our multiple services store frenchise network
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                            <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-indigo-600">Grow fast</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            Everything you need to start your business at home
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            We have solution
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-gray-900">
                                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon aria-hidden="true" className="size-6 text-white" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>


            <div>
                <Contact />
            </div>
        </div>
    )
}
