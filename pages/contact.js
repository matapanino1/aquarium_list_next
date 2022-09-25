import React, { useState } from "react";
import Head from "next/head";
import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    width: "50vw",
    margin: "0 auto",
  },
  textField: {
    marginTop: "26px",
  },
});

const Contact = () => {
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        body: body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setName('');
    setEmail('');
    setBody('');
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <Head>
        <title>Aquarium Info -ご意見</title>
      </Head>
      <h2>ご意見</h2>
      <form onSubmit={submitHandler} className={classes.field}>
        <TextField
          fullWidth
          required
          label="お名前(ニックネーム)"
          className={classes.textField}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textField}
        />
        <TextField
          fullWidth
          required
          label="お問い合わせ内容"
          className={classes.textField}
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      <Button type="submit" variant="outlined" className={classes.textField}>
        送信
      </Button>
      </form>

    </>
  );
};

export default Contact;