import React from 'react';

const Contact = _ => (
  <aside id="contact-me">
    <header>
      <h1>Contact Me</h1>
      <p>Please feel free to drop a line with compliments and good vibes!</p>
    </header>
    <form action="#" method="post">
      <div className="form-field">
        <label for="user_name">Name</label>
        <br />
        <input type="text" name="user_name" required />
      </div>
      <div className="form-field">
        <label for="user_email">Email</label>
        <br />
        <input type="email" name="user_name" required />
      </div>
      <div className="form-field">
        <input type="submit" value="Contact me! 😃" />
      </div>
    </form>
  </aside>
);

export default Contact;
