import logo from "../assets/logo/logo.png";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/AI Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/Hybrid App Development.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/IT consultancy and strategy.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/IT Infrastructure.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";
import { FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export { logo };

export const companyDetails = {
  email: "xyz@example.com",
  phone: "+917972837272",
  phone2: "+918788749838",
  address:
    "Devi Shelter, Cooperative Housing Society, 7, Konark Nagar, Clover Park,  Viman Nagar, Pune, Maharashtra 411014, India",
};

export const testimonials = [
  {
    name: "Arjun Mehta",
    designation: "CEO, Tech Innovators",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "The team provided an exceptional web development solution tailored to our needs. Their attention to detail and innovative approach impressed us!",
  },
  {
    name: "Priya Sharma",
    designation: "Product Manager, Appify Co.",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Their app development service was outstanding. They delivered a user-friendly app on time, exceeding our expectations!",
  },
  {
    name: "Ravi Patel",
    designation: "Founder, AI Ventures",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "The AI development team showcased deep expertise and delivered a cutting-edge solution that boosted our business efficiency significantly.",
  },
  {
    name: "Arun Nair",
    designation: "CTO, CodeWorks Inc.",
    image: require("../assets/images/testimonial/4.jpg"),
    review:
      "Their software development services were top-notch. The team was professional, responsive, and delivered high-quality software that met all our requirements.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        title: "Barbera",
        link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
      },
      {
        id: 2,
        title: "Rentop",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
      {
        id: 3,
        title: "Binfoclub",
        link: "https://play.google.com/store/apps/details?id=com.binfoclub.app&pcampaignid=web_share",
      },
      {
        id: 4,
        title: "Prayer Times",
        link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
      },
      {
        id: 5,
        title: "Evans Francis",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
      },
      {
        id: 6,
        title: "HOD",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
      },
      {
        id: 7,
        title: "AutoSnap",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        title: "Klikomics",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 9,
        title: "Ocxee",
        link: "https://apps.apple.com/in/app/ocxee/id1522856353",
      },
      {
        id: 10,
        title: "Dubai Travel Guide",
        link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      { id: 1, title: "Leaderbridge", link: "https://www.leaderbridge.com" },
      { id: 2, title: "Autopilot", link: "https://autopilot.io" },
      { id: 3, title: "Gigzio", link: "https://gigzio.com" },
      { id: 4, title: "FE Group", link: "https://fe.group" },
      { id: 5, title: "Vtalkz", link: "https://vtalkz.com" },
      { id: 6, title: "Think Realty", link: "https://thinkrealty.ae" },
      { id: 7, title: "Bayut", link: "https://www.bayut.com" },
      {
        id: 8,
        title: "5G High Speed Internet",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 9,
        title: "Messina's Catering",
        link: "https://messinascatering.com",
      },
      {
        id: 10,
        title: "Cold Creek Capital",
        link: "https://www.coldcreekcap.com",
      },
    ],
  },
};

// complete service and details
export const services = [
  {
    id: 1,
    title: "AI Development",
    icon: icon1,
    desc: "Transform your business with Znth Tech's tailored AI development solutions. From automating processes to delivering actionable insights, we help you innovate, scale, and stay ahead in a dynamic digital world.",
    detailsPage: {
      banner: require("../assets/images/banners/ai-development.webp"),
      img1: require("../assets/images/service-details/ai-1.jpeg"),
      img2: require("../assets/images/service-details/ai-2.webp"),
      img3: require("../assets/images/service-details/ai-3.jpeg"),
      firstSection: `
        <div class="space-y-6">
   <div class="space-y-4">
    <h2 class="text-xl font-bold">
      Revolutionizing Business with AI
    </h2>
    <p class="">
      In today’s competitive landscape, Artificial Intelligence (AI) has become a transformative force, empowering businesses to streamline operations, enhance customer engagement, and make data-driven decisions.
    </p>
    <p class="">
      At <span class="font-bold text-secondary">Znth Tech</span>, we specialize in crafting tailored AI solutions that enable organizations to unlock the full potential of AI and stay ahead of the curve.
    </p>
   </div>
  </div>`,

      secondSection: `
  <div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Choose AI for Your Business?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Enhanced Efficiency</h3>
        <p class="">
          Automate repetitive tasks and optimize workflows to boost productivity and free your team for strategic initiatives.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Data-Driven Decisions</h3>
        <p class="">
          Leverage the power of AI to process vast amounts of data, uncover actionable insights, and make precise, informed decisions.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Personalized Customer Experiences</h3>
        <p class="">
          Delight your customers with AI-powered tools like chatbots and recommendation systems, delivering tailored experiences that foster loyalty.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Cost Optimization</h3>
        <p class="">
          Save on operational costs with AI-driven solutions such as predictive maintenance, inventory management, and process automation.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Innovation and Scalability</h3>
        <p class="">
          Open the door to new opportunities and ensure your business adapts seamlessly as markets evolve.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our Expertise in AI Development
    </h2>
    <p>
      At Znth Tech, we understand that every business is unique. That’s why we offer customized AI solutions designed to meet your specific needs and goals.
    </p>
    <ul class="space-y-5 list-disc pl-6">
      <li>
        <h3 class="font-bold mb-2">Machine Learning Models</h3>
        <p>
          Build intelligent systems that continuously learn and improve from your data.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Natural Language Processing (NLP)</h3>
        <p>
          Create tools that understand and respond to human language, enhancing communication and efficiency.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Computer Vision</h3>
        <p>
          Harness AI to analyze and interpret visual data for applications in healthcare, security, retail, and more.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Predictive Analytics</h3>
        <p>
          Anticipate trends and outcomes with data-driven forecasting tools.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 2,
    title: "Web Development",
    icon: icon2,
    desc: "Elevate your online presence with Znth Tech’s cutting-edge web development services. We craft responsive, user-centric websites that drive engagement, enhance functionality, and fuel business growth.",
    detailsPage: {
      banner: require("../assets/images/banners/web-development.webp"),
      img1: require("../assets/images/service-details/web-dev-1.webp"),
      img2: require("../assets/images/service-details/web-dev-2.webp"),
      img3: require("../assets/images/service-details/web-dev-3.webp"),
      firstSection: `<div class="space-y-6">
  <div class="space-y-4">
    <h2 class="text-xl font-bold">
      Building Exceptional Websites for Your Business
    </h2>
    <p>
      In today’s digital-first world, a well-crafted website is essential for connecting with your audience and driving business success.
    </p>
    <p>
      At <span class="font-bold text-secondary">Znth Tech</span>, we specialize in creating custom, responsive websites that deliver a seamless user experience, enhance functionality, and fuel your growth.
    </p>
  </div>
</div>
`,
      secondSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Choose Znth Tech for Web Development?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Tailored Solutions</h3>
        <p>
          Every business has unique needs. We design websites that align with your goals, ensuring a personalized approach that sets you apart from the competition.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">User-Centric Design</h3>
        <p>
          Our focus is on creating intuitive and visually compelling websites that engage visitors and turn them into loyal customers.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Responsive & Scalable</h3>
        <p>
          With mobile traffic on the rise, we ensure your website performs flawlessly on any device, scaling to grow with your business.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">SEO-Optimized</h3>
        <p>
          A beautiful website is only effective if people can find it. Our development process integrates SEO best practices to help your site rank higher on search engines and reach your target audience.
        </p>
      </li>
    </ul>
  </div>
</div>
`,

      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our Web Development Process
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Consultation</h3>
        <p>
          We begin by understanding your business, objectives, and vision.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Planning</h3>
        <p>
          We create a roadmap and select the best technologies to bring your ideas to life.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Design & Development</h3>
        <p>
          Our skilled developers build a high-performance website with seamless functionality.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Testing</h3>
        <p>
          We rigorously test to ensure your website is bug-free and user-friendly.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Launch & Support</h3>
        <p>
          After launch, we provide continuous support to keep your website running smoothly and up-to-date.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 3,
    title: "App Development",
    icon: icon3,
    desc: "Take your business to the next level with Znth Tech’s innovative app development services. We design and develop mobile applications that deliver seamless experiences, enhance user engagement, and drive growth.",
    detailsPage: {
      banner: require("../assets/images/banners/app-development.webp"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/app-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-3.webp"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Creating Impactful Mobile Apps for Your Business
          </h2>
          <p>
            In the mobile-first world, having an app that resonates with your audience is crucial for business success.
          </p>
          <p>
            At <span class="font-bold text-secondary">Znth Tech</span>, we specialize in developing high-quality mobile applications that provide an exceptional user experience, enhance functionality, and grow your business.
          </p>
        </div>
      </div>
      `,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Znth Tech for App Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Solutions</h3>
              <p>
                We understand that each business is unique, and we create tailor-made apps that align with your business objectives.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
              <p>
                Our apps are designed to perform seamlessly across multiple platforms, ensuring a consistent experience for all users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">User-Centered Design</h3>
              <p>
                We focus on intuitive design and user engagement, ensuring your app offers a delightful experience for users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalability & Security</h3>
              <p>
                Our apps are built to scale with your business and are secured with the latest technologies to protect your data.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our App Development Process
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Consultation</h3>
              <p>
                We start by understanding your business goals and the vision for your app.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Planning</h3>
              <p>
                We outline the features and functionalities, and select the best approach for development.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Design & Development</h3>
              <p>
                Our team develops a robust and scalable app with an exceptional user interface.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Testing</h3>
              <p>
                We ensure that the app is bug-free, reliable, and performs optimally across all devices.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Launch & Support</h3>
              <p>
                Once launched, we provide ongoing support and maintenance to ensure your app remains up-to-date and functional.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
    },
  },
  {
    id: 4,
    title: "Software Development",
    icon: icon4,
    desc: "Empower your business with Znth Tech’s custom software development solutions. We design scalable, high-performance software tailored to streamline operations and drive growth.",
    detailsPage: {
      banner: require("../assets/images/banners/software-development.webp"),
      img1: require("../assets/images/service-details/software-dev-1.webp"),
      img2: require("../assets/images/service-details/software-dev-2.webp"),
      img3: require("../assets/images/service-details/software-dev-3.webp"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Building Scalable Software for Your Business
          </h2>
          <p>
            In today’s fast-paced digital world, businesses require tailored software solutions that drive efficiency, productivity, and growth.
          </p>
          <p>
            At <span class="font-bold text-secondary">Znth Tech</span>, we specialize in developing high-performance, scalable software solutions that are custom-built to meet your unique business needs and challenges.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Znth Tech for Software Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Solutions</h3>
              <p>
                We design software that aligns with your specific business needs, providing you with tools that optimize operations and enhance productivity.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalable Architecture</h3>
              <p>
                Our solutions are built with scalability in mind, allowing your software to grow and adapt as your business evolves.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Security & Reliability</h3>
              <p>
                We prioritize security, ensuring that your software is protected against vulnerabilities while delivering reliable performance.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">End-to-End Development</h3>
              <p>
                From planning and design to deployment and maintenance, we provide comprehensive software development services that cover all phases of the process.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Expertise in Software Development
          </h2>
          <p>
            At Znth Tech, we combine technical expertise with business acumen to deliver software solutions that drive growth and efficiency.
          </p>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Enterprise Software Solutions</h3>
              <p>
                We create robust and scalable enterprise software systems designed to improve business processes and operations.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Custom Web & Mobile Applications</h3>
              <p>
                Develop personalized web and mobile applications tailored to your business goals and user needs.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cloud-Based Software</h3>
              <p>
                Leverage cloud computing to build flexible and efficient software solutions that can scale with your business.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Software Integration</h3>
              <p>
                Integrate disparate systems and data sources into a unified software solution, ensuring seamless workflow and communication.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 5,
    title: "IT Consultancy and Strategy",
    icon: icon5,
    desc: "Navigate the digital landscape with confidence using Znth Tech’s IT consultancy and strategy services. We provide expert guidance to align technology with your business goals and drive sustainable growth.",
    detailsPage: {
      banner: require("../assets/images/banners/it-consulting.webp"),
      img1: require("../assets/images/service-details/it-consulting-1.webp"),
      img2: require("../assets/images/service-details/it-consulting-2.webp"),
      img3: require("../assets/images/service-details/it-consulting-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Aligning Technology with Your Business Goals
            </h2>
            <p>
              In today’s fast-evolving digital world, businesses need to leverage technology to stay ahead. Our IT consultancy and strategy services help you navigate complex technology challenges and align solutions with your business goals.
            </p>
            <p>
              At <span class="font-bold text-secondary">Znth Tech</span>, we work closely with your team to understand your unique needs, analyze current systems, and design a strategic roadmap that drives digital transformation and business growth.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Znth Tech for IT Consultancy?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Expert Guidance</h3>
                <p>
                  Our experienced consultants provide valuable insights to help you make informed decisions and avoid costly mistakes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Tailored Solutions</h3>
                <p>
                  We take the time to understand your business challenges and craft personalized strategies that align with your goals.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Digital Transformation</h3>
                <p>
                  We guide you through digital transformation, implementing the latest technologies to enhance efficiency, productivity, and customer satisfaction.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Optimization</h3>
                <p>
                  We help you optimize your technology investments, ensuring you get the most value from your IT infrastructure while reducing unnecessary costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability & Future-Proofing</h3>
                <p>
                  Our solutions are designed to scale as your business grows and evolve with emerging trends and technologies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our IT Consultancy Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Discovery & Analysis</h3>
                <p>
                  We begin by thoroughly understanding your business, objectives, and existing IT infrastructure.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Strategy Design</h3>
                <p>
                  Based on our analysis, we craft a strategic roadmap that includes technology recommendations and implementation plans.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Implementation & Integration</h3>
                <p>
                  We support the implementation of recommended strategies and ensure seamless integration with your current systems.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Ongoing Support & Optimization</h3>
                <p>
                  After implementation, we provide continuous support to optimize systems, improve performance, and ensure long-term success.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "IT Infrastructure Management",
    icon: icon6,
    desc: "Optimize your IT operations with Znth Tech’s comprehensive infrastructure management services. We ensure seamless, secure, and scalable solutions that support your business’s evolving needs.",
    detailsPage: {
      banner: require("../assets/images/banners/it-infrastructure.webp"),
      img1: require("../assets/images/service-details/it-infrastructure-1.webp"),
      img2: require("../assets/images/service-details/it-infrastructure-2.webp"),
      img3: require("../assets/images/service-details/it-infrastructure-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Strengthen Your Business with Robust IT Infrastructure
            </h2>
            <p>
              Znth Tech’s IT Infrastructure Management services are designed to ensure your business operates at peak efficiency. From data center management to network support, we handle the complexities of infrastructure, allowing you to focus on growth and innovation.
            </p>
            <p>
              Our team of experts ensures your infrastructure is always secure, reliable, and scalable, giving you the peace of mind to focus on your core business operations.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Znth Tech for IT Infrastructure Management?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Scalability</h3>
                <p>
                  We help you scale your IT infrastructure as your business grows, ensuring that your technology can handle future demands.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security & Compliance</h3>
                <p>
                  Our solutions ensure that your infrastructure is secure, complying with industry standards and regulations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">24/7 Monitoring & Support</h3>
                <p>
                  We provide continuous monitoring and support, ensuring that your IT systems are always available and performing optimally.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Our managed services reduce operational costs and eliminate the need for in-house infrastructure teams, allowing you to allocate resources more effectively.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Proactive Management</h3>
                <p>
                  We anticipate potential issues and take proactive steps to ensure your IT infrastructure runs smoothly, reducing the risk of downtime.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our IT Infrastructure Management Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Infrastructure Assessment</h3>
                <p>
                  We begin by evaluating your existing IT infrastructure, identifying any areas that need improvement and ensuring alignment with your business needs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Implementation</h3>
                <p>
                  Our experts design a customized infrastructure solution tailored to your business, implementing it with minimal disruption to your daily operations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Ongoing Management & Support</h3>
                <p>
                  After implementation, we provide ongoing management and support to ensure your systems remain secure, up-to-date, and efficient.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Optimization</h3>
                <p>
                  We continuously monitor and optimize your IT infrastructure to ensure maximum performance, cost-efficiency, and scalability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
