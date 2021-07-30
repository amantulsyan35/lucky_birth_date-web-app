import React, { useState } from 'react';

import './Birthday.css';

const Birthday = () => {
  const [luckyNumber, setLuckyNumber] = useState('');
  const [birthday, setBirthday] = useState(Date());
  const [privacy, setPrivacy] = useState(true);
  const [isLucky, setIsLucky] = useState(false);
  const [isNotLucky, setIsNotLucky] = useState(false);

  let sum = 0;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let arr = birthday.split('-');
    const reducer = (accumulator, curr) => accumulator + curr;
    let number = arr.reduce(reducer);
    while (number) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    // setTotal(sum);
    if (sum % luckyNumber === 0) {
      setIsLucky(true);
    } else {
      setIsNotLucky(true);
    }
  };

  const remove = () => {
    setPrivacy(false);
  };

  return (
    <div className='Birthday' id='scroll'>
      {privacy === true && (
        <div className='Birthday-privacy'>
          <p>
            <strong>Privacy Notice!</strong> We are not storing your data.
          </p>

          <span onClick={remove}>
            <i className='fas fa-times'></i>
          </span>
        </div>
      )}
      <h2 className='Birthday-heading'>
        Enter Your Birthdate and lucky number to continue...
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='Birthday-form-group'>
          <label>Select your Birth date:</label>
          <input
            type='date'
            onChange={(evt) => setBirthday(evt.target.value)}
            value={birthday}
          />
        </div>
        <div className='Birthday-form-group'>
          <label>Enter your Lucky Number:</label>
          <input
            type='number'
            onChange={(evt) => setLuckyNumber(Number(evt.target.value))}
            value={luckyNumber}
          />
        </div>
        <button className='Birthday-button'>Check</button>
      </form>
      {isLucky && (
        <div className='Birthday-hide'>
          <p>Hurray!!You are a lucky person!</p>
          <div className='Birthdate-image-container'>
            <img
              src='https://cdn.dribbble.com/users/544218/screenshots/3320844/luckycorgdribbble.jpg?compress=1&resize=400x300'
              alt='happy'
            />
          </div>
        </div>
      )}
      {isNotLucky && (
        <div className='Birthday-hide'>
          <p>Sorry You Are Not A Lucky Person</p>
          <div className='Birthdate-image-container'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6qLLynBTGQeb0aqlD_X4DIM7HdxTKyDxhg&usqp=CAU'
              alt='sad'
            />
          </div>
        </div>
      )}
      <div className='Birthday-footer'>
        <div className='Birthday-footer-social'>
          <a href='https://github.com/amantulsyan35'>
            <i className='fab fa-github-alt'></i>
          </a>
          <a href='https://twitter.com/aman_fullstack'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.linkedin.com/in/aman-tulsyan-88335b17a/'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='https://www.amantulsyan.com/'>
            <i className='fas fa-briefcase'></i>
          </a>
        </div>
        <p>© 2020 | Aman Tulsyan | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Birthday;
