import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export function HomePage(){

    return<div>
            <h1>Bonjour et bienvenue</h1>
            <p>Entrez dans notre monde de spleen en cliquant</p>
            <Link to="/content">
                      <Button variant="contained">Création de simulation</Button>
              </Link>

            
        </div>
        
}
