# Tweet!
Put twitter on your website with __tweet!__, an unobtrusive javascript plugin for jquery.

### Demo

[http://tweet.seaofclouds.com/](http://tweet.seaofclouds.com/) and [http://seaofclouds.com/](http://seaofclouds.com/)

### Download

Tar [http://github.com/seaofclouds/tweet/tarball/master](http://github.com/seaofclouds/tweet/tarball/master)

### Features

* small size and fast download time
* will not slow down or pause your page while tweets are loading
* display up to 100 tweets, as permitted by the twitter search api
* display tweets from a twitter search, or from your own feed
* optional verb tense matching, for human readable tweets
* optionally display your avatar
* optionally display tweets from multiple accounts!
* automatic linking of @replies to users’ twitter page
* automatic linking of URLs
* automatic linking of #hashtags, to a twitter search of all your tags
* converts <3 to a css styleable ♥ (we ♥ hearts)
* customize the style with your own stylesheet or with other jquery plugins

### Usage

1. Get JQuery. In these examples, we use Google's AJAX Libraries API.
    * [http://code.google.com/apis/ajaxlibs/](http://code.google.com/apis/ajaxlibs/)
    * [http://jquery.com/](http://jquery.com/)

2. include jQuery and `jquery.tweet.js` files in your template's `<head>`.
  
  `<script language="javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js" type="text/javascript"></script>
  <script language="javascript" src="/tweet/jquery.tweet.js" type="text/javascript"></script>`

3. Also in `<head>`, initialize tweet! on page load with your username and other options
  
  `<script type='text/javascript'>
      $(document).ready(function(){
          $(".tweet").tweet({
              join_text: "auto",
              avatar_size: 32,
              count: 3,
              auto_join_text_default: "we said,",
              auto_join_text_ed: "we",
              auto_join_text_ing: "we were",
              auto_join_text_reply: "we replied to",
              auto_join_text_url: "we were checking out",
              loading_text: "loading tweets..."
          });
      });
  </script>`
  
4. In `<body>`, include a placeholder for your tweets. They'll get loaded in via JSON. How fancy!
  
  `<div class="tweet"></div>`

5. Style with our stylesheet in `<head>`, or modify as you like!
  
  `<link href="jquery.tweet.css" media="all" rel="stylesheet" type="text/css"/>`


### Contribute

Bring your code slinging skills to Github and help us develop new features for tweet!

[http://github.com/seaofclouds/tweet/](http://github.com/seaofclouds/tweet/)

`git clone git://github.com/seaofclouds/tweet.git`

To start serving on your localhost run `rackup` and visit [http://localhost:9292](http://localhost:9292)

Report bugs at [http://seaofclouds.lighthouseapp.com/projects/14179-tweet/overview](http://seaofclouds.lighthouseapp.com/projects/14179-tweet/overview)

### Licensed under the MIT

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

If you like Tweet, check out Twoot!
Twoot is a miniature Twitter client based on Tweet that allows you to post tweets and see what your friends are up to. Thanks, Peter Krantz!