import Navbar from '../Navbar/Navbar';
import {Button} from '../../GlobalStyles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroBtn,

} from './Land.style';

const Land = () =>{
    return(
        <div>
           <HeroContainer>
               <Navbar/>
               <HeroContent>
                   <HeroContentText>
                        <HeroTitle>
                            <HeroTitleText>First React App</HeroTitleText>
                           
                        </HeroTitle>
                        <HeroSubTitle>For a longer Life</HeroSubTitle>
                        <HeroText>
                            Get a fresh and tasty recepies that are well balanced and 
                            will improve your wellness, plus add nutrients to your body.
                        </HeroText>
                        {/* <HeroBtn to="/order-now">
                           <Button primary big bigFont bigRadius>Pick your meals</Button>
                        </HeroBtn> */}
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
        </div>
    )
}

export default Land;