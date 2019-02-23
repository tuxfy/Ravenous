const apiKey = 'e-ljfxO6gUGnm_QB-k7KdsxDsWNBomqP8gnkDR3QLLaLEwUk65tw2qTcO0mWNs0CJnGQMhdgIF5wwX1RfyBJO-cOppbNUfHi0wXFTAVUXhVP_Ra20i3B438Xk3VxXHYx';
export const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            }).then((response) => {
                if(response.ok){
                    return response.json();
                }
                throw new Error('Request failed!');
            }, (networkError) => {
                console.log(networkError.message);
            }).then((jsonResponse) => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map((business) => 
                    {  
                        return {
                            id:business.id,                      
                            imageSrc:business.image_url,
                            name:business.name,
                            address:business.location.address1,
                            city:business.location.city,
                            state:business.state,
                            zipCode:business.location.zip_code,
                            category:business.categories[0].title,
                            rating:business.rating,
                            reviewCount:business.review_count
                        }                      
                    });
                }
            })
        
    },
}




