import styles from '../../styles/blog.module.scss'

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
 
  const paths = data.map((currElem) => {
    return {
      params: {
        pageno: currElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageno = ({ data }) => {
  const { id, title, body } = data;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title} >{id}. &nbsp; {title} </div>
         
        <div className={styles.content}>{body} </div>
      </div>
    </>
  );
};

export default pageno;
