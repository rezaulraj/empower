import React, { useEffect } from "react";
import dialogImg from "../assets/Pickaboo-01.jpg";
const DialogPage = () => {
  const listItem = [
    {
      list: "Offer Validity – Till 15th May 2025",
    },
    {
      list: "Campaign Eligible products:",
      link: "https://cutt.ly/pkbbrac ",
    },
    {
      list: "The discount is applicable for both Debit and Credit Cards",
    },
    {
      list: "The AC Purchase must be made from pickaboo.com (Online only)",
    },
    {
      list: "The Payment must be made with a valid BRAC Bank Card",
    },
    {
      list: "EMI tenures can vary based on the specific product",
    },
    {
      list: "Installation charges applicable as per Pickaboo’s own policy",
    },
    {
      list: "Clubbing of the offers is the sole discretion of Pickaboo.com",
    },
    {
      list: "BRAC Bank retains the right to discontinue the offer without any prior notice.",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="m-4 border border-gray-300">
        <img src={dialogImg} alt="" className="w-full" />
        <div className="p-8 space-y-4">
          <h2 className="text-xl font-bold font-poppins">Offer:</h2>
          <p className="font-poppins text-lg font-semibold">
            Enjoy Up to 40% on your AC Purchase from Pickaboo.com with your BRAC
            Bank Cards!
          </p>
          <h2 className="text-xl font-bold font-poppins">Terms & Conditions</h2>
          <ul className="space-y-2 px-4" style={{ listStyleType: "square" }}>
            {listItem.map((list, idx) => (
              <li key={idx} className="text-lg font-roboto marker:text-black">
                {list.list}{" "}
                {list?.link && (
                  <a href={list.link} className="text-blue-700 underline">
                    {list.link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/empowerment-group?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=e40104"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default DialogPage;
