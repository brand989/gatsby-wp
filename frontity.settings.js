const settings = {
  "name": "prodom",
  "state": {
    "frontity": {
      "url": "http://prodom.pro/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [{
      name: "prodom-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://prodom.pro/wp-json"
        }
      }
    },

    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;