Learning Objectives(SWBAT)

- Define OAuth
- Explain the OAuth process
- Explain three-legged authentication
- Explain the difference between authentication and authorization
- Register web applications for APIs
- Store environmental variables
- Read documentation

OAuth is an open standard for authorization.
The OAuth 2.0 authorization framework enables a third-party application to
obtain limited access to an HTTP service.

Three legged does not imply a certain type of app as in "browser based". Three
legged means that an application acts on the direct behalf of a user. In the
three legged scenarios there is

- an application (consumer),
- a user (resource owner) and
- an API (service provider).

Explanation of OAuth 2.0 protocol

A main point of the OAuth specs is for a content provider (e.g. Facebook,
Twitter, etc.) to assure a server (e.g. a Web app that wishes to talk to the
content provider on behalf of the client) that the client has some identity.
What three-legged authentication offers is the ability to do that without
the client or server ever needing to know the details of that identity (e.g.
username and password).
http://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why

## Code Along

1. Link to Github OAuth flow web page
1. Show how to make app on github
1. Walk throught the docs with them and implement the attached sample code.
1. optional - on the oauth_callback route binding.pry and show the response params/session

[Walk-through of Github OAuth](https://developer.github.com/v3/oauth/)

## Group Exercise

Work in groups to implement OAuth for one of the following:

- [Facebook](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.1
  )
- [Google](https://developers.google.com/accounts/docs/OAuth2WebServer)
- [Instagram](http://instagram.com/developer/authentication/
  )
- [LinkedIn](https://developer.linkedin.com/documents/authentication
  )
- [Dropbox](https://www.dropbox.com/developers/reference/oauthguide)

- [Foursquare](https://developer.foursquare.com/overview/auth
  )
- [Reddit](https://github.com/reddit/reddit/wiki/OAuth2)

Create a Sinatra Application with a basic OAuth login then display information
about that user

# Resources
- http://ruby-doc.org/stdlib-2.2.2/libdoc/cgi/rdoc/CGI.html
- https://github.com/rest-client/rest-client
- http://blog.varonis.com/introduction-to-oauth/
- http://oauthbible.com/
