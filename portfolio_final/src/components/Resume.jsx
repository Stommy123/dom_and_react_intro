import React from 'react';

const Resume = _ => (
  <aside id="resume">
    <a href="#">
      <i class="far fa-arrow-alt-circle-up" />
    </a>
    <h1>Resume</h1>
    <header>
      <h2>This Student</h2>
      <address>
        <a href="foo.com">| 305 299 0906 | </a>
        <a href="bar.com"> Tommy@Tommy.com | </a>
        <a href="hello.com"> Tommy.com | </a>
        Happy Street 1919, Miami, Florida, USA
      </address>
    </header>
    <hr />
    <ol>
      <li>
        <h3>Technical Skills</h3>
        <ul>
          <li>Languages: HTML, CSS, Javascript</li>
          <li>Languages: HTML, CSS, Javascript</li>
          <li>Languages: HTML, CSS, Javascript</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae molestiae totam voluptas, voluptates nisi
          assumenda, maxime autem nobis ab fugiat perferendis quisquam architecto aperiam minima recusandae saepe
          expedita, nam esse!
        </p>
      </li>
      <li>
        <h3>Experience</h3>
        <ul>
          <li>
            <h4>
              The One Place - "<small>2000-2010</small>"
            </h4>
            <ul>
              <li>I did this</li>
              <li>I did that</li>
            </ul>
          </li>
          <li>
            <h4>
              The Other Place - "<small>2000-2010</small>"
            </h4>
            <ul>
              <li>I did this</li>
              <li>I did that</li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>
  </aside>
);

export default Resume;
