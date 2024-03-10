# Portfolio
  
  ## Description
  
  My motivation for this project was to make a personal portfolio page using React in order to display and present my work to potential employers.  Right now I'm still working on my resume and projects to display so currently this is populated with placeholders.
  
  
  ## Installation
  
  This was a "from scratch" project so my first step was pseudocoding and setting up the file directories.  I used Vite for the initial setup.

  Once that was done I started working on the structure in my App.jsx as well and adding all of the pages and components that I need to make it run.

  I started on the Home page as well as the Header and Footer components.  Getting these to behave correctly took some trial and error and some additional CSS (see: .footer-stick).

  Then I moved on to the portfolio page.  I created a component called Project that I use to pass in via props each project information and image.  The Project compontent renders each one in uniform fasion.  I'm using placeholders here for now, but the structure is there to populate with my actual projects once I finalize what I want to show employers.

  Next I move to the Contact page.  I have everything in there to handle the submission but it's blank for now.  Once I decide how to handle submission (email me?  text me?  store to db?) it will be an easy plug and play.

  Finally the resume page is set up with a generic John Doe resume.  I'm still working on getting my resume finalized, when I do have it ready later this week I will plug it in.

  ## Usage

  Here is a link to my deployed site: [Tyler Peterson Portfolio](https://main--tyler-peterson-portfolio.netlify.app/)
  
  The user begins at the homepage with a picture of me and a brief statement:

  ![Screenshot Whole Portfolio](https://github.com/tylerpeterson8791/portfolio/assets/75902133/d8b8b48f-7d21-447d-ae29-46810db073b9)

 At the top of the page there is a navbar that allows the user to go to my portfolio, contact me or see my resume:

![Screenshot Nav Bar](https://github.com/tylerpeterson8791/portfolio/assets/75902133/19cc2e4a-9a55-42ab-9ade-39bfe06ad87f)


  ## Credits

  Almost everything used in this application was learned in class so shout out to Gary, Katy and the cirriclum team.

  I used React-Bootstrap for formatting.  Their documentation can be found here:  [React-bootstrap](https://react-bootstrap.netlify.app/)https://react-bootstrap.netlify.app/

  I also used the library React-Router-Dom (specifically for the "Link" method.  Their NPM page is found here: [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

