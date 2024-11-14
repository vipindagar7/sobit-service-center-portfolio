import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    return (
        <div className="relative isolate overflow-hidden bg-white pb-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-16 border-t border-gray-200 pt-10">
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h4 className="text-base font-semibold text-gray-800">Subscribe</h4>
                            <p className="mt-2 text-gray-600">
                                Don't miss out! Subscribe for updates.
                            </p>
                            <form action="https://formspree.io/f/xyzyjloa" method='POST'>
                                <div className="mt-4 flex max-w-md gap-x-4">
                                    <label htmlFor="footer-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="footer-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Subscribe
                                    </button>

                                </div>
                            </form>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-gray-800">Contact</h4>
                            <p className="mt-2 text-gray-600">
                                Phone: <a href="tel:9896097279" className="text-indigo-500">9896097279</a>
                            </p>
                            <p className="text-gray-600">
                                Email: <a href="mailto:sobitdhillon04@gmail.com" className="text-indigo-500">sobitdhillon04@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-gray-800">Social Media</h4>
                            <p className="mt-2 text-gray-600">Follow us on social media to stay connected.</p>
                            <div className="mt-2 flex space-x-4">
                                {/* Add links to social media platforms */}
                                <a href="https://facebook.com/sobit.dhillon.509" className="text-indigo-500">Facebook</a>
                                <a href="https://linkedin.com/in/sobit-dhillon-5b2322214" className="text-indigo-500">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div>
                <p className='text-center text-gray-600 mt-4'>
                    © 2024 SOBIT SERVICE CENTER PVT. LTD. All rights reserved.
                </p>
            </div>
        </div >
    )
}
