import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.google.com/?q=Bengaluru,India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@xcelens.club",
    href: "mailto:hello@xcelens.club",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative w-full bg-[#f2f3f4] pt-[80px] pb-[40px] px-10">
      <div className="container max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Location" ? "_blank" : undefined}
              rel={item.label === "Location" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center bg-white rounded-[12px] p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mb-5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-[13px] uppercase tracking-wider text-[#999] mb-2">
                {item.label}
              </p>
              <p className="text-[18px] font-medium text-black">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
