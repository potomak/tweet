use Rack::Static, :urls => ['/style.css', '/jquery.tweet.css', '/jquery.tweet.js', '/jquery.address.1.2.2.min.js', '/deserialize.js', '/tweet.search.js'], :root => "tweet"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=86400' }, File.open('tweet/index.html', File::RDONLY)] }