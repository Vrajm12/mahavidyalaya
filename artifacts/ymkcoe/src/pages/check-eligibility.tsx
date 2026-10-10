import { AppLayout } from "@/components/layout/AppLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ArrowLeft, CheckCircle2, XCircle, FileCheck, Send, User, GraduationCap, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const STEPS = [
  { id: 'personal', title: "Personal Profile", icon: User },
  { id: 'academics', title: "Academic Credentials", icon: GraduationCap },
  { id: 'documents', title: "Mandatory Documents", icon: FileCheck },
  { id: 'result', title: "Eligibility Result", icon: ShieldAlert }
];

const DOCUMENTS_LIST = [
  "Aadhaar Card",
  "10th (SSC) Marksheet",
  "12th (HSC) Marksheet (for Senior College)",
  "School / College Leaving Certificate (LC / TC)",
  "Domicile Certificate",
  "Caste Certificate (If applicable)"
];

const PROGRAM_OPTIONS = [
  { id: "11-arts", label: "Class 11 (FYJC) Arts", level: "junior" },
  { id: "11-comm", label: "Class 11 (FYJC) Commerce", level: "junior" },
  { id: "11-sci", label: "Class 11 (FYJC) Science", level: "junior" },
  { id: "bsc", label: "B.Sc. — Bachelor of Science", level: "senior" },
  { id: "bcs", label: "BCS — Bachelor of Computer Science", level: "senior" },
];

export default function CheckEligibility() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "11-sci",
    score10th: "",
    score12th: "",
    hasMaths: true,
    documents: [] as string[]
  });

  const [eligibilityResult, setEligibilityResult] = useState<{isEligible: boolean, reasons: string[], missing: string[]}>({
    isEligible: false,
    reasons: [],
    missing: []
  });

  const nextStep = () => {
    setDirection(1);
    setStep(s => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 0));
  };

  const handleDocumentToggle = (doc: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.includes(doc) 
        ? prev.documents.filter(d => d !== doc)
        : [...prev.documents, doc]
    }));
  };

  const calculateEligibility = () => {
    setIsProcessing(true);
    setDirection(1);
    setStep(3); // Result step
    
    setTimeout(() => {
      const missing: string[] = [];
      const reasons: string[] = [];
      const score10 = parseFloat(formData.score10th);
      const score12 = parseFloat(formData.score12th);
      
      const isJunior = formData.course.startsWith("11-");
      
      if (isJunior) {
        if (isNaN(score10) || score10 < 35) {
          missing.push("Minimum 35% passing marks required in 10th SSC.");
        } else {
          reasons.push(`10th SSC Score (${score10}%) meets the minimum state board passing criteria.`);
        }
        
        if (formData.course === "11-sci" && score10 < 35) {
          missing.push("Science stream requires passing marks in Science & Mathematics in 10th.");
        }

        if (!formData.documents.includes("10th (SSC) Marksheet")) {
          missing.push("10th SSC Marksheet is mandatory.");
        }
      } else {
        // Senior College (B.Sc. / BCS)
        if (isNaN(score12) || score12 < 35) {
          missing.push("Minimum passing score required in 12th HSC Science.");
        } else {
          reasons.push(`12th HSC Score (${score12}%) qualifies for SPPU Undergraduate Admission.`);
        }

        if (formData.course === "bcs" && !formData.hasMaths) {
          missing.push("BCS degree requires Mathematics as a subject in 12th HSC or equivalent engineering diploma.");
        }

        if (!formData.documents.includes("12th (HSC) Marksheet (for Senior College)")) {
          missing.push("12th HSC Marksheet is mandatory for undergraduate senior college admission.");
        }
      }

      if (!formData.documents.includes("Aadhaar Card")) {
        missing.push("Aadhaar Card copy is mandatory for enrollment verification.");
      }

      setEligibilityResult({
        isEligible: missing.length === 0,
        reasons,
        missing
      });
      setIsProcessing(false);
    }, 600);
  };

  return (
    <AppLayout>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-3">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">Self-Assessment Tool</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Check Your Admission Eligibility</h1>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-xl mx-auto">
            Evaluate your eligibility for Class 11 (FYJC) Arts, Commerce, Science or Undergraduate degrees in B.Sc. and BCS in minutes.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20 min-h-[600px]">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress Indicators */}
          <div className="flex justify-between items-center mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              const isPassed = step > idx;
              const isCurrent = step === idx;
              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isPassed ? "bg-accent text-primary font-bold shadow-md" :
                    isCurrent ? "bg-primary text-white ring-4 ring-primary/20 shadow-md" :
                    "bg-card border border-border text-muted-foreground"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-semibold mt-2 hidden sm:block ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border/70 rounded-2xl p-6 sm:p-10 shadow-lg relative min-h-[380px] flex flex-col justify-between">
            
            {/* STEP 1: PERSONAL PROFILE */}
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Step 1: Personal Details</h3>
                  <p className="text-xs text-muted-foreground mt-1">Please enter your contact details and desired program stream.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">Target Program *</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs font-medium focus:ring-2 focus:ring-primary"
                    >
                      {PROGRAM_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: ACADEMICS */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Step 2: Academic Marks & Background</h3>
                  <p className="text-xs text-muted-foreground mt-1">Provide your percentage marks in qualifying examinations.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">Class 10 (SSC) Percentage (%) *</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 78.40"
                      value={formData.score10th}
                      onChange={(e) => setFormData({ ...formData, score10th: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {!formData.course.startsWith("11-") && (
                    <>
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1">Class 12 (HSC Science) Percentage (%) *</label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="e.g. 68.50"
                          value={formData.score12th}
                          onChange={(e) => setFormData({ ...formData, score12th: e.target.value })}
                          className="w-full px-3 py-2 bg-background border border-border rounded-xl text-xs focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {formData.course === "bcs" && (
                        <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl">
                          <input
                            type="checkbox"
                            id="mathCheck"
                            checked={formData.hasMaths}
                            onChange={(e) => setFormData({ ...formData, hasMaths: e.target.checked })}
                            className="w-4 h-4 rounded text-primary"
                          />
                          <label htmlFor="mathCheck" className="text-xs text-foreground font-medium cursor-pointer">
                            I have studied Mathematics in Class 12 / Engineering Diploma (Required for BCS)
                          </label>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: DOCUMENTS */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Step 3: Document Readiness Check</h3>
                  <p className="text-xs text-muted-foreground mt-1">Select the official certificates and records currently in your possession.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCUMENTS_LIST.map((doc, idx) => {
                    const isChecked = formData.documents.includes(doc);
                    return (
                      <div
                        key={idx}
                        onClick={() => handleDocumentToggle(doc)}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer flex items-center justify-between transition-all ${
                          isChecked
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-background border-border text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <span>{doc}</span>
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-border" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: RESULT */}
            {step === 3 && (
              <div className="space-y-6">
                {isProcessing ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-sm font-semibold text-primary">Evaluating eligibility parameters against SPPU and MSBSHSE regulations...</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className={`p-6 rounded-2xl border flex items-start gap-4 ${
                      eligibilityResult.isEligible
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200"
                    }`}>
                      {eligibilityResult.isEligible ? (
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold">
                          {eligibilityResult.isEligible
                            ? "Congratulations! You Meet The Minimum Eligibility Criteria."
                            : "Action Items Required to Complete Eligibility"}
                        </h4>
                        <p className="text-xs opacity-90 leading-relaxed">
                          {eligibilityResult.isEligible
                            ? `You qualify for admission to ${PROGRAM_OPTIONS.find(p => p.id === formData.course)?.label} at Indrayani Mahavidyalaya.`
                            : "Please review the missing credentials or documentation requirements below:"}
                        </p>
                      </div>
                    </div>

                    {eligibilityResult.missing.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Missing Requirements:</span>
                        <ul className="space-y-1.5">
                          {eligibilityResult.missing.map((m, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-border flex flex-wrap gap-4 justify-between items-center">
                      <Button variant="outline" size="sm" onClick={() => setStep(0)}>
                        Test Another Program
                      </Button>
                      <Link href="/admissions">
                        <Button className="bg-primary hover:bg-accent text-white font-semibold">
                          Proceed to Admission Application
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Step Navigation (for steps 0, 1, 2) */}
            {step < 3 && (
              <div className="pt-6 border-t border-border flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevStep}
                  disabled={step === 0}
                  className="text-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back
                </Button>

                {step < 2 ? (
                  <Button size="sm" onClick={nextStep} className="bg-primary hover:bg-accent text-white text-xs font-semibold">
                    Next Step <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                ) : (
                  <Button size="sm" onClick={calculateEligibility} className="bg-accent hover:bg-accent/90 text-primary font-bold text-xs">
                    Calculate Eligibility Now
                  </Button>
                )}
              </div>
            )}

          </div>
        </div>
      </section>
    </AppLayout>
  );
}
