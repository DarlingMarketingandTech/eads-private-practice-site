import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Blazing Star Therapy",
  description: "Schedule a consultation or get in touch with Tucker Eads, LCSW in Bloomington, IN.",
};

export default function Contact() {
  return (
    <main className="flex-1">
      {/* Schedule Initial Consultation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Schedule initial consultation</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              You can book a no-cost 20-minute initial consultation with me here. I have telehealth availability in Illinois and Indiana, and in-person sessions in Bloomington, IN.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Link
              href="https://blazingstar.sessionshealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a8be57] px-8 py-4 text-white font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-[#96a84a]"
            >
              <Calendar className="w-5 h-5" />
              Book no-cost consultation
            </Link>
          </div>

          {/* Email & Phone Contact */}
          <div className="pt-8 border-t border-gray-200">
            <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 ring-1 ring-gray-200">
                  <Mail className="h-4 w-4" />
                </span>
                <p className="text-base font-medium text-gray-800">
                  You can also reach me directly
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:tucker@blazingstartherapy.com"
                  className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-sm font-medium text-gray-600">Email</span>
                  <span className="break-all text-base font-semibold text-gray-900">
                    tucker@blazingstartherapy.com
                  </span>
                </a>

                <a
                  href="tel:18122698624"
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-sm font-medium text-gray-600">Indiana</span>
                  <span className="text-base font-semibold text-gray-900">812-269-8624</span>
                </a>

                <a
                  href="tel:13129679987"
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-sm font-medium text-gray-600">Illinois</span>
                  <span className="text-base font-semibold text-gray-900">312-967-9987</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Cost</h2>
          </div>

          <div className="space-y-12">
            {/* In-Network Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">In-network with your insurance</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I&apos;m an in-network provider with the insurances listed below. After the initial consultation I can process an insurance verification to confirm your benefits and out-of-pocket cost, including co-pay or co-insurance. For in-network insurance, the cost is set by the insurance company and the specifics of your plan.
              </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Illinois:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.bcbsil.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Blue Cross and Blue Shield of Illinois (BCBS-IL) (PPO and Blue Choice)
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.cigna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Cigna
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.aetna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Aetna
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Indiana:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.cigna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Cigna
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.aetna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Aetna
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>

            {/* Out-of-Network and Self-Pay */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Out-of-network and self-pay</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I can also work with you as an out-of-network provider for you to submit to your insurance. For out-of-network and self-pay, the rate is $150 per session.
              </p>
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-3xl font-bold text-gray-900">
                    $150 <span className="text-lg font-normal text-gray-600">per session</span>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
