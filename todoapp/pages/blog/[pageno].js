import { useRouter } from 'next/router'

const pageno = () => {
// This is a Object
    const router = useRouter();    
    const pagenum = router.query.pageno;

  return (
    <>
    <h1>Blog page No. {pagenum}</h1>
    
    </>
  )
}
    
export default pageno;