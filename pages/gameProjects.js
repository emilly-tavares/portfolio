import styles from './../styleGame.module.css';
import Image from 'next/image';
import Link from 'next/link'

function HomeGames() {
    return <div className={styles.bodyGP}> 

          <div className={styles.Container}>

            <div>
            <Image src='/images/FarmLand.png' alt='icon3'  width='400' height='400'   className={styles.FarmLandImg}/>
            </div>
          
          
    

           <div className={styles.FarmLandText}>
              <h1 className={styles.Text1}>
               Farm Land 
              </h1>
              <h1 className={styles.Text2}>
               (Em desenvolvimento) É um jogo mobile que está sendo produzido na Unity com a temática de fazenda. Ele possui várias mecânicas como armazenamento de itens, colheita, movimentação, animação do personagem, entre outros.
              </h1>
           </div>

          </div>

          <div className={styles.Container}>

          <Image src='/images/MazeGame3D.png' alt='icon3' width='400' height='400' className={styles.MazeGame3DImg}/>

           <div className={styles.MazeGame3DText}>
              <h1 className={styles.Text1}>
               Maze Game 3D
              </h1>
              <h1 className={styles.Text2}>
              Jogo de labirinto 3D cuja missão do player é achar o fim do labirinto no menor tempo possível e apenas vendo o labirinto no início, trabalhando na memória do jogador. Entre as mecânicas envolvidas estão: movimentação e animação do personagem, câmera FPS, cronômetro e obstáculos.
              </h1>
           </div>

          </div>

          <div className={styles.Container}>

          <Image src='/images/MazeGame2D.png' alt='icon3' width='400' height='400' className={styles.MazeGame2DImg}/>

           <div className={styles.MazeGame2DText}>
              <h1 className={styles.Text1}>
               Maze Game 2D
              </h1>
              <h1 className={styles.Text2}>
              Jogo 2D, o qual a missão do personagem é achar o fim do labirinto com apenas o auxílio de uma lanterna, sem ver claramente onde é o final. Entre as mecânicas presentes no jogo estão: uso de luzes 2D, movimentação do personagem e obstáculos.
              </h1>
           </div>

          </div>


          <Link href='/'>
            <button className={styles.btnVoltar}>Voltar</button>
          </Link>
         
    </div>
}
  
  export default HomeGames;