const portfolioData = {
  //   Header Details ---------------------
  firstName: 'Anurag',
  lastName: 'Shenoy',
  headerTaglines: [
    'I’m a Software Engineer based in the US,',
    'passionate about AI-driven solutions.',
  ],
  headerSubtitle: 'Currently open to work, I’m looking for opportunities to make an impact.',
  //   Header Paragraph
  headline: 'I’m a Software Engineer based in the US, passionate about AI-driven solutions.',
  // headerParagraph:
  //   'Software Engineer specialized in ML with over 5 years of experience in building ML / AI models and web applications.',
  lookBelow: 'Scroll down to see how I bring ideas to life',

  // End Header Details -----------------------

  // About Section --------------
  aboutParaOne:
    'Graduated with a Masters in Computer Science from the University of Florida, and am actively looking for opportunities.',
  aboutParaTwo:
    'I use Natural Language Processing and other Deep Learning technologies to enable computers to interact with the world around them. I’m intrigued by the human brain and its capacity to process information, categorize objects, recognize patterns and form intelligent thoughts seemingly effortlessly unlike machines (so far).',
  aboutParaThree:
    'When I’m not developing software or being lost in thought, I like to read books, play football (soccer), play the piano, listen to music, hiking, biking and leather-crafting.',
  aboutImage: 'https://i.imgur.com/0rnoUPB.png',

  //   End About Section ---------------------

  //   Contact Section --------------

  contactSubHeading: "Let's build something great together.",
  contactPhoneNumber: '',
  resume: {
    urlPdf: process.env.NEXT_RESUME_PDF,
    urlDoc: process.env.NEXT_RESUME_DOC,
  },

  // -------------- End Contact Section ---------------
}

module.exports = portfolioData
