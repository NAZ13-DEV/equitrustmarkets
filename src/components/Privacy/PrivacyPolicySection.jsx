import React from 'react';

const PrivacyPolicySection = () => {
  return (
    <section className='px-4 py-16 text-black bg-white md:px-16 animate-fade-in'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-[#07A658]'>
          Privacy Policy
        </h2>

        <p className='mb-6 text-lg'>
          At{' '}
          <span className='font-semibold text-[#07A658]'>
            Optima Trade Market
          </span>
          , we value your trust. This Privacy Policy explains how we collect,
          use, and protect your information when you use our services.
        </p>

        <div className='space-y-8'>
          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              1. Information We Collect
            </h3>
            <p>
              We may collect personal information such as your name, email,
              phone number, address, and financial data when you register,
              deposit funds, or interact with our platform.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              2. How We Use Your Information
            </h3>
            <ul className='ml-6 list-disc'>
              <li>To process transactions and verify your identity</li>
              <li>
                To communicate with you about your account or our services
              </li>
              <li>To comply with legal obligations</li>
              <li>To enhance platform functionality and performance</li>
            </ul>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              3. Data Security
            </h3>
            <p>
              We use advanced encryption, firewall protection, and secure
              servers to keep your data safe. Only authorized personnel have
              access to sensitive information.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              4. Cookies and Tracking
            </h3>
            <p>
              Our platform uses cookies to improve user experience and gather
              analytics. You can manage cookie preferences in your browser
              settings.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              5. Third-Party Sharing
            </h3>
            <p>
              We never sell your data. We may share information only with
              verified third parties like payment providers or regulators, under
              strict confidentiality.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              6. Your Rights
            </h3>
            <p>
              You can request access, correction, or deletion of your personal
              data. Contact our support team to exercise these rights.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-[#07A658] mb-2'>
              7. Policy Updates
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be communicated via email or platform notifications.
            </p>
          </div>
        </div>

        <p className='mt-10 text-sm text-gray-600'>
          If you have questions about this policy, please contact us at{' '}
          <a className='text-[#07A658] underline'>
            support@Optima Trade Market.com
          </a>
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

export default PrivacyPolicySection;
