import React from "react";


export const YoutubeVideo = (props: { field: string }) => {
    return (
        <iframe width="560" height="315" src={props.field} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    );
};
