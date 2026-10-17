import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { CheckCircle2, Send, AlertCircle, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    institutionName: '',
    workEmail: '',
    institutionType: 'Colleges and Universities',
    estimatedWasteVolume: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const institutionTypes = [
    'Colleges and Universities',
    'Office Parks & Corporate Campuses',
    'Hotels and Resorts',
    'Commercial Cafeterias & Catering',
    'Hospital & Healthcare Dining',
    'Other Institutional Facility',
  ];

  const wasteVolumeOptions = [
    'Under 25 kg / day (Small cafeteria or coffee station)',
    '25 - 75 kg / day (Medium dining hall or office canteen)',
    '75 - 150 kg / day (Large campus dining center)',
    'Over 150 kg / day (High-throughput central commissary)',
    'Uncertain / Needs audit assistance',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.fullName.trim() || !formData.institutionName.trim() || !formData.workEmail.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Institution, Work Email, and Message).');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setError('Please provide a valid institutional email address.');
      return;
    }

    setSubmitting(true);
    // Simulate honest submission processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      institutionName: '',
      workEmail: '',
      institutionType: 'Colleges and Universities',
      estimatedWasteVolume: '',
      message: '',
    });
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Transparent Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
              Pilot Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance mb-4">
              Connect With the RAKSHA Team.
            </h2>
            <p className="text-base text-[#252A26]/80 leading-relaxed mb-6">
              We are actively speaking with sustainability directors, dining operators, and facility heads to discuss requirements and shape trial modular installations.
            </p>

            <div className="p-5 rounded-xl bg-[#F8F8F2] border border-[#EDE9DF] space-y-3.5 mb-8 text-xs text-[#252A26]/80 leading-relaxed">
              <div className="font-semibold text-[#252A26] text-sm">
                What to expect during discovery:
              </div>
              <ul className="space-y-2 list-disc list-inside">
                <li>Preliminary cafeteria waste volume and flow assessment.</li>
                <li>Site footprint review (service yard, loading bay, garden border).</li>
                <li>Carbon source options (wood chips, dried grounds foliage).</li>
                <li>Pilot monitoring framework and staff handling checklist.</li>
              </ul>
            </div>

            <div className="text-xs text-[#252A26]/60 leading-relaxed">
              <strong className="text-[#252A26] font-medium">Integration Notice:</strong> Form submissions in this preview environment are validated and recorded within the local application state. Backend email/CRM webhooks can be wired to your preferred institutional endpoint.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F8F2] border border-[#EDE9DF]">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#244C3A]/10 text-[#244C3A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#252A26] mb-2">
                    Enquiry Recorded
                  </h3>
                  <p className="text-sm text-[#252A26]/80 max-w-md mx-auto mb-6">
                    Thank you, <strong className="font-medium text-[#252A26]">{formData.fullName}</strong>. Your enquiry for <strong className="font-medium text-[#252A26]">{formData.institutionName}</strong> has been logged in the pilot pipeline.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-[#EDE9DF] text-left text-xs text-[#252A26]/80 max-w-md mx-auto mb-6 space-y-1.5">
                    <div><span className="font-semibold text-[#252A26]">Work Email:</span> {formData.workEmail}</div>
                    <div><span className="font-semibold text-[#252A26]">Institution Type:</span> {formData.institutionType}</div>
                    {formData.estimatedWasteVolume && (
                      <div><span className="font-semibold text-[#252A26]">Estimated Volume:</span> {formData.estimatedWasteVolume}</div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-[#244C3A] bg-white border border-[#244C3A]/20 hover:bg-[#EDE9DF]/50 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg font-bold text-[#252A26] pb-2 border-b border-[#EDE9DF]">
                    Institutional Pilot Enquiry
                  </h3>

                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Institution Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Sarah Jenkins"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] placeholder-[#252A26]/40 focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="institutionName" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                        Institution Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="institutionName"
                        type="text"
                        required
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        placeholder="e.g. Greenfield University"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] placeholder-[#252A26]/40 focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Work Email & Institution Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="workEmail" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="s.jenkins@greenfield.edu"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] placeholder-[#252A26]/40 focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="institutionType" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                        Institution Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="institutionType"
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full h-11 px-3 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors"
                      >
                        {institutionTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Approximate daily organic waste volume (optional) */}
                  <div>
                    <label htmlFor="wasteVolume" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                      Approximate Daily Organic Waste Volume <span className="text-xs font-normal text-[#252A26]/60">(Optional)</span>
                    </label>
                    <select
                      id="wasteVolume"
                      value={formData.estimatedWasteVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedWasteVolume: e.target.value })}
                      className="w-full h-11 px-3 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors"
                    >
                      <option value="">Select an estimated volume range...</option>
                      {wasteVolumeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#252A26] mb-1.5">
                      Message / Project Context <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your cafeteria setup, grounds access, or desired pilot timeframe..."
                      className="w-full p-3.5 rounded-lg bg-white border border-[#EDE9DF] text-sm text-[#252A26] placeholder-[#252A26]/40 focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto h-11 px-7 text-sm font-medium text-white bg-[#244C3A] hover:bg-[#1B3A2C] active:bg-[#142C21] rounded-lg shadow-xs transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A]"
                    >
                      {submitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
