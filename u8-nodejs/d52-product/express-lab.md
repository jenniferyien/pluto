# Service Oriented Acquisitions

##### LEARNING OBJECTIVES
- SWBAT Practice all of the skills we've learned over the course (JavaScript, Rails, React)
- SWBAT Describe Service Oriented Architecture
- SWBAT Work on multiple servers in a SOA

## Service Oriented Architecture

- Historical: Distributed Computing, Modular Programming, Cloud Computing
- Loose Coupling
> Loose coupling is an approach to interconnecting the components in a system or
> network so that those components, depend on each other to the least extent
> practicable. Coupling refers to the degree of direct knowledge that
> one element has of another.

- Ownership, Technological Diversity

## Overview of the SOA

Your company just made a major acquisition of another company, and has hired
you to integrate their software into a new React.js front-end.

As per the acquisition agreement, the purchased company has granted you ownership
to all of the source code and documentation.

Unfortunately, following the acquisition, the majority of the programmers were
not retained, and many others left to find other work, with the exception of
the lead developer, Jaden who is available for questions but limited for time.

This system has two servers:
- A Rails REST server with searchable book listings
- An Socket.io server serving a DRM protected EBook reader

You are been tasked with designing a new front-end that consumes data from both
systems.  Your product manager has asked you to "spike" out the implementation
and build a prototype before the company invests in a full build-out.

Before we begin coding, review the source for both applications.  It's normal
not to understand everything.  As developers, it's important to be comfortable
with this, and manage to be productive despite having a limited understanding.

## Importing the Rails data

We will need to acquire the Gutenberg dataset.  Jaden will provide this over
Slack, and we will import it together.  Once we've seeded it into our database,
let's start the Rails server and explore it's API.

## Prototype

For our prototype, we want to modify the source code of FlipFolio to make use
of Ajax calls to our Ruby on Rails server.  We also want to see how we can use
modify the flipfolio app will work as a React.js component.

Flipfolio should request HTML data over Ajax, and then partition it into pages,
before serving it - page by page over Socket.io.  We are using Socket.io so
we can more closely monitor the data send to the client, as our business owners
insist that we do not allow crawlers or scripts to gain access to the full text
of the book, without difficulty.

### Bonus Objectives

Add a "Search" feature utilizing the endpoint" `/books?search=Magna`
