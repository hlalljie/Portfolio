import Header from '../Components/Sections/Header';
import styled from 'styled-components';
function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
        </div>
    )
}

const StyledBanner = styled.div`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    top:0;
    width: 100%;
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1542572937-0913e7e3e61b?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPVjV0MGpSVTFqVXx8ZW58MHx8fHx8');
    background-size: cover;
    .bannerContent {
        padding-top: 40px;
        display: flex;
        align-items: center;
        justify-content: left;
        min-height: calc(100vh - 40px);
        .textContainer {
            background-color: ${props => props.theme.colors.fog};
            box-shadow: -10px 0 80px 90px ${props => props.theme.colors.fog};
            padding: 40px 20px;
            margin-left: 7%;
            width: 40%;
            > h1 {
                color: ${props => props.theme.colors.dark};
                margin: 0 0 20px 0;
            }    
            .subHeadingWrapper {
                display: flex;
                justify-content: space-between;
                > h3{
                    margin: 0;
                    color: ${props => props.theme.colors.darkAccent};
                }
                
            }
        }
        
    }
`;


function Banner() {
    return (
        <StyledBanner>
            <div className='bannerContent'>
                <div className='textContainer'>
                    <h1>I'm Hayden</h1>
                    <div className='subHeadingWrapper'>
                        <h3> Developer</h3>
                        <h3>Designer</h3>
                        <h3>Educator</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </StyledBanner>
    )
}

export default Home;