import React from "react";
import appWriteDatabase from "../appWrite/storageDatabase"

function postCard(postId){

    const postData = appWriteDatabase.getPost(postId)
    console.log(postData)

    return(<>
    <div>
        <div>Title</div>
    </div>
    </>)
}

export default postCard
