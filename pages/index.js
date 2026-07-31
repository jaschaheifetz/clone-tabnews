function Home() {
  return (
      <div>
          <h1>Bem-vindo ao Tabnews Clone! 😎</h1>

          <form action="#" style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '40px auto', maxWidth: '400px', padding: '40px 72px', border: '1px solid #ccc', borderRadius: '8px' }}>

            <label htmlFor="email" style={{ fontWeight: 'bold', color: '#f93232', fontSize: '20px' }}>Insira seu e-mail para receber atualizações:</label>

            <input style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

            <button style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f93232', color: '#fff', cursor: 'pointer' }} type="submit">Enviar</button>
            
          </form>
      </div>
  );
}

export default Home;