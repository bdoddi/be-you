import '../styles/globalStyle.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyle'
import Layout from '../shared/layout/Layout'
import ErrorBoundary from '../shared/errorBoundary/ErrorBoundary'

// import "@aws-amplify/ui-react/styles.css";
// import { withAuthenticator } from "@aws-amplify/ui-react";

// import { listNotes } from "../src/graphql/queries.js";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "../src/graphql/mutations.js";
// import { useEffect, useState } from 'react'

// import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   //@ts-ignore
  //   const notesFromAPI = apiData?.data.listNotes.items;
  //   setNotes(notesFromAPI);
  // }
  // async function createNote(event: any) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //   };
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id }: { id: number}) {
  //   //@ts-ignore
  //   const newNotes = notes.filter((note) => note?.id !== id);
  //   setNotes(newNotes);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </ThemeProvider>
  )
}

// export default withAuthenticator(MyApp)
export default MyApp
