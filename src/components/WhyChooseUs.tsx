import { WHY_CHOOSE_FEATURES } from '../data/restaurantData';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F5EFE6] text-[#171512] py-20 sm:py-24 border-b border-[#E5DCCD]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#8C6318] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#171512] text-balance">
              Thoughtful Hospitality for Every Occasion
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4F4539] max-w-md">
            Designed around great flavors, attentive service, and convenient ways to dine in
            Tirupati.
          </p>
        </div>

        {/* 5 Feature Cards — Asymmetric balanced 3+2 desktop grid with consistent elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => {
            const spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            return (
              <article
                key={feature.index}
                className={`${spanClass} bg-[#FAF6F0] border border-[#E2D6C3] rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <span className="font-display text-2xl font-semibold text-[#8C6318] tabular-nums">
                  {feature.index}.
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#171512]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-[15px] text-[#4F4539] leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
