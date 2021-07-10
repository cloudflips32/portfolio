import React from 'react';

const Form = () => {
  return (
    <div className='section' id='form'>
      <div className="form-group">
        <div className="item">
          <h3>Take a moment, and tell me what you think!</h3>
          <form action="https://formspree.io/mwkrgdjn" method="POST">
            <label for="name">Name:</label>
            <input id="name" type="text" name="name" autoComplete="name" required maxLength="25" />
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required maxLength="30" />
            <label for="phone">Phone #:</label>
            <input type="tel" name="phone" id="phone" maxLength="14" />
            <label for="textarea">Comments:</label>
            <textarea name="textarea" id="textarea" cols="30" rows="10" maxLength='48'></textarea>
            <button type="submit"><b>Submit</b></button>
            <button type="reset"><b>Clear</b></button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Form;
