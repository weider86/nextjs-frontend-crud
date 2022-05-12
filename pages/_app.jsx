import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Container } from '../src/components/Container';
import { Grid } from '../src/components/Grid';
import GlobalStyles from '../src/globalStyles';
import { darkTheme, lightTheme } from '../src/theme';

function App({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Grid>
            <Container>
              <GlobalStyles />
              <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? (
                  <span aria-label='Light mode' role='img'>
                    🌞
                  </span>
                ) : (
                  <span aria-label='Dark mode' role='img'>
                    🌜
                  </span>
                )}
              </button>
              <Component {...pageProps} />
            </Container>
          </Grid>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
