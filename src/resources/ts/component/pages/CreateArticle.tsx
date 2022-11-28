import React, { ChangeEvent, memo, useState, VFC } from "react";

import { useCreateArticle } from "../../hooks/useCreateArticle";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const CreateArticle: VFC = memo(() => {
    const [newArticle, setNewArticle] = useState('');
    // const [newArticleImage, setNewArticleImage] = useState('');

    const onChangeArticle = (e :ChangeEvent<HTMLInputElement>) => {
        setNewArticle(e.target.value);
    }
    // const onChangeArticleImage = (e :ChangeEvent<HTMLInputElement>) => {
    //     setNewArticleImage(e.target.value);
    //     console.log(e.target.value);
    // }

    const { createArticle } = useCreateArticle();

    const onClickCreateArticle = () => createArticle(newArticle);

    return (
        <>
            <p>記事作成ページ</p>
            <form action="api/articles" method="post" encType="multipart/form-data">
                <input type="text" name="context" value={newArticle} onChange={onChangeArticle}  />
                <br />
                {/* <input type="file" name="article_image" value={newArticleImage} onChange={onChangeArticleImage} /> */}
                <br />
                <PrimaryButton onClick={onClickCreateArticle} >作成</PrimaryButton>
            </form>
        </>
    );
});
