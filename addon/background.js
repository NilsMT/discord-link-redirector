// Intercept web requests
browser.webRequest.onBeforeRequest.addListener(

    function(details) {
        // Check if the request URL is toward media.discord.net
        if (details.url.includes("media.discordapp.net")) {
            
            const newUrl = details.url.replace("media.discordapp.net", "cdn.discordapp.com");// Replace media.discord.net with cdn.discordapp.com
            
            return { redirectUrl: newUrl };

        // Check if the request URL is toward images-ext-1.discordapp.net and can process the url accordingly
        } else if (details.url.includes("/https/") && (details.url.includes("images-ext-1.discordapp.net"))) {

            const part = details.url.split('/https/')[1] //take what follows /https/

            const newUrl = "https://"+part //put it back together on a real url

            return { redirectUrl: newUrl };
        }
    },
    { urls: ["*://media.discordapp.net/*","*://images-ext-1.discordapp.net/*"] }, // Match all URLs
    ["blocking"]
);