const apiKey = 'u2v_rmgTVKSj0-FM4RN7AvOR7OE3HoBV1bfkM5nd2OIRM0zFi3_JXnNNI_J3suU554iwBU1ykOnOKSPaOjGeYaLR3-JUqpV8j_Xavy9BIj1O8lPrGcWa8OKZVv8SXHYx';

export const Yelp = {
    search: function (term, location, sortBy) {
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
}