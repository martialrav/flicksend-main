const Guides = () => {
  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Guides
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">Supercharge Your Cold Outreach</span>
          </h2>
          <p className="text-center text-gray-600 max-w-xl">
            Learn how to maximize deliverability, automate inboxes, and run smart campaigns — all with Flicksend.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 bg-white">
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
              📬
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-600">
                Deliverability
              </h3>
              <h2 className="text-2xl font-bold">
                Run Cold Campaigns That Land in Inbox
              </h2>
            </div>
          </div>
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 bg-white">
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
              ⚙️
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-600">
                DNS & Setup
              </h3>
              <h2 className="text-2xl font-bold">
                Configure SPF, DKIM, and DMARC the Easy Way
              </h2>
            </div>
          </div>
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 bg-white">
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
              🚀
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-600">
                Automation
              </h3>
              <h2 className="text-2xl font-bold">
                Auto-Deploy Inboxes & Start Sending in Minutes
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
