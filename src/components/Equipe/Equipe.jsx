import Imagem1 from '../../images/imagem1.jpg'
import Imagem2 from '../../images/imagem2.png'
import Imagem3 from '../../images/imagem3.jpg'


import Perfil from '../Perfil/Perfil/';



const Equipe = (props) => {
    return(
    <>
 
<div className='perfis'>

<h1 className='t-center'>DeadCells</h1>

   
    <Perfil img={Imagem1} titulo={'Image1'}/>
    <Perfil img={Imagem2} titulo={'Image2'}/>
    <Perfil img={Imagem3} titulo={'Image3'}/>

</div>

</>
)
    }
    export default Equipe;