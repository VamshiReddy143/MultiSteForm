import React, { useState } from 'react';

function Step1({ nextStep, updateFormData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');   
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});





    const validateForm = () => {
        const newErrors = {};
        if (!email.includes('@')) {
          newErrors.email = 'Invalid email address';
        }
        if (!phone.match(/^[0-9]+$/) || phone.length < 10) {
          newErrors.phone = 'Phone number must be 10 digits';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          updateFormData('name', name);
          updateFormData('email', email);
          updateFormData('phone', phone);
          nextStep();
        }
  };

  return (
  
   <form className='flex flex-col gap-5 ' onSubmit={handleSubmit}>
     <div>
        <h1 className='font-bold text-[2em]'>Personal info</h1>
        <p className='text-gray-500'>Please provide your name, email address, and phone number.</p>
    </div>     
     <div className='flex flex-col gap-2'>
      <div className='mt-3'>
      <p className='mb-2'>Name</p>
        <input
        className='p-3 border border-gray-400 bg-transparent  rounded-md w-full'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='e.g. Stephen King'
          required
        />
      </div>

    <div className='mt-3'>
    <p className='mb-2'>Email address</p>
        <input
        className='p-3 border border-gray-300 bg-transparent  rounded-md w-full'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='e.g. 6oM3T@example.com'
          required
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
    </div>

    <div className='mt-3'>
    <p className='mb-2'>Phone Number</p>
      <input
        className='p-3 border border-gray-300 bg-transparent  rounded-md w-full'
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='e.g. +1 234 567 890'
          required
        />
    </div>

{errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
     </div>
      <div className='flex justify-end pt-9'>
      <button type='submit'  className='bg-button px-5  text-white p-2 rounded'>Next Step</button>
      </div>
   </form>
      
  );
}

export default Step1;
