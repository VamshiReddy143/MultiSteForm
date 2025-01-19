import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Step2({ nextStep, prevStep, updateFormData }) {

    const [plan, setPlan] = useState('');
    const [yearly, setYearly] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData("isYearly", yearly ? "Yearly" : "Monthly");
        updateFormData("plan", plan);
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit} className='flex h-[30em]  flex-col items-start justify-center  w-full gap-5 '>
            <div>
                <h1 className='text-4xl font-bold pb-2'>Select your plan</h1>
                <p className="text-lg">You have the option of monthly or yearly billing</p>
            </div>

            {/* Plan options */}
            <div className={`flex  gap-10 ${yearly ? 'mr-17' : ''} justify-center`}>
                {['Arcade', 'Advanced', 'Pro'].map((planOption) => (
                    <div
                        key={planOption}
                        onClick={() => setPlan(planOption)}
                        className={`flex w-[150px] flex-col items-start p-5 border-2 rounded-xl hover:border-DarkBlue cursor-pointer transition-all duration-300
                            ${plan === planOption ? 'border-blue-600' : 'border-gray-400'} h-[200px] w-[150pxpx]`} // Fixed height
                    >
                        <img className='h-[60px] pb-5' src={`../assets/icon-${planOption.toLowerCase()}.svg`} alt={`${planOption} icon`} />
                        <h1 className='font-bold text-xl'>{planOption}</h1>
                        <p>{yearly ? `$${planOption === 'Arcade' ? '9' : planOption === 'Advanced' ? '12' : '15'}/mo` : `$${planOption === 'Arcade' ? '9' : planOption === 'Advanced' ? '12' : '15'}/mo`}</p>
                        {yearly && <h2 className="text-sm text-blue-900">2 months free</h2>}
                    </div>
                ))}
            </div>

            {/* Switch for Monthly / Yearly */}
            <div className="flex items-center justify-center space-x-2 bg-gray-100 p-4 w-[33em] my-5 rounded-xl">
                <Label htmlFor="payment">Monthly</Label>
                <Switch id="payment" onClick={() => setYearly(!yearly)} />
                <Label htmlFor="payment">Yearly</Label>
            </div>

            {/* Navigation buttons */}
            <div className="flex mt-1 w-[33em] justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-300"
                >
                    Back
                </button>
                <InteractiveHoverButton type="submit bg-button">Next Step</InteractiveHoverButton>
            </div>
        </form>
    );
}

export default Step2;
