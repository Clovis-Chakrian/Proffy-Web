import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/59935060?s=460&u=b095669258b86faaac5c8802ee091774b88343de&v=4" alt="Clóvis Chakrian" />
                <div>
                    <strong>Clóvis Chakrian</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                jashdajhdahudsahlçdaslllllllllldkljdhkldglgAKJGSFDKLGAFKLGLakg
                        <br /> <br />
                        iosajcoiacodhvoashvosdahvuhvosdhvpousdhvosdhvodushvoasdhvoauvhosdhvapohvsdohvodshvdovhosdv
                        asdvjdisvjoasdhvpasdhvsoduhvoashdvoahsdvidasvhisaovihdhaduvhausdhvisdhvodvh
                    </p>

            <footer>
                <p>
                    Preço/hora:
                            <strong>R$ 75,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;