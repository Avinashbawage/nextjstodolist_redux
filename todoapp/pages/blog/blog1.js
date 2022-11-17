const blog1 = () => {
  return (
    <>
     <h1> blog1 </h1> 

     <h2 style={{color: "blue" }}>My Blog Page no is {pagenum}</h2>
    <p>lorem25</p>
    <style jsx>{`
       p{
        color:red;        
       }
       .lorem25{
        color:green
       }
    `}
    </style>
    <p className='lorem25'>lorem75</p>
    <Image

    // We can use directly create a folder and define the path
      src="/images/ab.jpg"
      width={300}
      height={400}
  
    />


 
   

    </>
  )
}

export default blog1