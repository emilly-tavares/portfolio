import styles from './../style.module.css';
import Image from 'next/image';
import Link from 'next/link'


function Home(){

    return <div className={styles.body}>

          
           

            <div className={styles.apresentacao}>
              <div>
              <h1 className={styles.helloWorld}>Hello world,</h1>  
              <h1 className={styles.apresentacaoText}>Me chamo Emilly e sou desenvolvedora front-end e de jogos digitais</h1>
              </div>
             
              <div>
              <Image src='/images/codigo.png' alt='icon' width='390' height='350' className={styles.apresentacaoImg}/> 
              </div>
            </div>

            <div className={styles.skills}>
            <Image src='/images/skills.png' alt='icon' width='650' height='110' className={styles.skillsImg}/> 
            </div>

            


            <div className={styles.btnprojects}>
              <h1 className={styles.h1Projects}>Meus Projetos</h1>
              <div className={styles.btnproject_container}>
                <Link href='/gameProjects'>
                  <button className={styles.btnproject}>Jogos</button>
                </Link>
                <Link href='/frontProjects'>
                  <button className={styles.btnproject}>Projetos Web</button>
                </Link>
                
              </div>
              <Image src='/images/c_left.png' alt='icon' width='390' height='350' className={styles.c_left}/>
              <Image src='/images/c_right.png' alt='icon2' width='270' height='250' className={styles.c_right}/>
              <Image src='/images/c.png' alt='icon3' width='35' height='35' className={styles.c}/>
            </div>

           

            <div className={styles.aboutme}>
              <div className={styles.aboutme1}>
                <h1>Sobre mim</h1>
              </div>

              <div className={styles.aboutme2}>
                <h3>▷ Mais de dois anos de experiência com front-end e desenvolvimento de jogos</h3>
                <h3>▷ Participação na produção de 3 jogos para o NAVE Recife</h3>
                <h3>▷ Experiência com Node, React and Next.js</h3>
                <h3>▷ Conhecimento em Unity 3D, 2D e jogos mobile</h3>
              </div>
            </div>

            <div className={styles.contactme}>
            <div className={styles.contactme2}>
                <h3>▷ emillybeatriz.bt@hotmail.com</h3>
                <a className={styles.a} href="https://www.linkedin.com/in/emilly-tavares-110147259/"><Image src='/images/linkedin_.png' href='https://www.linkedin.com/in/emilly-tavares-110147259/' alt='icon' width='50' height='50' className={styles.contact}/> </a>
                <a className={styles.a}  href="https://github.com/emilly-tavares"><Image src='/images/github_.png' alt='icon' width='60' height='60' className={styles.contact_g}/> </a>
              </div>

              <div className={styles.contactme1}>
                <h1>Entre em contato</h1>
              </div>

             
            </div>

            
       

       
       
        

    </div>
}

export default Home;