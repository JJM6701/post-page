import React, { useState } from "react";
import styles from "./NewPostPage.module.css";

const NewPostPage = () => {
  const [postType, setPostType] = useState("question");

  const handlePostTypeChange = (type) => {
    setPostType(type);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>New Post</h2>
      <div>
        <label className={styles.label}>
          <input
            type="radio"
            name="postType"
            value="question"
            checked={postType === "question"}
            onChange={() => handlePostTypeChange("question")}
            className={styles.radio}
          />
          Question
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="postType"
            value="article"
            checked={postType === "article"}
            onChange={() => handlePostTypeChange("article")}
            className={styles.radio}
          />
          Article
        </label>
      </div>
      {postType === "question" ? <QuestionForm /> : <ArticleForm />}
    </div>
  );
};

const QuestionForm = () => (
  <div className={styles.container}>
    <h3 className={styles.subheader}>What do you want to ask or share</h3>
    <input
      type="text"
      placeholder="Start your question with how, what, why, etc."
      className={styles.inputText}
    />
    <textarea
      placeholder="Describe your problem"
      className={styles.textarea}
    ></textarea>
    <input type="text" placeholder="Add tags" className={styles.inputText} />
    <button className={styles.button}>Post</button>
  </div>
);

const ArticleForm = () => (
  <div className={styles.container}>
    <h3 className={styles.subheader}>What do you want to ask or share</h3>
    <input
      type="text"
      placeholder="Enter a descriptive title"
      className={styles.inputText}
    />
    <textarea
      placeholder="Enter a 1 paragraph abstract"
      className={styles.textarea}
    ></textarea>
    <textarea
      placeholder="Enter the main article text"
      className={styles.textarea}
    ></textarea>
    <input type="text" placeholder="Add tags" className={styles.inputText} />
    <button className={styles.button}>Post</button>
  </div>
);

export default NewPostPage;
