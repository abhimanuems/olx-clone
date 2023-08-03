import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function View() {
  const [userDeatils,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  
  console.log(postDetails)
  useEffect(()=>{
   const {userId}= postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDeatils && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeatils.username}</p>
          <p>{userDeatils.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;

