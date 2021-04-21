var data=[{
	imgurl:"./img/food1.jpg",
	name:"GMO food1"
},{
	imgurl:"./img/food2.jpg",
	name:"GMO food2"
},{
	imgurl:"./img/Money1.jpg",
	name:"The Value of Money1"
},{
	imgurl:"./img/Money2.jpg",
	name:"The Value of Money2"
},{
	imgurl:"./img/World1.jpg",
	name:"The View of World in 21001"
},{
	imgurl:"./img/World2.jpg",
	name:"The View of World in 21001"
}]
$(function(){
	for(var i=0;i<data.length;i++){
		$(".list").append('<div class="col-lg-4 col-md-6 box"><div class="content-img2"><img  src="'+data[i].imgurl+'"><figcaption>'+data[i].name+'</figcaption></div></div>') 
	
	}
})

