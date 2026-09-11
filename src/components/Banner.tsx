import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* বামপাশের সেকশন (৫০% জায়গা নেবে) */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* হেডিং - সম্পূর্ণ বোল্ড */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Your Ideal, <br className="hidden sm:inline" />
              Development Stack
            </h1>

            {/* ডেসক্রিপশন - বোল্ড টেক্সট */}
            <p className="text-base sm:text-lg text-gray-800 font-bold leading-relaxed py-10">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* বাটন দুটি */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Explore Technologies
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-gray-200 text-gray-800 font-bold text-sm sm:text-base px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ডানপাশের সেকশন (৫০% জায়গা ইমেজের জন্য) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* আপনার ছবির প্রজেক্ট লিংক বা ইম্পোর্ট করা ইমেজ এখানে src তে বসিয়ে দেবেন */}
            <img
              src={bannerImg}
              alt="Development Stack Illustration"
              className="w-full h-auto max-w-lg object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
