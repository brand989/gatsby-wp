const settings = {
  "name": "prodom",
  "state": {
    "frontity": {
      "url": "http://wp-react:8080/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "prodom-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wp-react:8080/",
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
