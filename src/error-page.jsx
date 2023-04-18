import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>
        <i>{error.statusText || error.message}</i>
      </h1>
      <p>Пардон, здесь ничего нет</p>
    </div>
  );
}
