import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Articles() {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`; // اصلاح تعریف URL

  const { data: article, isLoading, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => navigate("/"), 2000);
    }
  }, [error, navigate]); // اضافه کردن navigate به dependency array

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>by {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
