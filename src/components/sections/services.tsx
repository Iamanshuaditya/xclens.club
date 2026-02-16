import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#f3f3f3] py-[140px] overflow-hidden" id="services">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="container h-full grid grid-cols-5 gap-0">
          <div className="border-l border-[#e5e5e5] h-full" />
          <div className="border-l border-[#e5e5e5] h-full" />
          <div className="border-l border-[#e5e5e5] h-full" />
          <div className="border-l border-[#e5e5e5] h-full" />
          <div className="border-l border-[#e5e5e5] border-r h-full" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="mb-[60px]">
            <span className="badge-pill mb-4 bg-[#D1D5DB] text-[#374151]">Services</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-[600px]">
                <h2 className="font-display text-[48px] leading-[1.2] text-black mb-6">
                  Advance Your Goals with Professional Guidance
                </h2>
                <p className="font-sans text-[18px] leading-[1.6] text-black/70">
                  Experience tailored coaching designed to boost your confidence and cultivate balance in everyday life.
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards Grid - Responsive Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col h-[520px] bg-black rounded-[12px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative mt-auto p-8 z-20">
                  <h3 className="font-display text-[24px] text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-[1.4] text-white/80">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://cal.com/flamby/x"
              className="btn-pill bg-black text-white px-8 py-3 hover:opacity-80 transition-opacity"
            >
              Start your journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
