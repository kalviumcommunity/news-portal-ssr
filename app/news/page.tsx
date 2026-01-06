export const revalidate = 60;

export default async function NewsPage() {
  const res = await fetch(
    'https://saurav.tech/NewsAPI/everything/cnn.json'
  );

  const news = await res.json();
  const article = (news.articles);
  console.log(article);

//   author, title, description, url, urlToImage, publishedAt, content 

  return (
    <main>
      <h1>News</h1>
      <p>Revalidates every 60 seconds</p>
      {/* <pre>{article.}</pre> */}
        {article.map((art: any, index: number) => (
            <div key={index} style={{marginBottom: '20px'}}>
                <h2>{art.title}</h2>
                <p><strong>Author:</strong> {art.author ? art.author : 'Unknown'}</p>
                <p><strong>Description:</strong> {art.description}</p>
                {art.urlToImage && <img src={art.urlToImage} alt={art.title} style={{maxWidth: '400px'}} />}
                <p><strong>Published At:</strong> {new Date(art.publishedAt).toLocaleString()}</p>
                <a href={art.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        ))}
    </main>
  );
}
