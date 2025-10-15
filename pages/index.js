import { useState } from 'react'

export default function Home() {
  // Cria automaticamente uma lista de caminhos das imagens numeradas
  const imagens = Array.from({ length: 27 }, (_, i) => `/imagens/${i + 1}.png`)

  const [imagemAtual, setImagemAtual] = useState(null)

  function mostrarImagemAleatoria() {
    const aleatoria = imagens[Math.floor(Math.random() * imagens.length)]
    setImagemAtual(aleatoria)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* Imagem fixa acima do botão */}
      <img
        src="/imagens/botao.png"
        alt="imagem superior"
        style={{
          width: '400px',
          marginBottom: '30px',
          maxWidth: '80%',
          borderRadius: '20px'
        }}
      />

      {/* Botão */}
      <button
        onClick={mostrarImagemAleatoria}
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#ff6f91',
          color: 'white',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#ff3d68'}
        onMouseLeave={e => e.target.style.backgroundColor = '#ff6f91'}
      >
        Amor, isso é um botão e ele é uma máquina do tempo
      </button>

      {/* Imagem aleatória */}
      {imagemAtual && (
        <div style={{ marginTop: '40px', animation: 'fadeIn 0.6s ease-in-out' }}>
          <img
            src={imagemAtual}
            alt="memória"
            style={{
              maxWidth: '90%',
              borderRadius: '20px',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
            }}
          />
        </div>
      )}

      {/* Animação */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
