import Root from "./components"
import link from "@frontity/html2react/processors/link"

const prodom = {
  name: "prodom-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: true,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      restApiPrefix: "http://prodom.pro/wp-json/wp/v2/",
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  },
}

export default prodom