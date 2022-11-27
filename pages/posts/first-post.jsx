import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "components/layout";

export default function FirstPost() {
  const fb = () => {
    console.log(`script loaded correctly, window.FB has been populated`);
    FB.login((response) => {
      console.log(response);
    });
  };

  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={fb}
      />
      <h1>First ever post</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
