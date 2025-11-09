import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// FloatingLeaves removed — decorative leaves have been removed per request

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const { toast } = useToast();
  const headerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    message: "",
  });

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! ✓",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", country: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "A S Exim Lanka (Pvt) Ltd",
        "1, 665/22, 1 Gunawardana Mawatha",
        "Sri Jayawardenepura Kotte 10120, Sri Lanka",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Dinesh Saluwadana: +94715524956", "Mon-Sat: 9AM - 6PM"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@aseximlanka.com"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  // Department contacts removed per request (see project maintainer notes)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')",
            }}
          />
        </div>

        <div ref={headerRef} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-amber-500/30 rounded-full">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
                Let's Connect
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Get In
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Touch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              For partnerships, private labeling, or premium Ceylon Tea sourcing
              opportunities, we're here to help.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="h-12 rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="h-12 rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your Company"
                        className="h-12 rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 234 567 8900"
                        className="h-12 rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country/Region
                    </label>
                    <Input
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      placeholder="United States"
                      className="h-12 rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your requirements, volume needs, and any specific questions..."
                      rows={6}
                      className="rounded-xl border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                            {info.title}
                          </h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Contacts removed per request - consolidated contact methods above */}

              {/* B2B Notice */}
              <div className="bg-gradient-to-br from-gray-900 to-emerald-900 p-8 rounded-2xl text-white">
                <h4 className="font-serif text-xl mb-3 text-amber-400">
                  B2B Inquiries Welcome
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  We specialize in serving retailers, distributors, private labels, and
                  corporate clients globally. Contact us for custom solutions, volume
                  pricing, and partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="aspect-[21/9] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62478904207!2d79.69567092858488!3d6.921837093372024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Prefer to reach out directly?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our team is available Monday through Friday, 9 AM - 5 PM Sri Lanka time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg rounded-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
