     ________         __       ___      ___   _______   ___  ___   ___  ___  
    |"      "\       /""\     |"  \    /"  | /"     "| |"  \/"  | |"  \/"  |
    (.  ___  :)     /    \     \   \  //  / (: ______)  \   \  /   \   \  /  
    |: \   ) ||    /' /\  \     \\  \/. ./   \/    |     \\  \/     \\  \/   
    (| (___\ ||   //  __'  \     \.    //    // ___)_    /   /      /\.  \   
    |:       :)  /   /  \\  \     \\   /    (:      "|  /   /      /  \   \  
    (________/  (___/    \___)     \__/      \_______) |___/      |___/\___|
    ------------------------------------------------------------------------

# our trip to chiang rai with my angel

## nginx config
based on https://gkedge.gitbooks.io/react-router-in-the-real/content/nginx.html
```
server {
	server_name NAME_IN_HOSTSFILE;
	root   /var/www/PATH_TO_ROOT/src/client;
	index index.html index.htm;

	location / {
		default_type "text/html";
		try_files $uri $uri/ /index.html $uri;
	}

	location = /index.html {
	default_type "text/html";
	}
}
```
## apache config .htaccess
based on https://gkedge.gitbooks.io/react-router-in-the-real/content/apache.html:
```
<IfModule mod_rewrite.c>
	RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    RewriteRule ^ index.html [L]
</IfModule>
```
