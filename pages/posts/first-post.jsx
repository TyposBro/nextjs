import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
    <Head>
      <title></title>
    </Head>
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
    </>
  );
}
