import '../styles/globals.css';
import RootLayout from '../app/layout';

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
