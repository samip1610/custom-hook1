import useProhook from './hooks/useProhook';

const categoryName = "women's clothing";

function App() {
  const categoryData = useProhook(categoryName);
  
  return (
    <>
      <h1>API Demo</h1>
      
      {categoryData.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
      
      
    </>
  );
}
export default App;