import React from "react";
import { Post } from "../common";

export async function callTest(un:string,deux:string):Promise<string> {
    let path: string = "/api/essai"
    path += "?un=" + un + "&deux=" + deux;

    const response = await fetch(path).then(res => res.json()).then(data => {
        return data.te;
      ;});
      return response;
}

export async function getPost():Promise<Post> {
    let path: string = "/api/getPost"
    let post: Post = {
        type: "test",
        field: "test"
    }
    const response = await fetch(path).then(res => res.json()).then(data => {
        post.type = data.type;
        post.field = data.field;
        return post;
      ;}
    );
    return response;
}