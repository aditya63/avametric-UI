Avametric Front End Development Challenge
========================================

Hi there!

Thanks for your interest in joining the team here at Avametric. Part of our
evaluation process is to set an open-ended challenge which will allow you to
flex your creative muscles and give you an opportunity to demonstrate your
coding skills. We think (and hope you agree) that this is better than asking
you to scribble algorithms on a whiteboard in an interview setting.

We realize that this represents a significant investment of effort, but one we
hope will be worthwhile for both you and us. Even if your application to Avametric ultimately doesn't end up being the right fit, you are more than welcome to use what you
produce for this challenge in your personal portfolio.

If you are successful then we'll schedule you for an interview and will use what you produce for this challenge as a starting point for our discussions.

Cheers!  
The Avametric Team

## Overview

We have created a simple [NodeJS](https://nodejs.org) application which:

1. Bundles your source code and serves it through http://localhost:3000/
2. Provides **mock** data through http://localhost:3000/api/

Your challenge is to build something interesting that makes use of the mock data provided.

You can choose whichever technologies you like to create this application. Feel
free to make changes to _any_ of the files in this repository, or to swap out
any of the technologies we've provided. It's your party. 😎

## Prerequisites

1. You will need a basic understanding of [Git](https://git-scm.com/) source
   control management
2. You will need a [GitHub](https://github.com/) account
3. [NodeJS](http://nodejs.org/download/) should be installed on your machine
4. You will need to be familiar with making data requests in web applications

## Getting Started

1. Fork [this repository](https://github.com/avametric/front-end-code-challenge)
   to your GitHub account
2. Clone *your* fork to your development machine
2. Install the package dependencies by running `npm install` (or `yarn` if you prefer)
3. Start the application server by running `npm start`
4. Open your browser to http://localhost:3000

## Submission

Email us once you have finished and send us the URL to your fork of this repository.
If you are not already in contact with one of us, you can send your email to
[avantha@avametric.com](mailto:avantha@avametric.com).

If your fork is not publicly available, just let us know and we will send you the
GitHub users you can give direct access. Feel free to create a throwaway GitHub
account if you are worried about others seeing that you are working on your Avametric project.

## Expectations

We realize that there is no way to complete a fully polished application for the
purposes of a code challenge. You have other stuff going on in your life, so focus
on the things that best demonstrate your skill and passion. If you are more
comfortable in the user interface, then concentrate there. If you like working
deeper in the code, then concentrate there and don't worry so much about making
a pretty UI.

You are encouraged to include some notes about the aspects you didn't get time
to complete and how you would plan to further develop/improve the application
given more time. Please include them in the bottom of this readme rather than in an email so that others can see them when we share your work internally.

We are looking for creativity, originality, and a good user experience in your
**application** if that's an area you focused on.

We are looking for readability, good architectural decisions, modularity, and a
solid approach to testing in your **code**.

## Found a Bug?

Congratulations! You get bonus points! Email us or submit a GitHub issue
(or even better, a pull request) and we'll get it fixed. Suggestions to improve
this code challenge are also very welcome.

## API

This NodeJS application provides a single way of requesting data.

The **[Mock API](#mock-api)** is served through http://localhost:3000/api/.
You might want to use this if you're interested in UI/UX development. It's the
fastest way to get usable data on the screen, and does not require an internet
connection. The available endpoints are [documented below](#mock-api).

### Mock API

The mock data API is available through http://localhost:3000/api/, which is
proxied to an express server running on port 3001 that servs the contents of
the `data/` folder. You can make HTTP `GET` requests against the following endpoints:

#### GET /api/partners
Returns an array of partners that can be searched for bodies. For the purposes
of this challenge there are only 3 partners available.

#### GET /api/partners/:partnerId
Returns an object representing the partner with the given `:partnerId`.

For example:
```
http://localhost:3000/api/partners/acme/
```

#### GET /api/partners/:partnerId/bodies
Returns an array bodies grouped by gender contained within the partner.

For example:
```
http://localhost:3000/api/partners/acme/bodies
```

#### GET /api/partners/:partnerId/bodies/:genderId

Similar to `/api/partners/:partnerId/bodies`, but returns only a single gender body set
object for the `:genderId` given.

For Example:
```
http://localhost:3000/api/partners/acme/bodies/female
```

## Your Notes Go Here
Hi

 I focused more on the UI aspect than frontend coding. The idea behind the project is to give users a real shopping experience as if they were physically in the store. The website is not functional but its a small example how user would like to navigate when they first land on the page.

 The website is divided into small segments starting wit
#### Header:
  I added an image in the background which might make it look like a retail store but its a place holder for something eye catching for the user. The Take tour button will drag you to the tour section.

#### Feature section:
  It's a template for them see a quick overview about the app and they can click on Learn more link to view details.

#### Partners section:
  I used Partners API to retrieve the names, links and thumbnails.

#### Tour section:
  As a user, I would like to quickly skim through what i'm looking for so I categorized male and female cards. A hover over flips the card into it's respective accessory options. Click on the link will open a model which is a dummy template to start using the app.  

Shouldn't the endpoint for bodies/gender be categorized with what clothing the user is looking for? And then and object with measurements for the clothing type.

I just created an array for the clothing list that could be a response object of the gender bodies endpoint.

#### On the UI:
    I used CSS3 and SASS for UI, animations, popup and responsiveness. The SASS architecture is based on the UI components and made use of reusable components.

#### Front end:

   I didn't focus much on front end and used React to divide UI components into one parent app.js and rest as children components where the information flows unidirectional way.

#### Limitations:

  1.  I didn't make much use of the API. I would have focused next on calling all endpoints to for the tour section and build setting configuration for users to use the app. I wasn't sure how I would use each body part measurement unless I integrated 3d libraries like three.js.
  2. The navigation bar is missing on the website. I would have built a side navigation for users to go through different pages/section.
  3. The website, is not functional and more of a template.
  4. Compress images.
  5. Unit testing. 

## License

This project is MIT licensed. This means that you are allowed to freely use this for your personal portfolio.
