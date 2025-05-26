
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    question: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration form submitted:", formData);
    
    toast({
      title: "Registration Successful! 🎉",
      description: "Check your email for confirmation and event details.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      experience: "",
      question: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="register" className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎯 <span className="text-amber-400">Registration Form</span>
          </h2>
          <p className="text-xl text-white/70 italic">
            Short, sharp, straight-to-the-point. Fill it. Hit submit. See you inside.
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Secure Your Free Seat</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email <span className="text-amber-400">(yes, your real one)</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone / WhatsApp <span className="text-amber-400">(for the reminder nudge)</span></Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">Country of Residence</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Enter your country"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-white">Current Real-Estate Experience</Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)} required>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/30">
                    <SelectItem value="beginner" className="text-white">Total beginner</SelectItem>
                    <SelectItem value="intermediate" className="text-white">1–3 deals</SelectItem>
                    <SelectItem value="seasoned" className="text-white">Seasoned pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="question" className="text-white">
                  Biggest Question About Investing Across Borders 
                  <span className="text-amber-400"> (one sentence, spill it fast)</span>
                </Label>
                <Textarea
                  id="question"
                  value={formData.question}
                  onChange={(e) => handleInputChange("question", e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-[100px]"
                  placeholder="What's your biggest challenge with international real estate investment?"
                />
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-lg px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  Register Now
                </Button>
                <p className="text-white/60 text-sm mt-4 italic">
                  Because the next property boom won't pause for procrastinators.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-400 font-bold text-lg">1</span>
              </div>
              <p className="text-white/80 text-sm">Complete the form ➡ get an instant confirmation email.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold text-lg">2</span>
              </div>
              <p className="text-white/80 text-sm">Event link arrives 24 hours before go-time—guard it like it's your private key.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold text-lg">3</span>
              </div>
              <p className="text-white/80 text-sm">Show up on camera, pen ready, mind open.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
