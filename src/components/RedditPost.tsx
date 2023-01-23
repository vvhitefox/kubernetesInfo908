import React from "react";

export const RedditPost = (props: { field: string }) => {

    return (
        <iframe id="reddit-embed" src={props.field}
        sandbox="allow-scripts allow-same-origin allow-popups" 
        width="640" height="625"></iframe>
    );
};