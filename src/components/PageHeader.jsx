import carousel from "/img/carousel.jpg";

const PageHeader = () => {
  return (
    <>
       
        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: `url(${carousel})` }}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown"></h1>
                   
                </div>
            </div>
        </div>
        
    </>
  )
}

export default PageHeader