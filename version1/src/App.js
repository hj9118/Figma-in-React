import './App.css';
import { Main, Choosing, Half, Product, Review, Footer } from './style/style';
import logo from './img/logo.png';
import {
  FaShoppingBag,
  FaLayerGroup,
  FaRegCheckCircle,
  FaCalendarAlt,
  FaStar,
} from 'react-icons/fa';
import { ADInput, CenterTitle, Content, Input, Title } from './style/global';
import InfoCard from './components/InfoCard';
import ProductCard from './components/ProductCard';
import prod1 from './img/image-1.png';
import prod2 from './img/image-2.png';
import prod3 from './img/image-3.png';
import prod4 from './img/image-4.png';
import ReviewCard from './components/ReviewCard';
import img10 from './img/image-10.png';
import img11 from './img/image-11.png';
import img12 from './img/image-12.png';

function App() {
  return (
    <>
      <Main>
        <nav>
          <img className='logo' src={logo} alt='logo' />
          <ul>
            <li>Funrniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <FaShoppingBag />
        </nav>

        <h1>Make Your Interior More Minimaistic & Modern</h1>
        <p>
          Bringing interiors to life, understanding the person or people living
          in a home is far greater need in design.
        </p>
        <div className='center'>
          <Input type='text' placeholder='Search Furniture' />
        </div>
      </Main>
      <Choosing>
        <Title>Why Choosing Us</Title>
        <div className='content'>
          <InfoCard
            icon={<FaRegCheckCircle />}
            title='Professionalism'
            detail='We deliver the final work with great professional way.'
          >
            content area
          </InfoCard>
          <InfoCard
            icon={<FaLayerGroup />}
            title='Smooth workflow'
            detail='We provide the most easy smoth workflow of interior design.'
          >
            content area
          </InfoCard>
          <InfoCard
            icon={<FaCalendarAlt />}
            title='Trusted Platform'
            detail='People trust us since we openend the company'
          >
            content area
          </InfoCard>
          <InfoCard
            icon={<FaStar />}
            title='Qualified employee'
            detail='Our employees are the best of the field from the city'
          >
            content area
          </InfoCard>
        </div>
      </Choosing>
      <Half>
        <Title>Visualize your ideas with us</Title>
        <div className='half-grid'>
          <div className='left'>
            <Content>
              We are ready to help you build and also realize the room design
              that you dream of, with our experts and also the best category
              recommendations from us
            </Content>
            <details>
              <summary>Modern</summary>
              Modern design is a term in the design world that refers to a house
              with a clean design, simple color choices, the use of materials
              including metal, glass, and steel, and is usually accompanied by
              clean lines.
            </details>
            <details>
              <summary>Contemporary</summary>
              Modern design is a term in the design world that refers to a house
              with a clean design, simple color choices, the use of materials
              including metal, glass, and steel, and is usually accompanied by
              clean lines.
            </details>
            <details>
              <summary>Minimalis</summary>
              Modern design is a term in the design world that refers to a house
              with a clean design, simple color choices, the use of materials
              including metal, glass, and steel, and is usually accompanied by
              clean lines.
            </details>
            <details>
              <summary>Industrial</summary>
              Modern design is a term in the design world that refers to a house
              with a clean design, simple color choices, the use of materials
              including metal, glass, and steel, and is usually accompanied by
              clean lines.
            </details>
            <p>See more catagory</p>
          </div>
          <div className='idea-right'></div>
        </div>
      </Half>
      <Product>
        <CenterTitle>Featured Product</CenterTitle>
        <div className='content'>
          <ProductCard img={prod1} price={'795.000'} />
          <ProductCard img={prod2} price={'795.000'} />
          <ProductCard img={prod3} price={'2.555.000'} />
          <ProductCard img={prod4} price={'1.500.000'} />
        </div>
      </Product>
      <Review>
        <CenterTitle style={{ paddingTop: '84px' }}>
          What they say about our services
        </CenterTitle>
        <div className='content'>
          <ReviewCard
            title={'Best planning service'}
            content={
              'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.'
            }
            img={img10}
            name={'John doe'}
            job={'Project manager of cupalo'}
          />
          <ReviewCard
            title={'Flexible and reliable'}
            content={
              'Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!'
            }
            img={img11}
            name={'Woods Moniq'}
            job={'Freelancer'}
          />
          <ReviewCard
            title={'solution innovative'}
            content={
              '"I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.'
            }
            img={img12}
            name={'Denis Rara'}
            job={'Architect at BPPLU'}
          />
        </div>
      </Review>
      <Half>
        <div className='half-grid'>
          <div className='ad-left'></div>
          <div className='right'>
            <Title style={{ marginLeft: 0 }}>Make your room feel homey</Title>
            <p>
              We help people not only to make the room at home better, but we
              help people to feel a more homey and comfortable room, you don’t
              have to worry about the result because of these interiors are made
              by people who are professionals in their dields with an elegant
              and lucuriois style and with premium quality materials Contact us
              if you are interested in working with us
            </p>
            <ADInput placeholder='Insert your email address' />
          </div>
        </div>
      </Half>

      <Footer>
        <section>
          <img src={logo} height={70} alt='logo' />
          <div>
            <h2>Features</h2>
            <ul>
              <li>
                <a href='#'>Our Features</a>
              </li>
              <li>
                <a href='#'>Affiliate Program</a>
              </li>
              <li>
                <a href='#'>Press Kit</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>
                <a href='#'>Account</a>
              </li>
              <li>
                <a href='#'>Help</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms of Use</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Social Media</h2>
            <ul>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>Product Hunt</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
              <li>
                <a href='#'>Github</a>
              </li>
            </ul>
          </div>
        </section>
        <p>Copyright 2021 ©shady rhymes</p>
      </Footer>
    </>
  );
}

export default App;
