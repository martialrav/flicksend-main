import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center text-center">
          <h6 className="font-bold text-blue-600 uppercase">Pricing</h6>
          <h2 className="text-4xl font-bold mt-2">
            Choose the right plan for your workflow
          </h2>
          <p className="text-gray-600 max-w-xl mt-2">
            Whether you're just starting or scaling outreach — Flicksend has a plan for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Free Plan */}
          <div className="flex flex-col p-8 bg-white border rounded-lg shadow hover:shadow-lg transition">
            <span className="px-4 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full w-fit">
              Free Plan
            </span>
            <h2 className="text-5xl font-extrabold mt-4">$0</h2>
            <p className="mt-2 text-gray-500">Perfect for testing and early users</p>
            <a
              className="mt-6 px-8 py-3 text-center text-blue-600 bg-blue-50 rounded shadow hover:bg-blue-100 transition"
              href="/auth/login"
            >
              Get Started
            </a>
            <div className="mt-8">
              <h6 className="uppercase text-sm text-gray-500 mb-3">Includes</h6>
              <ul className="space-y-3">
                {[
                  "1 sending inbox",
                  "Basic SPF/DKIM config guide",
                  "Manual campaign sending",
                  "Limited analytics",
                  "Community support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col p-8 bg-white border-2 border-blue-600 rounded-lg shadow-lg hover:shadow-xl transition">
            <span className="px-4 py-1 text-sm text-white uppercase bg-blue-600 rounded-full w-fit">
              Most Popular
            </span>
            <h2 className="text-5xl font-extrabold mt-4">$30</h2>
            <p className="mt-2 text-gray-500">Everything you need to scale cold email</p>
            <p className="mt-1 text-sm text-blue-600 font-semibold">7-day free trial • No card required</p>
            <a
              className="mt-6 px-8 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition"
              href="/auth/login"
            >
              Start Free Trial
            </a>
            <div className="mt-8">
              <h6 className="uppercase text-sm text-gray-500 mb-3">Everything in Free, plus:</h6>
              <ul className="space-y-3">
                {[
                  "10 sending inboxes with rotation",
                  "Automated SPF, DKIM, DMARC setup",
                  "Smart sending & reply tracking",
                  "Custom domain warmup",
                  "Inbox health & blacklist monitoring",
                  "Unlimited contacts & campaigns",
                  "Live campaign analytics",
                  "Webhook/API access",
                  "Priority support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
