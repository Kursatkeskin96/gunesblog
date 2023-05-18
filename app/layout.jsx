import '../styles/globals.css'
import Provider from '../components/Provider'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react";

export const metadata = {
    title: "gunes",
    description: "gunesin dunyasi"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout