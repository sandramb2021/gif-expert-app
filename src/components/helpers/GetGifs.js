
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vytz0CkYPeFxot9FfZ19kjFLSqd7BHMu&q=${ category }&limit=10`
    const resp = await fetch(url);
    const  {data = []} = await resp.json();
  
    const gifs = data.map ( img => ({
      id: img.id,
      url: img.images.downsized_medium.url,
      title: img.title
      })
    );
  
    //console.log(gifs);
    return (gifs)
  }
  