import React from 'react';
import About from '../../assets/img/about.png';
import PercentualGraph from '../Graph/PercentualGraph';

const AboutUs = () => {
  return (
    <>
      <div className='flex justify-between w-full'>
        <img src={About} className='w-1/2 select-none' />
        <div className='w-1/2 text-white bg-[#FFC40C] px-12 py-24'>
          <h1 className='text-3xl font-bold pb-4'>SOBRE NÓS</h1>
          <p className='text-base w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ea eveniet eligendi dignissimos commodi, ut, rerum harum incidunt aut sunt modi ullam molestias sint neque. Magni modi officiis libero quas.
            Veritatis blanditiis et modi ut soluta voluptas sint voluptate dolore, distinctio obcaecati ex odio recusandae qui numquam, tenetur rerum beatae totam nisi? Eos officiis, minus ipsum nobis vero error iste!
            Doloremque quam autem cupiditate. A sit porro voluptatem odit quidem, itaque expedita vitae exercitationem quia temporibus officia eaque fugiat impedit laudantium molestiae fuga veritatis maxime, tenetur quos iure delectus suscipit?
            Eos totam eum assumenda soluta consectetur dolorum exercitationem commodi architecto, atque repudiandae minus unde quam! Suscipit atque dolorem possimus minus magnam eum, dolores commodi, voluptatum quisquam officiis harum, at consectetur!</p>
          <div className='flex justify-between pt-6 w-2/3'>
            <PercentualGraph initialProgress={18} name={'Percentual'} value={'18%'} />
            <PercentualGraph initialProgress={80} name={'Hora'} value={'12:00'} />
            <PercentualGraph initialProgress={35} name={'Valor'} value={'R$350'} />

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
