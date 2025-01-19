import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import ProgressBar from './components/ProgressBar';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    plan: "",
    isYearly: "",
    addOns: ""
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const change = () => setCurrentStep((prev) => prev - 2);

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="bg-sky-100  h-[100vh] flex justify-center items-center py-10  ">
      <div className="bg-white min-h-fit border flex gap-[6em] justify-start items-center rounded-[30px] w-full max-w-4xl py-[1rem] max-sm:grid">
       <div >
          <ProgressBar step={currentStep} />
       </div>
      <div>
        {currentStep === 1 && <Step1 nextStep={nextStep} updateFormData={updateFormData} />}
        {currentStep === 2 && <Step2 prevStep={prevStep} nextStep={nextStep} updateFormData={updateFormData} />}
        {currentStep === 3 && <Step3 prevStep={prevStep} nextStep={nextStep} updateFormData={updateFormData} />}
        {currentStep === 4 && <Step4 prevStep={prevStep} nextStep={nextStep} change={change} updateFormData={updateFormData} formData={formData} />}
        {currentStep === 5 && <Step5 prevStep={prevStep} formData={formData} />}
      </div>
      </div>
    </div>
  );
}

export default App;
