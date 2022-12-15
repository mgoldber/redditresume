import axios from 'axios';

const url = process.env.VUE_APP_API_URL;
export default {
  fetch_top_posts: ({ commit }) => {
    let topPostsArray = [
      {
        "subredditName": "jobs",
        "title": "Product Manager & Instructor",
        "author": "JunoCollegeOfTechnology",
        "body": "Beginning as a Product Manager for the JavaScript course, I coordinated with the various instructors of the course, managed all aspects of the course content, created a variety of sample projects, as well as instructing the course myself. Following this, I managed the Full Stack course (which uses the MERN stack), and completed a curriculum rewrite.",
        "votes": "1011",
        "dateRange": "01/05/2019 - 12/15/2019",
        "img": "junocollege_logo.jpg",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Technical Analytics Specialist",
        "author": "Hootsuite",
        "body": "I worked on the end to end process of launching new customers on the Hootsuite Impact product. This included troubleshooting technical issues, coordinating with the social media representatives at various companies, and working with the product teams to plan for features to smoothen the overall process.",
        "votes": "710",
        "dateRange": "08/01/2018 - 12/10/2018",
        "img": "hootsuite_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Developer, Business Operations",
        "author": "League",
        "body": "I assisted with the implementation and validation for all new company benefit packages on the platform. I was also the first point of contact for customer application issues, which required an end to end knowledge of the entire application and tech stack.",
        "votes": "625",
        "dateRange": "06/01/2017 - 05/01/2018",
        "img": "league_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Technical Project Coordinator - Internship",
        "author": "Magnet Forensics",
        "body": "I worked closely with all of the teams in the company to keep our bi-weekly releases on track. I ran the sprint retrospective and planning meetings, and created a Python tool to pull data from JIRA and graph useful metrics.",
        "votes": "501",
        "dateRange": "01/01/2017 - 04/01/2017",
        "img": "magnetforensics_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Software Developer - Internship",
        "author": "Apple Inc.",
        "body": "I worked on the development of internal tools to improve the Localization and Release Engineering process. This included close coordination with various internal teams using the tooling, and full stack development in Rails and Angular. In addition, my team entered the internal App Store marketing challenge and finished 3rd out of 30 teams.",
        "votes": "120",
        "dateRange": "04/01/2015 - 12/01/2015 & 04/01/2016 - 09/01/2016",
        "img": "apple_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Software Developer - Internship",
        "author": "NthGen Software - Creators of TradeRev.",
        "body": "This was where I learned the ropes of professional development. I started off by working on Front End development using HTML5, CSS, and templating. I then transitioned into backend work, getting experience with Grails, and Java.",
        "votes": "100",
        "dateRange": "05/01/2014 - 12/01/2014",
        "img": "traderev_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "projects",
        "title": "SelfieRun - iPhone Game",
        "author": "Mark Goldberg",
        "body": "I developed a mobile game for iPhone using Swift 4, and released it to the App Store. The game is a side scroller that has you running around taking selfies to accumulate likes, with powerups helping the process, and the ability to become an influencer when you collect enough power ups. The game had Google Ads integrated, of which I made $0, but had good fun with the process.",
        "votes": "871",
        "dateRange": "06/01/2018 - 12/01/2018",
        "img": "selfierun.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "projects",
        "title": "Teching Out Podcast",
        "author": "Mark Goldberg",
        "body": "I launched a technology podcast in February of 2020 that focuses on the intersection of humanity and tech, strongly emphasizing the importance of mental health. The podcast has over 1300 downloads, and 50+ five star reviews in the Podcast store. The podcast had a 4 episode sponsor from Ordinary Supply, a maker of quality custom branded merch based in Toronto. www.techingoutpod.com",
        "votes": "499",
        "dateRange": "02/01/2020 - Present",
        "img": "techingoutcover.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "AMA",
        "title": "My name is Mark and this is my website. Ask me anything...",
        "author": "Mark Goldberg",
        "body": "Very excited to be doing this AMA where I may or may not be just answering questions I’ve asked myself",
        "votes": "612",
        "dateRange": "05/07/2020",
        "img": "headshot_1.jpg",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Senior Product Manager",
        "author": "GoBolt",
        "body": "The first Product Manager hire for GoBolt. Worked on the Merchant Experience team, responsible for the portal the merchant uses to get information about their shipments, orders, inventory, etc.",
        "votes": "1500",
        "dateRange": "06/15/2020 - Present",
        "img": "GoBolt_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      }
    ]     
    axios
      .get(`/`)
      .then(() => {
        // posts should already be sorted by vote, if not fix here
        topPostsArray = topPostsArray.sort(function(a, b) {
          return b['votes'] - a['votes'];
        });
        topPostsArray.forEach(post => {
          commit('APPEND_TOP_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_all_subreddits: ({ commit }) => {
    const allSubs = [
      {
        "name": "home"
      },
      {
        "name": "jobs"
      },
      {
        "name": "projects"
      },
      {
        "name": "AMA"
      }
    ]
    axios
      .get(`/`)
      .then(() => {
        allSubs.forEach(subreddit => {
          // Capitalize the first letter of the subreddit name
          subreddit.name =
            subreddit.name.charAt(0).toUpperCase() + subreddit.name.slice(1);
          commit('APPEND_SUBREDDIT', subreddit);
        });
      })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  fetch_posts_for_jobs: ({ commit }) => {
    let jobsArray = [
      {
        "subredditName": "jobs",
        "title": "Product Manager & Instructor",
        "author": "JunoCollegeOfTechnology",
        "body": "Beginning as a Product Manager for the JavaScript course, I coordinated with the various instructors of the course, managed all aspects of the course content, created a variety of sample projects, as well as instructing the course myself. Following this, I managed the Full Stack course (which uses the MERN stack), and completed a curriculum rewrite.",
        "votes": "1011",
        "dateRange": "01/05/2019 - 12/15/2019",
        "img": "junocollege_logo.jpg",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Technical Analytics Specialist",
        "author": "Hootsuite",
        "body": "I worked on the end to end process of launching new customers on the Hootsuite Impact product. This included troubleshooting technical issues, coordinating with the social media representatives at various companies, and working with the product teams to plan for features to smoothen the overall process.",
        "votes": "710",
        "dateRange": "08/01/2018 - 12/10/2018",
        "img": "hootsuite_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Developer, Business Operations",
        "author": "League",
        "body": "I assisted with the implementation and validation for all new company benefit packages on the platform. I was also the first point of contact for customer application issues, which required an end to end knowledge of the entire application and tech stack.",
        "votes": "625",
        "dateRange": "06/01/2017 - 05/01/2018",
        "img": "league_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Technical Project Coordinator - Internship",
        "author": "Magnet Forensics",
        "body": "I worked closely with all of the teams in the company to keep our bi-weekly releases on track. I ran the sprint retrospective and planning meetings, and created a Python tool to pull data from JIRA and graph useful metrics.",
        "votes": "501",
        "dateRange": "01/01/2017 - 04/01/2017",
        "img": "magnetforensics_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Software Developer - Internship",
        "author": "Apple Inc.",
        "body": "I worked on the development of internal tools to improve the Localization and Release Engineering process. This included close coordination with various internal teams using the tooling, and full stack development in Rails and Angular. In addition, my team entered the internal App Store marketing challenge and finished 3rd out of 30 teams.",
        "votes": "120",
        "dateRange": "04/01/2015 - 12/01/2015 & 04/01/2016 - 09/01/2016",
        "img": "apple_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Software Developer - Internship",
        "author": "NthGen Software - Creators of TradeRev.",
        "body": "This was where I learned the ropes of professional development. I started off by working on Front End development using HTML5, CSS, and templating. I then transitioned into backend work, getting experience with Grails, and Java.",
        "votes": "100",
        "dateRange": "05/01/2014 - 12/01/2014",
        "img": "traderev_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "jobs",
        "title": "Senior Product Manager",
        "author": "GoBolt",
        "body": "The first Product Manager hire for GoBolt. Worked on the Merchant Experience team, responsible for the portal the merchant uses to get information about their shipments, orders, inventory, etc.",
        "votes": "1500",
        "dateRange": "06/15/2020 - Present",
        "img": "GoBolt_logo.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ] 
      }
    ]
    axios
      .get(`/`)
      .then(() => {
        // ensure that the posts are sorted by votes
        jobsArray = jobsArray.sort(function(a, b) {
          return b['votes'] - a['votes'];
        });
        jobsArray.forEach(job => {
          commit('APPEND_JOB_POST', job);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_posts_for_projects: ({ commit }) => {
    let projectsArray = [
      {
        "subredditName": "projects",
        "title": "SelfieRun - iPhone Game",
        "author": "Mark Goldberg",
        "body": "I developed a mobile game for iPhone using Swift 4, and released it to the App Store. The game is a side scroller that has you running around taking selfies to accumulate likes, with powerups helping the process, and the ability to become an influencer when you collect enough power ups. The game had Google Ads integrated, of which I made $0, but had good fun with the process.",
        "votes": "871",
        "dateRange": "06/01/2018 - 12/01/2018",
        "img": "selfierun.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
      {
        "subredditName": "projects",
        "title": "Teching Out Podcast",
        "author": "Mark Goldberg",
        "body": "I launched a technology podcast in February of 2020 that focuses on the intersection of humanity and tech, strongly emphasizing the importance of mental health. The podcast has over 1300 downloads, and 50+ five star reviews in the Podcast store. The podcast had a 4 episode sponsor from Ordinary Supply, a maker of quality custom branded merch based in Toronto. www.techingoutpod.com",
        "votes": "499",
        "dateRange": "02/01/2020 - Present",
        "img": "techingoutcover.png",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      }, 
    ]
    axios
      .get(`/`)
      .then(() => {
        projectsArray.forEach(project => {
          commit('APPEND_PROJECTS_POST', project);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_posts_for_ama: ({ commit }) => {
    let amaPosts = [
      {
        "subredditName": "AMA",
        "title": "My name is Mark and this is my website. Ask me anything...",
        "author": "Mark Goldberg",
        "body": "Very excited to be doing this AMA where I may or may not be just answering questions I’ve asked myself",
        "votes": "612",
        "dateRange": "05/07/2020",
        "img": "headshot_1.jpg",
        "comments": [
          {
            "author": "Cool guy",
            "body": "Mark is cool"
          }
        ]
      },
    ]
    axios
      .get(`/`)
      .then(() => {
        amaPosts.forEach(post => {
          commit('APPEND_AMA_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  send_comment_form: ({ commit }, comment) => {
    axios
      .post(`${url}api/v1/contact`, {
        name: comment.name,
        comment: comment.comment
      })
      .then(() => {
        commit('APPEND_SUBMITTED_COMMENT', {
          name: comment.name,
          comment: comment.comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
