'use client';

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    fetch('http://localhost:8080/login')
      .then(response => response.text())
      .then(data => console.log(data));
  }, []);

  return <h1>Login Page</h1>;
}