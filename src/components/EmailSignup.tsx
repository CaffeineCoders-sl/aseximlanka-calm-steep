import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! You're on the list for our exclusive launch.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto fade-in-delay">
      <p className="text-sm text-muted-foreground mb-4 text-center font-light tracking-wide">
        Join the first sip — exclusive launch offers.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-card border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground/50 rounded-lg"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 rounded-lg hover-lift shadow-soft"
        >
          {isSubmitting ? "Joining..." : "Notify Me"}
        </Button>
      </form>
    </div>
  );
};

export default EmailSignup;
