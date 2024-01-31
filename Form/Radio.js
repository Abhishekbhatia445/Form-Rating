import React from 'react';

function Radio() {
  return (
    <div className='rating'>
      <div className='pharagraph' style={{ maxWidth: "200px" }}>
        <h3>
          Are your team mates helpful to each other?
        </h3>
      </div>
      <div className='radio-grid'>
        <label className='q1'>
          <input className='rad' type='radio' value="ab" name='helpful' /> <h5>Yes-totally</h5>
        </label>
        <label className='q1'>
          <input className='rad' type='radio' value="cd" name='helpful' />
          <h5> A bit</h5>
        </label>
        <label className='q1'>
          <input className='rad' type='radio' value="ef" name='helpful' />
          <h5>No way</h5>
        </label>
      </div>
    </div>
  );
}

export default Radio;
