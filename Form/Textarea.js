import React from 'react'
function Textarea() {
    return (
     <div className='rating'>
        <div className='pharagraph' style={{maxWidth:"200px"}}>
          <h3> Do you have anything else you'd like us to know?</h3>
        </div>
        <div className='textarea'>
          <label className='text-area'>
            <textarea
              name="postContent"
              defaultValue="I really enjoyed biking yesterday!"
              rows={4}
              cols={40}
            />
          </label>
        </div>
     </div>
    );
  }
  
export default Textarea