import React from "react";
import { CoolMode } from "./ui/cool-mode";
import { Button } from "./ui/button";

const Step4 = ({ nextStep, prevStep, formData, change }) => {
  const addOns = [
    { name: "Online Services", price: 1, isActive: formData?.addOns?.onlineServices },
    { name: "Larger Storage", price: 2, isActive: formData?.addOns?.largerStorage },
    { name: "Customizable Profile", price: 2, isActive: formData?.addOns?.customizableProfile },
  ];

  const planPrices = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  const basePrice = planPrices[formData?.plan] || 0;
  const addOnTotal = addOns
    .filter((addOn) => addOn.isActive)
    .reduce((total, addOn) => total + addOn.price, 0);

  const total = formData?.isYearly
    ? basePrice * 12 + addOnTotal
    : basePrice + addOnTotal;

  const planPrice = formData?.isYearly
    ? `${basePrice * 12}/yr`
    : `${basePrice}/mo`;

  return (
    <div className="flex flex-col py-8 px-4 items-center max-w-screen-sm mx-auto">
      {/* Header Section */}
      <div className="pb-5 text-start w-full">
        <h1 className="text-3xl font-bold">Finish up</h1>
        <p className="text-gray-500">Double-check everything looks OK before confirming.</p>
      </div>

      {/* Summary Section */}
      <div className="w-full bg-gray-100 rounded-xl p-5">
        {/* Plan Details */}
        <div className="flex justify-between items-center bg-gray-300 p-4 rounded-xl mb-3">
          <div>
            <h2 className="font-bold text-lg">{formData?.plan}</h2>
            <button onClick={change} className="text-blue-500 underline hover:text-blue-700">
              Change
            </button>
          </div>
          <p className="font-bold text-lg">{planPrice}</p>
        </div>

        <hr className="my-3 border-gray-400" />

        {/* Add-Ons */}
        <div
          className="flex flex-col gap-2 max-h-[90px] overflow-auto" 
          style={{ minHeight: "90px" }} 
        >
          {addOns.map(
            (addOn, index) =>
              addOn.isActive && (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-300 rounded-xl">
                  <p>{addOn.name}</p>
                  <p>{`+$${addOn.price}/mo`}</p>
                </div>
              )
          )}
        </div>
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center w-full mt-5 px-4">
        <p className="text-lg font-bold">
          Total {formData?.isYearly ? "(per year)" : "(per month)"}
        </p>
        <p className="font-bold text-blue-500 text-lg">
          {formData?.isYearly ? `$${total}/yr` : `$${total}/mo`}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-300 text-lg font-medium"
        >
          Go Back
        </button>
        <CoolMode>
          <Button onClick={nextStep} className="px-6 py-6 text-lg">
            Next Step
          </Button>
        </CoolMode>
      </div>
    </div>
  );
};

export default Step4;
