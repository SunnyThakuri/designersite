import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-8 px-4 max-w-[1400px] mx-auto">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>

        <h2 className="text-2xl font-semibold uppercase">Overview</h2>
        <p className="text-base">
          This privacy policy outlines how we collect, use, and protect your
          personal information when you visit our website or purchase marble,
          granite, and stone products. We are committed to safeguarding your
          privacy and ensuring your data is secure. By using our website, you
          agree to this policy.
        </p>

        <h2 className="text-2xl font-semibold uppercase">What We Collect</h2>
        <p className="text-base">
          We may collect the following information:
        </p>
        <ul className="list-disc ml-6">
          <li>Personal details, such as name and contact information</li>
          <li>Order history and preferences</li>
          <li>Payment and billing details</li>
          <li>
            Analytics data, including website usage patterns and demographics
          </li>
        </ul>

        <h2 className="text-2xl font-semibold uppercase">
          How We Use Your Information
        </h2>
        <p className="text-base">
          Your information helps us provide better services, including:
        </p>
        <ul className="list-disc ml-6">
          <li>Processing orders and managing shipping logistics</li>
          <li>Improving product recommendations and customer experience</li>
          <li>
            Sending updates, promotional offers, and relevant communications
          </li>
        </ul>

        <h2 className="text-2xl font-semibold uppercase">Cookies</h2>
        <p className="text-base">
          We use cookies to enhance your browsing experience and gather data on
          how users navigate our site. Cookies help us analyze webpage traffic
          and optimize our services.
        </p>

        <h2 className="text-2xl font-semibold uppercase">
          Links to Other Sites
        </h2>
        <p className="text-base">
          Our site may link to external websites related to interior design.
          However, we are not responsible for the privacy practices of these
          third-party sites. Please review their policies before providing any
          personal information.
        </p>

        <h2 className="text-2xl font-semibold uppercase">Contact Us</h2>
        <p className="text-base">
          If you have any questions about your data or our privacy practices,
          contact us via email or phone. We are dedicated to addressing your
          concerns promptly.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;