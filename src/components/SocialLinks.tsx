import { Instagram, Facebook, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="flex gap-6 justify-center items-center fade-in-delay-2">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="text-primary/70 hover:text-accent transition-colors hover-lift"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
