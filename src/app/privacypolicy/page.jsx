// This component can be a client component if you need client-side interactivity
// (e.g., if you had interactive consent options, which this policy does not suggest)
// For a purely static UI, it can remain a server component.
// 'use client'; 

import React from 'react';

const PrivacyPolicySection = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white w-full text-black">
      <div className="bg-white p-8 sm:p-12 md:p-16 flex flex-col items-center w-full max-w-2xl lg:max-w-xl text-left"> {/* Increased max-width for readability */}
        
        <h1 className="text-4xl font-normal text-gray-800 mb-2 text-center">Privacy policy</h1> {/* Centered main title */}
        <p className="text-gray-600 mb-8">Last updated: February 22, 2025</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This Privacy Policy describes how Tarakaya Silver (the "Site", "we" "us", or "our" collects, uses, and discloses your personal
          Information when you visit, use our services, or make a purchase from www.silvertarakaya.com [the "Site") or otherwise
          communicate with us regarding the Site (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your"
          means you as the user of the Services, whether you are a customer, website visitor, or another individual whose
          Information we have collected pursuant to this Privacy Policy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and
          disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or
          access any of the Services.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps
          required by applicable law.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">How We Collect and Use Your Personal Information</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information
          that we collect and use varies depending on how you Interact with us. In addition to the specific uses set out below, we may use
          information we collect about you to communicate with you, provide or improve or improve the Services, comply with any
          applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the
          rights of our users or others.
        </p>

        <h3 className="text-2xl font-normal text-gray-800 mb-4">What Personal Information We Collect</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we
          use the term "personal information", we are referring to information that identifies, relates to, describes or can be
          associated with you. The following sections describe the categories and specific types of personal information we collect.
        </p>

        <h3 className="text-2xl font-normal text-gray-800 mb-4">Information We Collect Directly from You</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Information that you directly submit to us through our Services may include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
          <li className="mb-2">Contact details including your name, address, phone number, and email.</li>
          <li className="mb-2">Order information including your name, billing address, shipping address, payment confirmation, email address, and
            phone number.</li>
          <li className="mb-2">Account information including your username, password, security questions and other information used for account
            security purposes.</li>
          <li className="mb-4">Customer support information including the information you choose to include in communications with us, for example,
            when sending a message through the Services.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to
          provide this information, but doing so may prevent you from using or accessing these features.
        </p>

        <h3 className="text-2xl font-normal text-gray-800 mb-4">Information We Collect about Your Usage</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may also automatically collect certain information about your interaction with the Services ("Usage Data"), To do this, we may
          use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our
          Site and your account, including device information, browser Information, information about your network connection, your IP
          address and other information regarding your interaction with the Services.
        </p>

        <h3 className="text-2xl font-normal text-gray-800 mb-4">Information We Obtain from Third Parties</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Finally, we may obtain information about you from third parties, Including from vendors and service providers who may collect
          information on our behalf, such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
          <li className="mb-2">Companies who support our Site and Services, such as Shopify.</li>
          <li className="mb-4">Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing
            address) to process your payment in order to fulfill your orders and provide you with products or services you have requested,
            in order to perform our contract with you.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third
          parties we work with, may automatically collect certain information using online tracking technologies such as pixels,
          web beacons, software developer kits, third-party libraries, and cookies.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below,
          Third Party Websites and Links.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">How We Use Your Personal Information</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
          <li className="mb-2">
            <strong>Providing Products and Services.</strong> We use your personal information to provide you with the Services in order to
            perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you
            related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage
            your account, to arrange for shipping, facilitate any returns and exchanges and other features and functionalities related
            to your account. We may also enhance your shopping experience by enabling Shopify to match your account with
            other Shopify services that you may choose to use. In this case, Shopify will process your information as set forth in its
            Privacy Policy and Consumer Privacy Policy.
          </li>
          <li className="mb-2">
            <strong>Marketing and Advertising.</strong> We may use your personal information for marketing and promotional purposes, such as
            to send marketing, advertising and promotional communications by email, text message or postal mail, and to
            show you advertisements for products or services. This may include using your personal information to better tailor the
            Services and advertising on our Site and other websites.
          </li>
          <li className="mb-2">
            <strong>Security and Fraud Prevention.</strong> We use your personal Information to detect, Investigate or take action regarding
            possible fraudulent, illegal or malicious activity, if you choose to use the Services and register an account, you are
            responsible for keeping your account credentials safe. We highly recommend that you do not share your username,
            password, or other access details with anyone else, if you believe your account has been compromised, please contact
            us immediately.
          </li>
          <li className="mb-4">
            <strong>Communicating with You and Service Improvement.</strong> We use your personal information to provide you with customer
            support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective
            services to you, and to maintain our business relationship with you.
          </li>
        </ul>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Cookies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Like many websites, we use Cookies on our Site. For specific Information about the Cookies that we use related to powering
          our store with Shopify, see <a href="https://www.shopify.com/legal/cookies" className="text-blue-600 hover:underline">https://www.shopify.com/legal/cookies</a>. We use Cookies to power
          and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better
          understand user interaction with the Services (in our legitimate interests to administer, improve and optimize the Services). We
          may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and
          advertising on our Site and other websites.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies
          through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user
          experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no
          longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties
          such as our advertising partners.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">How We Disclose Personal Information</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In certain circumstances, we may disclose your personal information to third parties for contract fulfillment purposes,
          legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
          <li className="mb-2">With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data
            analytics, customer support, cloud storage, fulfillment and shipping).</li>
          <li className="mb-2">With business and marketing partners to provide services and advertise to you. Our business and marketing partners will use
            your information in accordance with their own privacy notices.</li>
          <li className="mb-2">When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to
            ship you products or through your use of social media widgets or login integrations, with your consent.</li>
          <li className="mb-2">With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</li>
          <li className="mb-4">In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations
            (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service,
            and to protect or defend the Services, our rights, and the rights of our users or others.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          We disclose the following categories of personal information and sensitive personal information about users for the purposes set
          out above in "How we Collect and Use your Personal information" and "How we Disclose Personal information".
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          We do not use or disclose sensitive personal information without your consent or for the purposes of inferring characteristics
          about you.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">User Generated Content</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Services may enable you to post product reviews and other user-generated content if you choose to submit user generated
          content to any public area of the Services, this content will be public and accessible by anyone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not control who will have access to the information that you choose to make avallable to others, and cannot ensure that
          parties who have access to such information will respect your privacy or keep it secure. We are not responsible for the privacy
          or security of any information that you make publicly available, or for the accuracy, use or misuse of any information that you
          disclose or receive from third parties.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Third Party Websites and Links</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated
          or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee
          and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of
          information found on these sites. Information you provide on public or semi-public venues, including information you share on
          third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party
          platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any
          endorsement of the content on such platforms or of their owners.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Children's Data</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Services are not intended to be used by children, and we do not knowingly collect any personal information about children, if
          you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the
          contact details set out below to request that it be deleted. As of the Effective Date of this Privacy Policy, we do not have
          actual knowledge that we "share" or "sell" (as those terms are defined in applicable law) personal information of individuals
          under 16 years of age.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Security and Retention of Your Information</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Please be aware that no security measures are perfect or Impenetrable, and we cannot guarantee "perfect security." In
          addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels
          to communicate sensitive or confidential information to us.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          How long we retain your personal information depends on different factors, such as whether we need the information to
          maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable
          contracts and policies.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Your Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depending on where you live, you may have some or all of the rights listed below in relation to your personal information.
          However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request
          as permitted by law.
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
          <li className="mb-2"><strong>Right to Access / Know:</strong> You may have a right to request access to personal information that we hold about you,
            including details relating to the ways in which we use and share your information.</li>
          <li className="mb-2"><strong>Right to Delete:</strong> You may have a right to request that we delete personal information we maintain about you.</li>
          <li className="mb-2"><strong>Right to Correct:</strong> You may have a right to request that we correct inaccurate personal information we maintain about
            you.</li>
          <li className="mb-2"><strong>Right of Portability:</strong> You may have a right to receive a copy of the personal information we hold about you and to request
            that we transfer it to a third party, in certain circumstances and with certain exceptions.</li>
          <li className="mb-2"><strong>Restriction of Processing:</strong> You may have the right to ask us to stop or restrict our processing of personal information.</li>
          <li className="mb-2"><strong>Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you may have the right to withdraw
            this consent.</li>
          <li className="mb-2"><strong>Appeal:</strong> You may have a right to appeal our decision if we decline to process your request. You can do so by replying
            directly to our denial.</li>
          <li className="mb-4"><strong>Managing Communication Preferences:</strong> We may send you promotional emails, and you may opt out of receiving these at
            any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non
            promotional emails, such as those about your account or orders that you have made.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.
          We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your
          identity, such as your email address or account information, before providing a substantive response to the request. In
          accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise
          your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized
          them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a
          timely manner as required under applicable law.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Complaints</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have complaints about how we process your personal information, please contact us using the contact details provided
          below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right
          to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data
          protection authority.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">International Users</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Please note that we may transfer, store and process your personal information outside the country you live in. Your personal
          information is also processed by staff and third party service providers and partners in these countries.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European
          Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK,
          as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
        </p>

        <h2 className="text-3xl font-normal text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the
          rights available to you, please call or email us at tarakayasilver@gmail.com or contact us at Bottom Bazar Road, Kani bazar, 38A, Hazaribagh, JH, 825301, IN.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicySection;