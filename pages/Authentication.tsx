import LoginForm from "@/components/LoginForm";
import Head from "next/head";

const Authenticatoin = () => {
  return (
    <div>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="DSA DS Authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </div>
  );
};

export default Authenticatoin;
