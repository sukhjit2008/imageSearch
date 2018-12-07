import React from 'react';

const images =(props)=>{
    var imageList = <div className=" image  container section center" >
    <h5>Search image </h5>
</div>
if(props.images ){
    imageList = <div>
    <div class="preloader-wrapper big active container center">
        <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div><div class="gap-patch">
            <div class="circle"></div>
        </div><div class="circle-clipper right">
            <div class="circle"></div>
        </div>
        </div>
 </div>
  </div>
}
 if(props.images){
    imageList=props.images.map(
        (image)=>{
          return  (
                 <img  src={image.urls.regular} key={image.id} className=" responsive-img materialboxed" alt=""/>
          );
        }
    )
 }
    return(
        <div className='images container section '>
        {imageList }
        </div>
    );
}
export default images;