import "./about.css";
import MyImage from "../components/MyImage";
const About = () => {
  return (
    <>
      <h1>An About Page</h1>
      <MyImage
        src={
          "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqn59agr1g40svv6krfkz.jpg"
        }
        alt={"nextimage"}
        width={500}
        height={500}
      />
    </>
  );
};
export default About;
