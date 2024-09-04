import Details from '../details/details';
import Gallery from '../gallery/gallery';
const Home = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* First Column */}
          <div className="p-4 md:w-1/2 w-full">
            <div
              className="h-full flex flex-col items-start justify-center  p-6 rounded-lg"
              style={{ minHeight: "316px" }}
            > 
           
            </div>
          </div>

          {/* Second Column */}
          <div className="p-4 md:w-1/2 w-full  flex flex-col justify-center items-center">
           
            <div className="mb-4" style={{ height: "316px", paddingTop: "16px", paddingBottom: "16px",backgroundColor:"#363C43",borderRadius:"18.89px",boxShadow:"5.67px 5.67px 3.78px 0px rgba(0,0,0,0.4)" }}>
            <Details/>
             
            </div>
       <div className='mb-4' style={{ display:"flex",justifySelf:"center",alignSelf:"center",background:"linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",height:"4px",width:"70%",borderRadius:"2.44px"}}></div>
        
            <div  style={{ width: "100%", height: "316px", paddingTop: "16px",backgroundColor:"#363C43",borderRadius:"18.89px",boxShadow:"5.67px 5.67px 3.78px 0px rgba(0,0,0,0.4)" }}>
              <Gallery/>
            </div>
            <div 
  className="my-4 flex  self-center bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] via-[rgba(255,255,255,0.05)]"
  style={{
    height: "4px",
    width: "70%",
    borderRadius: "2.44px",
    backgroundBlendMode: "overlay",
  }}
>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;