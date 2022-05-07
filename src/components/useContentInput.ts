import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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

export function useContentInput() {
  const [content, setContent] = useState("");
  const [addContent] = useMutation(ADD_CONTENT, {
    refetchQueries: [CONTENTS],
  });

  const onSubmit = (e: Event) => {
    e.preventDefault();
    setContent("");

    if (content.length > 0) {
      addContent({ variables: { author: "learningMan", content: content } });
    }
  };

  return { content, setContent, onSubmit };
}