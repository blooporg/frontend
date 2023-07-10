'use client';

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    fetch('http://localhost:8080/signup')
      .then(response => response.text())
      .then(data => console.log(data));
  }, []);

  return <h1>Signup Page</h1>;
}