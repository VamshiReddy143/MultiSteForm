import React from 'react';

function ProgressBar({ step }) {
  return (
    <div className="gap-10 p-[3.5em]  relative">
      <img
        className="absolute top-[-30%] right-[-8%] rounded-xl z-0"
        src="/assets/bg-sidebar-desktop.svg"
        alt="Background"
      />
      <div className="flex flex-col gap-5  items-start z-10 top-[-110px]  relative"> {/* Add relative here */}
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`progress-step ${step === num ? 'active' : ''} flex gap-4 z-10`}
          >
            <p
              className={`h-[30px] w-[30px] text-center flex flex-col justify-center z-10 border rounded-full ${step === num ? 'bg-sky-100 text-blue-600' : 'text-white'
                }`}
            >
              {num}
            </p>


            <div className="text-white z-10 items-start flex flex-col relative ">
              <p className="text-[10px] text-gray-300">{`STEP ${num}`}</p>
              <p className="text-[12px] font-bold ">
                {num === 1
                  ? 'YOUR INFO'
                  : num === 2
                    ? 'SELECT PLAN'
                    : num === 3
                      ? 'ADD-ONS'
                      : 'SUMMARY'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
