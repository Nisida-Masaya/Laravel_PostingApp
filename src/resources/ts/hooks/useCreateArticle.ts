/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Article } from "../types/api/Article"; 

export const useCreateArticle = () => {
    const history = useHistory();

    const createArticle = useCallback(async (context: string) => {
        const data = await axios
            .post<Article>("/api/articles", {
                'context': context,
                // 'article_image': newArticleImage
            })
            .then((res) => {
                console.log(res);
                history.push('/home');
            });
        console.log(data);
    }, []);

    return { createArticle };

}