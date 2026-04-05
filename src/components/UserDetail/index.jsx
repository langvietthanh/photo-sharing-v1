import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";
import { useParams, Link } from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail( {setContentTopBar} ) {
    const { userId } = useParams();
    const userModel = models.userModel(userId);

    useEffect(() => {
        if (userModel) {
            setContentTopBar(`${userModel.first_name} ${userModel.last_name}`);
        }
    }, [userId, userModel, setContentTopBar]);

    return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>{userModel.first_name} {userModel.last_name}</Typography>
          <Typography variant="body1" gutterBottom><strong>Location:</strong> {userModel.location}</Typography>
          <Typography variant="body1" gutterBottom><strong>Description:</strong> {userModel.description}</Typography>
          <Typography variant="body1" gutterBottom><strong>Occupation:</strong> {userModel.occupation}</Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" component={Link} to={`/photos/${userModel._id}`}>
                View Photos
            </Button>
          </Box>
        </Box>
    );
}

export default UserDetail;
