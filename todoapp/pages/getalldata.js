import Link from "next/link";

// Fetch the data
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  {
    console.log("API data", data);
  }
  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
};

const getalldata = ({ data }) => {
  return (
    <>
      <h1>Get all data</h1>
      {console.log("API data", data)}

      {/* Get the data 5 data's */}
      {data.slice(0, 5).map((currElem) => {
        return (
          <div>
            &nbsp;
            <Link href= {`/blog/${currElem.id}`} >
             {currElem.id} {currElem.title} 
            </Link> 
            
          </div>
        );
      })}
    </>
  );
};

export default getalldata;
