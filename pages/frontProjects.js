import styles from './../styleFront.module.css';
import Image from 'next/image';
import Link from 'next/link';

function HomeFront() {
    return <div className={styles.bodyF}>

      <div className={styles.Container}>

      <Image src='/images/login-google.png' alt='icon3' width='400' height='400' className={styles.FormGoogleImg}/>

        <div className={styles.LoginGoogleText}>
            <h1 className={styles.Text1}>
              Tela de Login Google
            </h1>
            <h1 className={styles.Text2}>
            Produzido com JavaScript, HTML e CSS, esse projeto foi feito para reproduzir a tela de login do google.
            </h1>
        </div>
      </div>
      
      <div className={styles.Container}>

      <Image src='/images/Pomodoro.png' alt='icon3' width='400' height='400' className={styles.Img}/>

        <div className={styles.PomodoroText}>
            <h1 className={styles.Text1}>
                Pomodoro Timer
            </h1>
            <h1 className={styles.Text2}>
                Dois cronômetros produzidos com CSS, HTML e JavaScript. Cada um possui a função de iniciar, parar e resetar o cronômetro. O primeiro é para o pomodoro, durando 25 minutos e o segundo para o intervalo, durando 5 minutos.
            </h1>
        </div>
      </div>

    

      <div className={styles.Container}>

      <Image src='/images/form.png' alt='icon3' width='400' height='400' className={styles.Img}/>

        <div className={styles.FormText}>
            <h1 className={styles.Text1}>
                Formulário de Dados
            </h1>
            <h1 className={styles.Text2}>
            Feito utilizando JavaScript, React e Node.js, esse formulário recebe dados como Nome, CPF e Número e confirma todos os dados em outra página web. Caso o usuário não responda os campos corretamente, ele é notificado pela página.
            </h1>
        </div>
      </div>
      
      <div className={styles.Container}>

      <Image src='/images/portfolio.png' alt='icon3' width='400' height='400' className={styles.Img}/>

        <div className={styles.PortfolioText}>
            <h1 className={styles.Text1}>
                Portfólio
            </h1>
            <h1 className={styles.Text2}>
            Este portfólio também foi uma produção pessoal. Ele foi feito utilizando as tecnologias  Node.js, React e Next.js, com a linguagem JavaScript.
            </h1>
        </div>
      </div>
      
      <Link href='/'>
        <button className={styles.btnVoltar}>Voltar</button>
      </Link>
         
      
      
    </div>
}
  
  export default HomeFront;
  