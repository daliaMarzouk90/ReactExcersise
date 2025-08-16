import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'

import { Header } from './header.jsx'
import { Footer } from './footer.jsx'
import { Main } from './main.jsx'

const root = createRoot(document.getElementById('root'))

import '/src/index.css'

root.render(
    <Fragment>
        <Header />
        <Main />
        <Footer />
    </Fragment>
)    