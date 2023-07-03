import React, { useState } from 'react';

const AccountForm = ({ addAccount }) => {
  const [name, setName] = useState('');
  const [accountNumber, setaccountNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && accountNumber.trim() !== ''  && email.trim() !== '') {
      addAccount(name,accountNumber,email);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:'25%' ,margin:'10px'}} className="p-4 bg-white">
      <input
        type="text"
        placeholder="Account name"
        className='form-control mt-3'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
            <input
        type="text"
        placeholder="Account number"
        className='form-control mt-3'
        required
        value={accountNumber}
        onChange={(e) => setaccountNumber(e.target.value)}
      />
            <input
        type="email"
        placeholder="example@gmail.com"
        className='form-control mt-3'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='btn bg-success mt-4 mb-5' type="submit">Add Account</button>
    </form>
  );
};

export default AccountForm;
