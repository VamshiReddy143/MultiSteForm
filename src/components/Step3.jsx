import React, { useState } from 'react';
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Step3({ nextStep, prevStep, updateFormData }) {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxChange = (field) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData("addOns", selectedAddOns); 
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col py-3  justify-center items-center">
      <div className="flex flex-col gap-5 ">

        <div className="pb-5 text-start">
          <h1 className="text-3xl font-bold">Pick add-ons</h1>
          <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>
        </div>

 
        <div
          className={`${
            selectedAddOns.onlineServices ? "border-DarkBlue" : "border-gray-400"
          } flex items-center gap-5 p-3 border-2 rounded-xl   hover:border-DarkBlue  `}
        >
          <input
            type="checkbox"
            checked={selectedAddOns.onlineServices}
            onChange={() => handleCheckboxChange("onlineServices")}
            className="checkbox theme-controller border border-gray-400 "
          />
          <div>
            <h1 className="font-bold text-lg">Online services</h1>
            <p className="text-sm text-gray-500">Access to multiplayer games</p>
          </div>
          <p className="ml-auto font-medium">+$1/mo</p>
        </div>

        <div
          className={`${
            selectedAddOns.largerStorage ? "border-DarkBlue" : "border-gray-400"
          } flex items-center gap-5 p-3 border-2 rounded-xl hover:border-DarkBlue`}
        >
          <input
            type="checkbox"
            checked={selectedAddOns.largerStorage}
            onChange={() => handleCheckboxChange("largerStorage")}
            className="checkbox theme-controller border border-gray-400"
          />
          <div>
            <h1 className="font-bold text-lg">Larger storage</h1>
            <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
          </div>
          <p className="ml-auto font-medium">+$2/mo</p>
        </div>

        <div
          className={`${
            selectedAddOns.customizableProfile ? "border-DarkBlue" : "border-gray-400"
          } flex items-center gap-5 p-3 border-2 rounded-xl hover:border-DarkBlue`}
        >
          <input
            type="checkbox"
            checked={selectedAddOns.customizableProfile}
            onChange={() => handleCheckboxChange("customizableProfile")}
            className="checkbox theme-controller border border-gray-400"
          />
          <div>
            <h1 className="font-bold text-lg">Customizable profile</h1>
            <p className="text-sm text-gray-500">Custom theme on your profile</p>
          </div>
          <p className="ml-auto font-medium">+$2/mo</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-10 w-full justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-200 px-5 py-2 rounded-md">
          Back
        </button>
        <InteractiveHoverButton type="submit">Next Step</InteractiveHoverButton>
      </div>
    </form>
  );
}

export default Step3;
