import { AccessibilityNew } from "@mui/icons-material"
import { Box, Stack, Typography,Button } from "@mui/material"
import { AppRoutes } from "./AppRoutes"
import { Link } from "react-router-dom";
import React from "react";
export function App() {
    const [ezTest, setEzTest] = React.useState(1);
    const launchEzTest = () => {
        let path:string = "/api/essai?un="
        path += ezTest.toString()
        path += "&deux=2"
        fetch(path).then(res => res.json()).then(data => {
            console.log(data);
            setEzTest(data.te);
    });
}
    
    return (
        <Box
            sx={{ padding: 2 }}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}

                sx={{
                    marginBottom: 2,
                }}
            >
                <AccessibilityNew />
            </Stack>
            <AppRoutes />
        </Box>
    )

}


