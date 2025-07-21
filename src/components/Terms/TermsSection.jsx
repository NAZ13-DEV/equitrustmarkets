import React from "react";

const TermsSection = () => {
  return (
    <section className="px-4 py-16 text-black bg-white md:px-16 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#07A658]">Terms & Conditions</h2>

        <p className="mb-6 text-lg">
          These Terms and Conditions govern your use of the <span className="font-semibold text-[#07A658]">EquitrustMarkets</span> platform.
          By accessing or using our services, you agree to be legally bound by the following terms.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">1. User Eligibility</h3>
            <p>
              You must be at least 18 years old or of legal age in your jurisdiction to use this platform. You represent that
              all information provided is accurate and complete.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">2. Account Responsibility</h3>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for all activities that
              occur under your account. Report unauthorized use immediately.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">3. Risk Disclosure</h3>
            <p>
              Trading CFDs, forex, crypto, and other assets involves significant risk of loss. You acknowledge that you fully
              understand the risks before participating in any transactions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">4. Prohibited Activities</h3>
            <ul className="ml-6 list-disc">
              <li>Using automated bots or scripts without permission</li>
              <li>Attempting to gain unauthorized access to systems</li>
              <li>Engaging in fraudulent or illegal activities</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">5. Platform Availability</h3>
            <p>
              We do not guarantee continuous availability of the platform. Scheduled maintenance or technical issues may
              cause temporary outages.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">6. Modifications</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the platform constitutes your
              acceptance of any updates.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#07A658] mb-2">7. Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which
              EquitrustMarkets operates.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-600">
          For any questions regarding these Terms, please contact{" "}
          <a  className="text-[#07A658] underline">
            support@equitrustmarkets.com
          </a>.
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TermsSection;
