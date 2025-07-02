const Features = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Features
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">A better way to create inboxes and launch campaigns</span>
          </h2>
          <p className="text-center text-gray-600">

          </p>
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <img
              src="images\3-removebg-preview.png"
              alt="Inbox Automation"
              className="w-26 h-24"
            />
            <h3 className="text-lg font-bold">Inbox Automation</h3>
            <p className="text-center text-gray-400">
              Auto-deploy inboxes under your domain — no technical steps required.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <img
              src="images\2-removebg-preview.png"
              alt="Inbox Automation"
              className="w-26 h-24"
            />
            <h3 className="text-lg font-bold">DNS Setup</h3>
            <p className="text-center text-gray-400">
              SPF, DKIM, and DMARC — all handled automatically so you hit the inbox.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <img
              src="images\1-removebg-preview.png"
              alt="Inbox Automation"
              className="w-26 h-24"
            />
            <h3 className="text-lg font-bold">Smart Campaigns</h3>
            <p className="text-center text-gray-400">
              Upload leads, schedule emails, and rotate inboxes for better deliverability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
