import { Button } from "@mui/material";
import React from "react";
import { Post } from "../common";
import { RedditPost, TextSadness,YoutubeVideo } from "../components";
import { getPost } from "../interface";

export const Content = () => {
    const [ezTest, setEzTest] = React.useState<Post>(
        {
            "type": "text",
            "field": "Bienvenue"
        }
    );


    const getForm = () => {
        switch (ezTest.type) {
            case "text":
                return <TextSadness text={ezTest.field} />;
            case "reddit":
                return <RedditPost field={ezTest.field} />;
            case "youtube":
                return <YoutubeVideo field={ezTest.field} />;
            default:
                return <TextSadness text="error" />;
        }
    };
    return (
        <div>
            {getForm()}
            <Button
                sx={{ m: 1 }}
                onClick={() => {
                    getPost().then((post) => {
                        setEzTest(post);
                    });
                }}
            variant="contained"
            >
                NEXT</Button>
        </div>

    );
};