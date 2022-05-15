import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useUser } from "../hooks/useUser";

const CONTENTS = gql`
  query {
    contents {
      content
      author
    }
  }
`;

const ADD_CONTENT = gql`
  mutation AddContent($author: String, $content: String) {
    addContent(author: $author, content: $content) {
      content
      author
    }
  }
`;

export function useContentInput(refetchQueries?: DocumentNode[] | undefined) {
  const [content, setContent] = useState("");
  const [addContent] = useMutation(ADD_CONTENT, {
    refetchQueries,
  });
  const { user } = useUser();

  const onSubmit = (e: Event) => {
    e.preventDefault();
    setContent("");

    if (content.length > 0) {
      addContent({
        variables: { author: user?.displayName, content: content },
      });
    }
  };

  return { content, setContent, onSubmit };
}
