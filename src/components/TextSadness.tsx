import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const TextSadness = (props: { text: string }) => {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{ width: "100%" }}
        >
        <Typography variant="h2" component="h2" gutterBottom>
        {props.text}
        </Typography>
        </Stack>
    );
    };