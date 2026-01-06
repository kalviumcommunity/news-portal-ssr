export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const res = await fetch(
    'https://saurav.tech/NewsAPI/everything/cnn.json',
    { cache: 'no-store' }
  );

  const news = await res.json();
  const article = (news.articles);

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Rendered on every request</p>
        {article.map((art: any, index: number) => (
            <div key={index} style={{marginBottom: '20px'}} className="border-b-2">
                <h2>{art.title}</h2>
                <p><strong>Author:</strong> {art.author ? art.author : 'Unknown'}</p>
                <p><strong>Published At:</strong> {new Date(art.publishedAt).toLocaleString()}</p>
                <a href={art.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div >

        ))}
    </main>
  );
}
