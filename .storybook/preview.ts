import type { Preview } from '@storybook/react'

import '../public/output.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
