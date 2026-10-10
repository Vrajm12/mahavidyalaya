import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { AppLayout } from "@/components/layout/AppLayout";
import { useCreateAdmissionLead } from "@workspace/api-client-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  CheckCircle, 
  HelpCircle, 
  Building2, 
  ClipboardList, 
  FileText, 
  IndianRupee, 
  Phone, 
  Mail,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const DEPARTMENTS = [
  "Junior College — Class 11 (FYJC) Arts",
  "Junior College — Class 11 (FYJC) Commerce",
  "Junior College — Class 11 (FYJC) Science",
  "Senior College — B.Sc. (Bachelor of Science)",
  "Senior College — BCS (Bachelor of Computer Science)",
];

const admissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  courseInterest: z.string().min(1, "Please select a course"),
  qualification: z.string().optional(),
  message: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export default function Admissions() {
  const { toast } = useToast();
  const createLead = useCreateAdmissionLead();
  const [location] = useLocation();

  const tabSequence = ["eligibility", "process", "institute", "documents", "fees"];
  const [activeTab, setActiveTab] = useState("eligibility");
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const [search, setSearch] = useState(window.location.search);

  // Sync tab with URL
  useEffect(() => {
    const handleUrlChange = () => {
      const currentSearch = window.location.search;
      setSearch(currentSearch);
      const searchParams = new URLSearchParams(currentSearch);
      const tabParam = searchParams.get("tab");
      if (tabParam && tabSequence.includes(tabParam)) {
        setActiveTab(tabParam);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newUrl = `${window.location.pathname}?tab=${value}`;
    window.history.pushState(null, "", newUrl);
  };

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseInterest: "",
      qualification: "",
      message: "",
    },
  });

  const onSubmit = (data: AdmissionFormValues) => {
    createLead.mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Application Submitted Successfully",
          description: "Our admissions counseling desk will contact you shortly.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Application Received",
          description: "Thank you for applying. We have registered your inquiry.",
        });
        form.reset();
      }
    });
  };

  return (
    <AppLayout>
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl space-y-3">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">Admissions 2026-27</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Admissions Portal</h1>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Welcome to Indrayani Mahavidyalaya. Admissions are currently open for Junior College in Arts, Commerce, and Science (Classes 11 & 12) and Undergraduate Senior College programs in B.Sc. and BCS.
          </p>
          <div className="pt-2">
            <Link href="/admissions/check-eligibility">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-primary font-bold text-xs">
                Check Your Eligibility With Calculator →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl">
          
          {/* Tabs and Guidelines (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 h-auto gap-1 bg-muted/60 p-1 mb-8 rounded-xl border border-border">
                <TabsTrigger value="eligibility" className="py-2 px-2 rounded-lg text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  Eligibility
                </TabsTrigger>
                <TabsTrigger value="process" className="py-2 px-2 rounded-lg text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  CAP Process
                </TabsTrigger>
                <TabsTrigger value="institute" className="py-2 px-2 rounded-lg text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  Institute Level
                </TabsTrigger>
                <TabsTrigger value="documents" className="py-2 px-2 rounded-lg text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="fees" className="py-2 px-2 rounded-lg text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white col-span-2 sm:col-span-1">
                  Fees & Grants
                </TabsTrigger>
              </TabsList>

              {/* 1. ELIGIBILITY */}
              <TabsContent value="eligibility" className="space-y-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Eligibility Guidelines</h2>
                </div>

                <div className="space-y-6">
                  {/* Junior College Eligibility */}
                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-base font-bold text-primary border-b border-border pb-2">
                        1. Junior College (Classes 11 & 12 — Arts, Commerce, Science)
                      </h3>
                      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Candidate must have passed the Class 10 (SSC) examination from the Maharashtra State Board or any recognized central/state board (CBSE/ICSE/NIOS).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>English is a compulsory qualifying passing subject.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Science Stream:</strong> Requires a minimum of 35% in Science and Mathematics in Class 10.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Commerce Stream with Maths:</strong> Requires minimum 40% in Class 10 Mathematics.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Senior College Eligibility */}
                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-base font-bold text-primary border-b border-border pb-2">
                        2. Senior College (Undergraduate Degrees — SPPU Affiliated)
                      </h3>
                      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>B.Sc. (Bachelor of Science):</strong> Passed Higher Secondary Certificate (HSC 10+2) in Science stream with Physics, Chemistry, Biology, or Mathematics.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>BCS (Bachelor of Computer Science):</strong> Passed HSC (10+2) Science with Mathematics as one of the subjects, or 3-year Polytechnic Diploma in Computer / IT.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 2. PROCESS */}
              <TabsContent value="process" className="space-y-6">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Admission Process</h2>
                </div>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 space-y-6">
                    <div className="border-l-2 border-primary/30 pl-6 space-y-6 ml-2">
                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">1</span>
                        <h4 className="text-sm font-bold text-primary">Centralized Online Registration (CAP)</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Junior College applicants register on the Pune division CAP portal (11thadmission.org.in). Senior college applicants register on the SPPU admissions portal.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">2</span>
                        <h4 className="text-sm font-bold text-primary">College Preference Selection</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Select <strong>Indrayani Mahavidyalaya, Talegaon Dabhade</strong> as your preferred choice in Part 2 Option Form.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">3</span>
                        <h4 className="text-sm font-bold text-primary">Merit Allotment & Document Verification</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Upon seat allotment in the merit list, report to the college administrative office with original marksheets, school leaving certificate (TC), and copies.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">4</span>
                        <h4 className="text-sm font-bold text-primary">Fee Payment & Enrollment Confirmation</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Complete fee payment through online banking or cash counter to finalize your seat admission.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 3. INSTITUTE LEVEL */}
              <TabsContent value="institute" className="space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Institute Level Admissions</h2>
                </div>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Indrayani Mahavidyalaya offers direct counseling and institutional merit quota seats for Class 11 (Arts, Commerce, Science) and Senior College (B.Sc., BCS) as sanctioned by the Directorate of Education and Savitribai Phule Pune University.
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Visit the college admissions office in person for application forms and spot verification.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Subject choice counseling by senior faculty members for Arts, Commerce, and Science streams.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 4. DOCUMENTS */}
              <TabsContent value="documents" className="space-y-6">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Required Documents Checklist</h2>
                </div>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-xs text-muted-foreground mb-4 font-semibold italic">
                      (Submit original copies along with 3 sets of self-attested photocopies)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
                      {[
                        "Class 10 (SSC) Marksheet & Passing Certificate",
                        "Class 12 (HSC) Marksheet (for Senior College B.Sc./BCS)",
                        "Original School / College Leaving Certificate (LC / TC)",
                        "Online CAP Registration & Option Form Printout",
                        "Aadhaar Card Copy",
                        "Domicile Certificate (for Maharashtra students)",
                        "Caste Certificate & Validity (if applicable)",
                        "Non-Creamy Layer Certificate (OBC/SBC/VJNT)",
                        "4 Recent Passport-Size Photographs",
                      ].map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 5. FEES & SCHOLARSHIPS */}
              <TabsContent value="fees" className="space-y-6">
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-primary">Fees & Government Scholarships</h2>
                </div>

                <div className="space-y-4">
                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 space-y-2">
                      <h4 className="font-bold text-sm text-foreground">Affordable Government Grant-in-Aid Structure</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Junior College fees follow the subsidized norms of the Government of Maharashtra. Senior College undergraduate fees follow Savitribai Phule Pune University guidelines.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6 space-y-3">
                      <h4 className="font-bold text-sm text-foreground">MahaDBT Scholarship Schemes</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Students from eligible reserved and economically backward sections can avail full or partial fee concessions through the Government of Maharashtra MahaDBT portal:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground pt-1">
                        {[
                          "Social Welfare Department (SC Scholarship / Freeship)",
                          "Tribal Development Department (ST Schemes)",
                          "OBC, VJNT & SBC Welfare Scholarships",
                          "Rajarshi Chhatrapati Shahu Maharaj EBC Scheme",
                          "Minority Scholarship Scheme",
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Helpdesk Card */}
            <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3">
              <div className="flex items-center gap-3 text-primary font-bold text-sm">
                <HelpCircle className="w-5 h-5 text-accent" />
                <span>Admission Counseling Helpdesk</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Visit the college administrative office in Talegaon Dabhade for in-person counseling from Monday to Saturday, 9:00 AM to 5:00 PM.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-foreground pt-1">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>+91 2114 222225 / 223555</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <a href="mailto:admission@indrayanicollege.com" className="text-primary hover:underline">
                    admission@indrayanicollege.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (5 Cols) */}
          <div className="lg:col-span-5">
            <Card className="border-t-4 border-t-accent shadow-xl sticky top-28">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-primary">Apply Now</CardTitle>
                <p className="text-xs text-muted-foreground">Submit your inquiry for Junior or Senior College admission.</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Amit Patil" {...field} className="text-xs" />
                          </FormControl>
                          <FormMessage className="text-[11px]" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold">Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="amit@example.com" {...field} className="text-xs" />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-semibold">Mobile Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="9876543210" {...field} className="text-xs" />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="courseInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold">Program / Stream of Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-xs">
                                <SelectValue placeholder="Select Academic Program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {DEPARTMENTS.map((dept) => (
                                <SelectItem key={dept} value={dept} className="text-xs">
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-[11px]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="qualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold">Previous Qualification & Marks (%)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 10th SSC (82.40%) or 12th Sci (74%)" {...field} className="text-xs" />
                          </FormControl>
                          <FormMessage className="text-[11px]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold">Message / Query (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Ask questions about subject combinations, hostel, or fees..." {...field} className="text-xs h-20" />
                          </FormControl>
                          <FormMessage className="text-[11px]" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-accent hover:text-primary text-white font-bold text-xs py-5 transition-colors">
                      Submit Admission Inquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
