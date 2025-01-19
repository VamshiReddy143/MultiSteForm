import React from 'react'
import SparklesText from './ui/sparkles-text'

const Step5 = ({formData}) => {
  return (
    <div className='flex flex-col items-center gap-5 py-[6rem] '>
        <img src='../assets/icon-thank-you.svg'/>
        <SparklesText text="Thank you!" />;
        <p className='text-center w-[28rem] text-gray-500'>{`Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com`}</p>
    </div>
  )
}

export default Step5