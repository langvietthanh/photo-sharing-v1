import React, { useEffect, useState } from "react";
import { Typography, Divider, Box } from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos ({setContentTopBar}) {
    const {userId} = useParams();
    const [userPhotos, setUserPhotos] = useState([]);

    useEffect(() => {
      fetchModel(`/photosOfUser/${userId}`)
      .then(data => setUserPhotos(data))
      .catch(err => console.log(err))
    }, [userId]);


    useEffect(() => {
        fetchModel(`/user/${userId}`)
            .then((user) => {
                if (setContentTopBar) {
                    setContentTopBar(`Photos of ${user.first_name} ${user.last_name}`);
                }
            })
            .catch(console.log);
    }, [userId, setContentTopBar]);

    return (
    <>
      {userPhotos && userPhotos.map( (photo) => <PhotoDetail photo={photo} key={photo._id}/>)} 
    </>

    );
}


function PhotoDetail({photo}){
  const formattedDate = new Date(photo.date_time).toLocaleString();

  return(
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle2" color="textSecondary">
        Time upload photo: {formattedDate}
      </Typography>
      <img src={require(`../../images/${photo.file_name}`)} alt={photo.file_name} style={{ maxWidth: "100%", height: "auto", display: "block", marginTop: 8, marginBottom: 8 }}/>
      <CommentsOfPhoto comments={photo.comments}/>
      <Divider sx={{ mt: 2 }} />
    </Box>
  )
}

function CommentsOfPhoto({comments}){
  return(
    <div>
      {comments && 
      comments.map( 
        (comment) => <CommentDetail comment={comment} key={comment._id}/>)
        }
    </div>
  )
}
  

function CommentDetail({comment}){
  const user = comment.user;
  const formattedDate = new Date(comment.date_time).toLocaleString();

  return(
    <div>
      <Typography variant="subtitle1" fontWeight="bold">
        user: <Link to= {`/users/${user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link>
      </Typography>
      <Typography variant="body2" color="textSecondary">date time: {formattedDate}</Typography>
      <Typography variant="body1">comment: {comment.comment}</Typography>
    </div>
  )
} 

export default UserPhotos;
