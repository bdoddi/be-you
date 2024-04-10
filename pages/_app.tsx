import "../styles/globalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import Layout from "../shared/layout/Layout";
import ErrorBoundary from "../shared/errorBoundary/ErrorBoundary";

import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Text,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { listNotes } from "../src/graphql/queries.js";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../src/graphql/mutations.js";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
// import config from '../awsComponents/aws-exports';
// Amplify.configure(config);

const API = generateClient();


function MyApp({ Component, pageProps }: AppProps, { signOut, user }: WithAuthenticatorProps) {
  console.log("user", user)
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    //@ts-ignore
    const notesFromAPI = apiData?.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note: any) => {
        if (note.image) {
          //@ts-ignore
          const url = await Storage?.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event: any) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      //@ts-ignore
      image: image?.name,
    };
    //@ts-ignore
    if (!!data.image) await Storage?.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }: { id: number; name: string }) {
    //@ts-ignore
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    //@ts-ignore
    await Storage?.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }
//   {notes.map((note: any) => (
//     //@ts-ignore
//     <Flex
//       key={note?.id || note?.name}
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Text as="strong" fontWeight={700}>
//         {/* //@ts-ignore */}
//         {note?.name}
//       </Text>
//       {/* //@ts-ignore */}
//       <Text as="span">{note.description}</Text>
//       {note.image && (
//         <>
//           {/* <Image
// src={note.image}
// alt={`visual aid for ${notes.name}`}
// style={{ width: 400 }}
// /> */}
//         </>
//       )}
//       <Button variation="link" onClick={() => deleteNote(note)}>
//         Delete note
//       </Button>
//     </Flex>
//   ))}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ErrorBoundary>       
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </ThemeProvider>
  );
}

export default withAuthenticator(MyApp);
// export default MyApp;
