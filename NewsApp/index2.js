function getNews(category)
{

    document.getElementById("news").innerHTML="";

    

    fetch("https://newsapi.org/v2/top-headlines?category="+category+"&apiKey=44fe4c85a8c44d87bd4f013c668a575c")
    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        
        let news=data.articles;
        console.log(news);
    
        news.forEach((n,index)=>{

            // news card div 
            let newsCard=document.createElement("div");
            newsCard.classList.add("news_card");

            // news img div 
            let newsImg=document.createElement("div");
            newsImg.classList.add("news_img")

            // article img 
            let img=document.createElement("img");
            img.setAttribute("src",n.urlToImage);
            img.setAttribute("alt","No Image Found");
              

            // adding img in news img div 
            newsImg.appendChild(img);

            // news details div 
            let newsDetails=document.createElement("div");
            newsDetails.classList.add("news_details");

            // title h1 
            let title=document.createElement("h1");
            title.classList.add("title");
            title.append(n.title);

            // author p 
            let author=document.createElement("p");
            author.classList.add("author");
            author.append(n.author);

            // content p 
            let content=document.createElement("p");
            content.classList.add("content");
            content.append(n.description);

            let link=document.createElement("a");
            link.setAttribute("href",n.url);
            link.setAttribute("target","blank");

            // button read 
            let button=document.createElement("button");
            button.classList.add("btn");
            button.append("Read more")

            // adding button in link 
            link.appendChild(button);

            // adding content in news details 
            newsDetails.appendChild(title);
            newsDetails.appendChild(author);
            newsDetails.appendChild(content);
            newsDetails.appendChild(link);

            // addind news img and news details to card 

            newsCard.appendChild(newsImg);
            newsCard.appendChild(newsDetails);


            document.getElementById("news").appendChild(newsCard);


        })


    })
    .catch((err)=>{
        console.log(err);
        document.write("No content Fount");
    })


}


getNews("business");

function search()
{

   
    let category=document.getElementById("category").value;

    getNews(category);
    

}