           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://static.vecteezy.com/ti/vetor-gratis/p1/6634891-desenho-um-menino-acenando-mao-gratis-vetor.jpg", "https://thumbs.dreamstime.com/b/d-ilustra%C3%A7%C3%A3o-da-linda-e-alegre-mulher-loira-com-o-dedo-indicador-para-cima-bonitinha-de-desenho-sorrindo-atraente-empres%C3%A1ria-214226885.jpg"];
           
var names = ["Álbum de Família","Silfarney Zanatta", "James Machado", "Davi Zanatta", "Enzo", "Juliana"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
