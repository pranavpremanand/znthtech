// import React, { useEffect, useState } from "react";

// const TranslateComponent = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");

//   useEffect(() => {
//     // Add Google Translate script dynamically
//     const addGoogleTranslateScript = () => {
//       if (!document.querySelector("#google-translate-script")) {
//         const googleTranslateScript = document.createElement("script");
//         googleTranslateScript.id = "google-translate-script";
//         googleTranslateScript.src =
//           "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//         document.body.appendChild(googleTranslateScript);
//       }
//     };

//     // Initialize Google Translate widget
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,fr,hi,ml", // Languages: English, French, Hindi, Malayalam

//           layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };

//     addGoogleTranslateScript();
//   }, []);

//   const changeLanguage = (language) => {
//     setSelectedLanguage(language);

//     // Wait for Google Translate iframe to load
//     const interval = setInterval(() => {
//       const iframe = document.querySelector("iframe.goog-te-menu-frame");
//       if (iframe) {
//         const iframeDocument =
//           iframe.contentDocument || iframe.contentWindow.document;

//         // Find the language option and trigger a click
//         const languageSelector = iframeDocument.querySelector(
//           `.goog-te-menu2-item span[lang="${language}"]`
//         );

//         if (languageSelector) {
//           languageSelector.click(); // Trigger Google Translate language selection
//           clearInterval(interval); // Stop checking once the click is triggered
//         }
//       }
//     }, 500);

//     // Clear the interval after 10 seconds to prevent infinite loops
//     setTimeout(() => clearInterval(interval), 10000);
//   };

//   return (
//     <div>
//       {/* Hidden Google Translate widget */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>

//       {/* Custom dropdown for language selection */}
//       <select
//         value={selectedLanguage}
//         onChange={(e) => changeLanguage(e.target.value)}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//         }}
//       >
//         <option value="en">English</option>
//         <option value="fr">French</option>
//         <option value="hi">Hindi</option>
//         <option value="ml">Malayalam</option>
//       </select>
//     </div>
//   );
// };

// export default TranslateComponent;
