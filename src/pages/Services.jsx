import {
  PhoneIcon,
  BanknotesIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
  TruckIcon,
  CogIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
  LightBulbIcon,
  IdentificationIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline'

export default function Service() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-800">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          We offer a range of services to meet your diverse needs.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Telecom Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <PhoneIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Telecom Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Mobile phone sales, repair, and recharge services to keep you connected.
            </p>
          </div>
          {/* Financial Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <BanknotesIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Financial Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Banking, insurance, and money transfer services for your financial needs.
            </p>
          </div>
          {/* E-commerce Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <ShoppingBagIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">E-commerce Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Online shopping, delivery, and returns for a seamless shopping experience.
            </p>
          </div>
          {/* Digital Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <GlobeAltIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Digital Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Internet access, online bill payments, and digital literacy training.
            </p>
          </div>
          {/* Logistics Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <TruckIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Logistics Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Courier, parcel, and package delivery services.
            </p>
          </div>
          {/* Agricultural Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <CogIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Agricultural Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Farm equipment sales, repair, and maintenance.
            </p>
          </div>
          {/* Healthcare Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <HeartIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Healthcare Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Medical consultations, lab tests, and medicine sales.
            </p>
          </div>
          {/* Education Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <AcademicCapIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Education Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Online courses, tuition, and skill development training.
            </p>
          </div>
          {/* Government Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <IdentificationIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Government Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Assistance with government schemes, applications, and documentation.
            </p>
          </div>
          {/* FMCG Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <BuildingStorefrontIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">FMCG Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Sales and distribution of fast-moving consumer goods.
            </p>
          </div>
          {/* Real Estate Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <HomeIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Real Estate Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Property buying, selling, and rental services to help you find your dream home.
            </p>
          </div>
          {/* Consulting Services */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-500 p-4">
              <LightBulbIcon className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Consulting Services</h3>
            <p className="mt-4 text-base text-gray-600">
              Expert advice and guidance to help businesses and individuals achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
